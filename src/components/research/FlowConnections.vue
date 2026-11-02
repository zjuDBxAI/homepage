<template>
  <svg ref="layer" class="flow-connections" :viewBox="`0 0 ${geometry.width} ${geometry.height}`" aria-hidden="true" focusable="false">
    <defs>
      <marker :id="markerId" markerWidth="8" markerHeight="8" refX="7" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
        <path d="M1 0.5 7 3.5 1 6.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
      </marker>
    </defs>
    <path v-for="edge in geometry.paths" :key="edge.id" :d="edge.path" :marker-end="`url(#${markerId})`"
      :data-edge="edge.id" :data-from="edge.from" :data-to="edge.to" :data-direction="edge.direction"
      :data-start-x="edge.start.x" :data-start-y="edge.start.y" :data-end-x="edge.end.x" :data-end-y="edge.end.y"
      :data-end-side="edge.endSide" />
  </svg>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';

const props = defineProps({
  edges: { type: Array, required: true },
  revision: { type: [String, Number], default: '' },
  gap: { type: Number, default: 7 },
});
const layer = ref(null);
const geometry = ref({ width: 1, height: 1, paths: [] });
const markerId = `flow-arrow-${Math.random().toString(36).slice(2)}`;
let resizeObserver;
let mutationObserver;
let scheduledFrame;
let active = true;
let observedNodes = [];

const number = value => Number(value.toFixed(2));
const point = (x, y) => ({ x: number(x), y: number(y) });

function roundedPath(points) {
  const pts = points.filter((p, index) => !index || p.x !== points[index - 1].x || p.y !== points[index - 1].y);
  if (pts.length < 2) return '';
  let result = `M ${pts[0].x} ${pts[0].y}`;
  for (let index = 1; index < pts.length - 1; index++) {
    const before = pts[index - 1], corner = pts[index], after = pts[index + 1];
    const incoming = Math.hypot(corner.x - before.x, corner.y - before.y);
    const outgoing = Math.hypot(after.x - corner.x, after.y - corner.y);
    const radius = Math.min(6, incoming / 2, outgoing / 2);
    if (!radius) continue;
    const enter = point(corner.x + (before.x - corner.x) * radius / incoming, corner.y + (before.y - corner.y) * radius / incoming);
    const leave = point(corner.x + (after.x - corner.x) * radius / outgoing, corner.y + (after.y - corner.y) * radius / outgoing);
    result += ` L ${enter.x} ${enter.y} Q ${corner.x} ${corner.y} ${leave.x} ${leave.y}`;
  }
  const end = pts[pts.length - 1];
  return `${result} L ${end.x} ${end.y}`;
}

