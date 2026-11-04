<template>
  <figure class="pharmacy-framework" :aria-label="copy.summary">
    <figcaption class="framework-caption">{{ copy.framework }}</figcaption>
    <div class="pharmacy-flow-area">
      <FlowConnections :edges="edges" :revision="currentLang" />

      <div class="source-group flow-node" data-flow-node="sources">
        <h3 class="group-title">{{ copy.sources }}</h3>
        <div class="source-grid">
          <div v-for="source in sources" :key="source.key" class="source-tile">
            <ResearchIllustration :name="source.icon" class="source-illustration" />
            <h4>{{ copy[source.key] }}</h4>
          </div>
        </div>
      </div>

      <div class="schema-band flow-node" data-flow-node="schema">
        <div class="schema-description">
          <span class="layer-label">{{ copy.representation }}</span>
          <h3>{{ copy.standard }}</h3>
          <p>{{ copy.standardDetail }}</p>
        </div>
        <svg class="schema-graph" viewBox="0 0 460 140" role="img" :aria-label="copy.schemaDescription">
          <g fill="none" stroke="#8db7de" stroke-width="1.8">
            <path d="M66 70 207 29 395 70 207 111 66 70M66 70h329M207 29v82" />
          </g>
          <g fill="#edf5ff" stroke="#89b3df" stroke-width="1.2">
            <rect x="15" y="48" width="102" height="44" rx="11" />
            <rect x="163" y="7" width="88" height="44" rx="11" fill="#e6f4f8" />
            <rect x="163" y="89" width="88" height="44" rx="11" fill="#e6f4f8" />
            <rect x="351" y="48" width="88" height="44" rx="11" />
          </g>
          <g fill="#3d7eb9"><circle cx="136" cy="50" r="3" /><circle cx="300" cy="49" r="3" /><circle cx="300" cy="91" r="3" /><circle cx="136" cy="90" r="3" /><circle cx="282" cy="70" r="3" /></g>
          <g class="graph-labels" text-anchor="middle" dominant-baseline="central">
            <text x="66" y="70">{{ copy.moleculeShort }}</text>
            <text x="207" y="29">{{ copy.gene }}</text>
            <text x="207" y="111">{{ copy.protein }}</text>
            <text x="395" y="70">{{ copy.target }}</text>
          </g>
        </svg>
      </div>

      <div class="pipeline-grid">
        <div v-for="stage in stages" :key="stage.key" class="pipeline-stage flow-node" :data-flow-node="stage.key">
          <h3>{{ copy[stage.key] }}</h3>
          <ResearchIllustration :name="stage.icon" class="stage-illustration" />
          <p>{{ copy[stage.detail] }}</p>
        </div>
      </div>

      <div class="output-grid">
        <div class="output-card flow-node" data-flow-node="prediction">
          <ResearchIcon name="flask" class="output-icon" />
          <div><h3>{{ copy.newDrug }}</h3><p>{{ copy.newDrugDetail }}</p></div>
        </div>
        <div class="output-card flow-node" data-flow-node="attribution">
          <ResearchIcon name="pill" class="output-icon" />
          <div><h3>{{ copy.existingDrug }}</h3><p>{{ copy.existingDrugDetail }}</p></div>
        </div>
      </div>
    </div>
  </figure>
</template>

<script setup>
import { computed } from 'vue';
import { useLanguage } from '../../composables/useLanguage.js';
import ResearchIcon from './ResearchIcon.vue';
import ResearchIllustration from './ResearchIllustration.vue';
import FlowConnections from './FlowConnections.vue';

