<template>
  <figure class="research-figure">
    <button class="figure-preview" type="button" @click="openFigure" aria-haspopup="dialog" :aria-label="t('放大查看 AnesTRACE 完整框架图', 'Enlarge the complete AnesTRACE framework')">
      <img :src="src" :alt="alt" width="3000" height="1741" loading="lazy" decoding="async" />
      <span class="figure-enlarge" aria-hidden="true">↗</span>
    </button>
    <figcaption>
      <span>AnesTRACE-Bench <span class="caption-separator">/</span> AnesTRACE-Eval</span>
      <button type="button" class="figure-open-link" @click="openFigure">{{ t('查看完整框架图', 'View full framework') }} <span aria-hidden="true">↗</span></button>
    </figcaption>

    <Teleport to="body">
      <dialog ref="dialog" class="research-figure-dialog" aria-labelledby="anestrace-dialog-title" @close="onClosed" @cancel.prevent="closeFigure" @click="onBackdropClick">
        <div class="figure-dialog-shell">
          <header class="figure-dialog-toolbar">
            <div><h2 id="anestrace-dialog-title">AnesTRACE</h2><span>{{ t('完整研究框架', 'Complete research framework') }}</span></div>
            <div class="figure-dialog-actions">
              <button type="button" @click="actualSize = !actualSize" :aria-pressed="actualSize">{{ actualSize ? t('适应窗口', 'Fit to window') : t('原始尺寸', 'Original size') }}</button>
              <a :href="src" target="_blank" rel="noopener noreferrer">{{ t('打开原图', 'Open image') }} ↗</a>
              <button class="figure-close" type="button" @click="closeFigure" :aria-label="t('关闭框架图', 'Close framework image')">×</button>
            </div>
          </header>
          <div class="figure-dialog-viewport" :class="{ 'is-actual-size': actualSize }" tabindex="0" :aria-label="t('框架图，可滚动查看原始尺寸', 'Framework image; scroll to explore its original size')">
            <img :src="src" :alt="alt" width="3000" height="1741" />
          </div>
        </div>
      </dialog>
    </Teleport>
  </figure>
</template>

<script setup>
import { onUnmounted, ref } from 'vue';
import { useLanguage } from '../../composables/useLanguage';

defineProps({ src: { type: String, required: true }, alt: { type: String, required: true } });
const { currentLang } = useLanguage();
const t = (zh, en) => currentLang.value === 'zh' ? zh : en;
const dialog = ref(null);
const actualSize = ref(false);
let returnFocus = null;
let previousOverflow = null;

function openFigure(event) {
  if (!dialog.value || dialog.value.open) return;
  returnFocus = event.currentTarget;
  actualSize.value = false;
  previousOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';
  dialog.value.showModal();
}
function closeFigure() {
  dialog.value?.close();
  onClosed();
}
function onClosed() {
  if (previousOverflow !== null) {
    document.body.style.overflow = previousOverflow;
    previousOverflow = null;
  }
  if (returnFocus?.isConnected) returnFocus.focus({ preventScroll: true });
  returnFocus = null;
}
function onBackdropClick(event) {
  if (event.target !== dialog.value) return;
  const rect = dialog.value.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeFigure();
}
onUnmounted(() => {
  if (dialog.value?.open) dialog.value.close();
  onClosed();
});
</script>