function measure() {
  const svg = layer.value;
  const container = svg?.parentElement;
  if (!active || !container) return;
  const canvas = svg.getBoundingClientRect();
  if (!canvas.width || !canvas.height) return;
  const elements = [...container.querySelectorAll('[data-flow-node]')];
  if (resizeObserver && (elements.length !== observedNodes.length || elements.some((element, index) => element !== observedNodes[index]))) {
    observedNodes.forEach(element => resizeObserver.unobserve(element));
    elements.forEach(element => resizeObserver.observe(element));
    observedNodes = elements;
  }
  const nodes = new Map(elements.map(element => {
    const box = element.getBoundingClientRect();
    return [element.dataset.flowNode, {
      left: box.left - canvas.left, right: box.right - canvas.left,
      top: box.top - canvas.top, bottom: box.bottom - canvas.top,
      cx: box.left + box.width / 2 - canvas.left,
      cy: box.top + box.height / 2 - canvas.top,
      width: box.width, height: box.height,
    }];
  }));
  const paths = [];
  const groups = new Map();
  props.edges.forEach(edge => {
    if (edge.splitGroup) {
      if (!groups.has(edge.splitGroup)) groups.set(edge.splitGroup, []);
      groups.get(edge.splitGroup).push(edge);
      return;
    }
    const from = nodes.get(edge.from), to = nodes.get(edge.to);
    if (!from || !to) return;
    const horizontal = edge.direction === 'right' || (edge.direction !== 'down' && to.left >= from.right - 2 && Math.abs(to.cy - from.cy) < Math.max(from.height, to.height) / 2);
    const start = horizontal ? point(from.right + props.gap, from.cy) : point(from.cx, from.bottom + props.gap);
    const end = horizontal ? point(to.left - props.gap, to.cy) : point(to.cx, to.top - props.gap);
    const middle = horizontal ? number((start.x + end.x) / 2) : number((start.y + end.y) / 2);
    const route = horizontal
      ? [start, point(middle, start.y), point(middle, end.y), end]
      : [start, point(start.x, middle), point(end.x, middle), end];
    paths.push({ ...edge, start, end, path: roundedPath(route), direction: horizontal ? 'right' : 'down', endSide: horizontal ? 'left' : 'top' });
  });
  groups.forEach(edges => {
    const source = nodes.get(edges[0].from);
    const targets = edges.map(edge => ({ edge, box: nodes.get(edge.to) })).filter(item => item.box);
    if (!source || !targets.length) return;
    const start = point(source.cx, source.bottom + props.gap);
    const firstTop = Math.min(...targets.map(item => item.box.top));
    const trunkY = number((start.y + firstTop - props.gap) / 2);
    const stacked = targets.length > 1 && Math.max(...targets.map(item => item.box.cx)) - Math.min(...targets.map(item => item.box.cx)) < Math.min(...targets.map(item => item.box.width)) / 2;
    const trunkX = number(Math.max(8, Math.min(...targets.map(item => item.box.left)) - 18));
    targets.forEach(({ edge, box }, index) => {
      const end = stacked ? point(box.left - props.gap, box.cy) : point(box.cx, box.top - props.gap);
      const route = stacked
        ? index === 0
          ? [start, point(start.x, trunkY), point(trunkX, trunkY), point(trunkX, end.y), end]
          : [point(trunkX, trunkY), point(trunkX, end.y), end]
        : index === 0
          ? [start, point(start.x, trunkY), point(end.x, trunkY), end]
          : [point(start.x, trunkY), point(end.x, trunkY), end];
      paths.push({ ...edge, start, end, path: roundedPath(route), direction: stacked ? 'split-stacked' : 'split', endSide: stacked ? 'left' : 'top' });
    });
  });
  const next = { width: number(canvas.width), height: number(canvas.height), paths };
  if (JSON.stringify(next) !== JSON.stringify(geometry.value)) geometry.value = next;
}

function schedule() {
  if (!active) return;
  cancelAnimationFrame(scheduledFrame);
  scheduledFrame = requestAnimationFrame(measure);
}

watch(() => [props.revision, props.edges], () => nextTick(schedule), { deep: true });
onMounted(() => {
  active = true;
  resizeObserver = new ResizeObserver(schedule);
  resizeObserver.observe(layer.value.parentElement);
  mutationObserver = new MutationObserver(schedule);
  mutationObserver.observe(layer.value.parentElement, { subtree: true, childList: true, characterData: true });
  window.addEventListener('resize', schedule);
  document.fonts?.ready.then(schedule);
  document.fonts?.addEventListener('loadingdone', schedule);
  nextTick(schedule);
});
onBeforeUnmount(() => {
  active = false;
  cancelAnimationFrame(scheduledFrame);
  resizeObserver?.disconnect();
  mutationObserver?.disconnect();
  window.removeEventListener('resize', schedule);
  document.fonts?.removeEventListener('loadingdone', schedule);
});
</script>

<style scoped>
.flow-connections { position: absolute; inset: 0; z-index: 0; display: block; width: 100%; height: 100%; overflow: visible; pointer-events: none; color: #4b87c6; }
.flow-connections > path { fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
</style>