const { currentLang } = useLanguage();
const sources = [
  { key: 'molecule', icon: 'molecule' },
  { key: 'gene', icon: 'dna' },
  { key: 'protein', icon: 'protein' },
  { key: 'target', icon: 'target' },
];
const stages = [
  { key: 'graph', icon: 'graph', detail: 'graphDetail' },
  { key: 'retrieval', icon: 'evidence', detail: 'retrievalDetail' },
  { key: 'agent', icon: 'agent', detail: 'agentDetail' },
];
const edges = [
  { id: 'sources-schema', from: 'sources', to: 'schema', direction: 'down' },
  { id: 'schema-graph', from: 'schema', to: 'graph', direction: 'down' },
  { id: 'graph-retrieval', from: 'graph', to: 'retrieval', direction: 'auto' },
  { id: 'retrieval-agent', from: 'retrieval', to: 'agent', direction: 'auto' },
  { id: 'agent-prediction', from: 'agent', to: 'prediction', splitGroup: 'drug-tasks' },
  { id: 'agent-attribution', from: 'agent', to: 'attribution', splitGroup: 'drug-tasks' },
];
const content = {
  zh: {
    summary: '药学统一研究框架：分子结构、基因、蛋白与靶点信息进入机制链统一标准，依次构建图结构、检索证据并进行统一推理，支持新药毒性预测和已有药物毒性溯因。',
    framework: '研究框架', sources: '多源药学信息', molecule: '分子结构', moleculeShort: '分子', gene: '基因', protein: '蛋白', target: '靶点',
    representation: '统一表征', standard: '机制链统一标准', standardDetail: '统一实体标识、关系类型与证据标注', schemaDescription: '分子、基因、蛋白与靶点在统一机制链标准中的关联网络。',
    graph: '图结构构建', graphDetail: '实体 · 关系 · 路径', retrieval: '证据检索', retrievalDetail: '关联证据与来源', agent: '统一推理智能体', agentDetail: '结合图结构与检索证据',
    newDrug: '新药：毒性预测', newDrugDetail: '研判潜在毒性风险', existingDrug: '已有药物：毒性溯因', existingDrugDetail: '推断可疑致毒环节与证据链',
  },
  en: {
    summary: 'A unified pharmaceutical research framework: molecular, gene, protein and target information enters a shared mechanism-chain schema, followed by graph construction, evidence retrieval and agent reasoning for toxicity prediction in new drugs and toxicity attribution in existing drugs.',
    framework: 'Research framework', sources: 'Pharmaceutical inputs', molecule: 'Molecular structure', moleculeShort: 'Molecule', gene: 'Gene', protein: 'Protein', target: 'Target',
    representation: 'Unified representation', standard: 'Mechanism-chain schema', standardDetail: 'Shared entities, relations and evidence', schemaDescription: 'A relational network of molecules, genes, proteins and targets in a shared mechanism-chain schema.',
    graph: 'Graph construction', graphDetail: 'Entities · Relations · Paths', retrieval: 'Evidence retrieval', retrievalDetail: 'Linked evidence and sources', agent: 'Unified reasoning', agentDetail: 'Reason over graph and evidence',
    newDrug: 'New drugs: toxicity prediction', newDrugDetail: 'Assess potential toxicity risks', existingDrug: 'Existing drugs: attribution', existingDrugDetail: 'Infer candidate toxic links and evidence',
  },
};
const copy = computed(() => content[currentLang.value] || content.zh);
</script>