<style scoped>
.research-figure { margin: 26px 0 0; padding-top: 24px; border-top: 1px solid #e0e9f3; }
.figure-preview { position: relative; display: block; width: 100%; border: 1px solid #e1e8f0; border-radius: 8px; padding: 12px; background: white; cursor: zoom-in; overflow: hidden; }
.figure-preview img { display: block; width: 100%; max-width: 100%; height: auto; }
.figure-preview:hover { border-color: #83acd9; box-shadow: 0 5px 20px #003f880a; }
.figure-enlarge { position: absolute; right: 12px; bottom: 12px; display: grid; place-items: center; width: 34px; height: 34px; border: 1px solid #d6e4f3; border-radius: 6px; color: #003f88; background: #fffffff2; font-size: 22px; line-height: 1; }
figcaption { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 12px 2px 0; font-size: 13px; line-height: 1.6; color: #65758a; }
.caption-separator { padding: 0 8px; color: #9faec0; }
.figure-open-link { border: 0; padding: 4px 0; background: transparent; color: #003f88; font: inherit; cursor: pointer; font-weight: 500; }
.figure-open-link:hover { text-decoration: underline; text-underline-offset: 4px; }
.research-figure button:focus-visible, .research-figure-dialog button:focus-visible, .research-figure-dialog a:focus-visible { outline: 2px solid #1365b9; outline-offset: 4px; }
.research-figure-dialog { width: min(94vw, 1600px); max-width: none; max-height: 94vh; max-height: 94dvh; padding: 0; border: 0; border-radius: 12px; background: white; box-shadow: 0 24px 100px #06192c55; overflow: hidden; color: #18334e; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif; }
.research-figure-dialog::backdrop { background: #0b1e35b8; backdrop-filter: blur(4px); }
.figure-dialog-shell { display: flex; flex-direction: column; max-height: 94vh; max-height: 94dvh; }
.figure-dialog-toolbar { display: flex; flex-shrink: 0; justify-content: space-between; align-items: center; gap: 20px; padding: 18px 24px; border-bottom: 1px solid #dfe8f1; background: #f7faff; }
.figure-dialog-toolbar > div:first-child { display: flex; align-items: baseline; gap: 12px; }
.figure-dialog-toolbar h2 { margin: 0; font-family: inherit; font-size: 20px; line-height: 1.4; color: #14385f; }
.figure-dialog-toolbar span { font-size: 13px; color: #64788e; }
.figure-dialog-actions { display: flex; gap: 10px; align-items: center; }
.figure-dialog-actions button, .figure-dialog-actions a { display: inline-flex; align-items: center; justify-content: center; min-height: 36px; padding: 6px 12px; border: 1px solid #c8d9ed; border-radius: 6px; background: #fff; color: #003f88; font: inherit; font-size: 13px; line-height: 1.5; white-space: nowrap; cursor: pointer; text-decoration: none; }
.figure-dialog-actions button:hover, .figure-dialog-actions a:hover { background: #eaf3ff; }
.figure-dialog-actions .figure-close { width: 36px; padding: 0; font-size: 25px; line-height: 1; }
.figure-dialog-viewport { min-height: 0; overflow: auto; padding: 20px; overscroll-behavior: contain; background: #eaf0f6; }
.figure-dialog-viewport img { display: block; width: 100%; max-width: 100%; height: auto; background: white; }
.figure-dialog-viewport.is-actual-size img { width: 3000px; max-width: none; }
@media (max-width: 640px) {
  .research-figure { padding-top: 18px; margin-top: 20px; }
  .figure-preview { padding: 5px; }
  .figure-enlarge { right: 7px; bottom: 7px; width: 28px; height: 28px; font-size: 19px; }
  figcaption { flex-wrap: wrap; gap: 5px; font-size: 12px; }
  .research-figure-dialog { width: 96vw; }
  .figure-dialog-toolbar { align-items: flex-start; padding: 12px; gap: 12px; }
  .figure-dialog-toolbar > div:first-child { display: block; }
  .figure-dialog-toolbar h2 { font-size: 18px; }
  .figure-dialog-toolbar > div:first-child > span { display: block; margin-top: 3px; font-size: 11px; }
  .figure-dialog-actions { gap: 6px; }
  .figure-dialog-actions button, .figure-dialog-actions a { padding: 6px 9px; font-size: 12px; }
  .figure-dialog-actions > a { display: none; }
  .figure-dialog-viewport { padding: 8px; }
}
</style>