<style scoped>
.pharmacy-framework {
  --framework-blue: #003f88;
  position: relative;
  margin: 0;
  border: 1px solid #d8e7f7;
  border-radius: 16px;
  color: #1b3553;
  background: #fbfdff;
  box-shadow: 0 10px 32px #285d9410;
}
.framework-caption { position: absolute; top: -14px; left: 26px; margin: 0; padding: 5px 15px; border-radius: 6px; background: #003f88; color: #fff; font-size: 13px; font-weight: 600; line-height: 1.5; }
.pharmacy-flow-area { position: relative; padding: 34px 26px 24px; }
.flow-node { position: relative; z-index: 1; min-width: 0; }
.source-group { padding: 0 18px 18px; margin-bottom: 38px; border-radius: 12px; background: #eef5fd; }
.group-title { display: flex; align-items: center; justify-content: center; height: 42px; margin: 0; color: #466989; font-size: 13px; line-height: 1.5; font-weight: 600; letter-spacing: .02em; }
.source-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; }
.source-tile { display: grid; grid-template-rows: 90px 42px; justify-items: center; align-items: center; min-width: 0; padding: 9px 8px 7px; background: #fff; border-radius: 9px; box-shadow: 0 3px 11px #285d9407; }
.source-illustration { width: 116px; height: 87px; max-width: 100%; }
.source-tile h4 { display: flex; align-items: center; justify-content: center; align-self: stretch; max-width: 100%; margin: 0; color: #284763; font-size: 15px; line-height: 1.4; text-align: center; font-weight: 600; }
.schema-band { display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 24px; height: 162px; margin-bottom: 44px; padding: 18px 26px; border-radius: 10px; border: 1px solid #cadff4; background: linear-gradient(110deg, #fff, #edf5ff); }
.schema-description { display: grid; grid-template-rows: 22px 52px 38px; align-items: center; }
.layer-label { color: #7189a3; font-size: 11px; line-height: 1.5; font-weight: 600; letter-spacing: .055em; }
.schema-description h3 { margin: 0; color: #173d68; font-size: 20px; font-weight: 600; line-height: 1.35; }
.schema-description p { margin: 0; color: #61768c; font-size: 13px; line-height: 1.45; }
.schema-graph { display: block; width: 100%; max-height: 122px; }
.graph-labels { fill: #275482; font-size: 14px; font-family: inherit; }
.pipeline-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 44px; margin-bottom: 52px; }
.pipeline-stage { display: grid; grid-template-rows: 48px 104px 40px; align-items: center; justify-items: center; padding: 12px 14px; border: 1px solid #d2e3f5; border-radius: 11px; background: #fff; box-shadow: 0 5px 18px #285d9406; text-align: center; }
.pipeline-stage h3 { display: flex; align-items: center; justify-content: center; margin: 0; min-width: 0; color: #164875; font-size: 17px; font-weight: 600; line-height: 1.4; }
.stage-illustration { width: 138px; height: 104px; max-width: 100%; }
.pipeline-stage p { margin: 0; color: #667c91; font-size: 12px; line-height: 1.5; }
.output-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 28px; }
.output-card { display: grid; grid-template-columns: 44px minmax(0, 1fr); align-items: center; gap: 16px; min-height: 118px; padding: 14px 22px; border-radius: 10px; border: 1px solid #cfe2f5; background: #eef6ff; }
.output-card > div { display: grid; grid-template-rows: 44px 36px; align-items: center; }
.output-icon { width: 44px; height: 48px; color: #3a7ab5; }
.output-card h3 { margin: 0; color: #214e77; font-size: 16px; font-weight: 600; line-height: 1.35; }
.output-card p { margin: 0; color: #5e768e; font-size: 12px; line-height: 1.45; }
@media (max-width: 1000px) {
  .pharmacy-flow-area { padding: 32px 20px 22px; }
  .source-grid { gap: 12px; }
  .source-group { padding-left: 12px; padding-right: 12px; }
  .source-tile { padding-left: 6px; padding-right: 6px; }
  .source-tile h4 { font-size: 14px; }
  .schema-band { gap: 14px; padding: 16px 20px; }
  .schema-description h3 { font-size: 18px; }
  .schema-description p { font-size: 12px; }
  .pipeline-grid { gap: 32px; }
  .pipeline-stage { padding: 12px 9px; }
  .pipeline-stage h3 { font-size: 16px; }
  .output-card { gap: 12px; padding-left: 16px; padding-right: 16px; }
  .output-card h3 { font-size: 15px; }
}
@media (max-width: 700px) {
  .framework-caption { left: 18px; }
  .pharmacy-flow-area { padding: 32px 16px 20px; }
  .source-group { padding: 0 10px 12px; margin-bottom: 36px; }
  .group-title { height: 40px; font-size: 12px; }
  .source-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
  .source-tile { grid-template-rows: 80px 42px; padding-top: 6px; padding-bottom: 6px; }
  .source-illustration { width: 106px; height: 80px; }
  .schema-band { grid-template-columns: minmax(0, 1fr); grid-template-rows: 108px 110px; gap: 8px; height: 254px; padding: 14px 14px; margin-bottom: 38px; text-align: center; }
  .schema-description { grid-template-rows: 22px 48px 38px; }
  .schema-description h3 { font-size: 19px; }
  .schema-description p { font-size: 12px; }
  .schema-graph { max-height: 110px; align-self: center; }
  .pipeline-grid { grid-template-columns: minmax(0, 1fr); gap: 34px; margin-bottom: 42px; }
  .pipeline-stage { grid-template-columns: 100px minmax(0, 1fr); grid-template-rows: 48px 42px; justify-items: start; padding: 12px 15px; text-align: left; column-gap: 10px; }
  .pipeline-stage h3 { grid-column: 2; grid-row: 1; justify-content: flex-start; font-size: 16px; }
  .stage-illustration { grid-column: 1; grid-row: 1 / 3; width: 100px; height: 80px; }
  .pipeline-stage p { grid-column: 2; grid-row: 2; font-size: 12px; }
  .output-grid { grid-template-columns: minmax(0, 1fr); gap: 18px; margin-left: 14px; }
  .output-card { min-height: 114px; grid-template-columns: 38px minmax(0, 1fr); gap: 12px; padding: 12px 14px; }
  .output-card > div { grid-template-rows: 44px 36px; }
  .output-card h3 { font-size: 15px; }
  .output-icon { width: 38px; height: 44px; }
}
@media (max-width: 370px) {
  .pharmacy-flow-area { padding-left: 12px; padding-right: 12px; }
  .pipeline-stage { grid-template-columns: 80px minmax(0, 1fr); padding-left: 10px; padding-right: 10px; gap: 0 8px; }
  .stage-illustration { width: 80px; height: 72px; }
  .pipeline-stage h3 { font-size: 15px; }
  .output-card { grid-template-columns: 32px minmax(0, 1fr); gap: 8px; padding-left: 10px; padding-right: 10px; }
  .output-icon { width: 32px; }
}
</style>
