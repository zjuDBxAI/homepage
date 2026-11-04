<template>
  <main class="medical-agents" id="medical-agents-top">
    <section class="research-hero" aria-labelledby="research-title">
      <div class="research-container">
        <div class="hero-layout">
          <div class="hero-copy">
            <p class="research-eyebrow">AI AGENTS FOR MEDICINE &amp; PHARMACY</p>
            <h1 id="research-title">{{ t('医疗与药学智能体', 'AI Agents for Medicine & Pharmacy') }}</h1>
            <p class="hero-subtitle">{{ t('面向临床决策与药学研究的专业智能体', 'Specialized agents for clinical decisions and pharmaceutical research') }}</p>
            <p class="hero-description">{{ t('贯穿围术期全流程，连接药学多源信息与证据推理，探索临床决策支持、毒性预测与毒性溯因。', 'Connecting the perioperative care pathway with multimodal pharmaceutical information and evidence-based reasoning to study clinical decision support, toxicity prediction and toxicity attribution.') }}</p>
          </div>

          <div class="hero-map" role="img" :aria-label="t('临床与药学两条研究主线，连接多源信息与智能体推理', 'Two research directions connect clinical and pharmaceutical evidence with agent reasoning')">
            <div class="hero-branch">
              <span>{{ t('术前 · 术中 · 术后', 'Before · During · After surgery') }}</span>
              <div class="hero-source" data-flow-node="hero-clinical"><ResearchIllustration name="monitor" /></div>
            </div>
            <div class="hero-branch">
              <span>{{ t('表征 · 检索 · 预测与溯因', 'Represent · Retrieve · Reason') }}</span>
              <div class="hero-source hero-source-pharmacy" data-flow-node="hero-pharmacy"><ResearchIllustration name="molecule" /><ResearchIllustration name="evidence" /></div>
            </div>
            <div class="hero-agent"><div class="hero-agent-art" data-flow-node="hero-agent"><ResearchIllustration name="agent" /></div><span>{{ t('证据驱动的智能体', 'Evidence-grounded agents') }}</span></div>
            <FlowConnections :edges="heroEdges" :revision="currentLang" />
          </div>
        </div>
        <nav class="direction-links" :aria-label="t('本页研究方向', 'Research directions on this page')">
          <router-link :to="{ name: 'MedicalAgents', hash: '#perioperative' }" class="direction-link" :class="{ 'direction-link-primary': route.hash !== '#pharmacy' }" :aria-current="route.hash !== '#pharmacy' ? 'location' : undefined">{{ t('围术期智能体', 'Perioperative agents') }} <span aria-hidden="true">↓</span></router-link>
          <router-link :to="{ name: 'MedicalAgents', hash: '#pharmacy' }" class="direction-link" :class="{ 'direction-link-primary': route.hash === '#pharmacy' }" :aria-current="route.hash === '#pharmacy' ? 'location' : undefined">{{ t('药学智能体', 'Pharmacy agents') }} <span aria-hidden="true">↓</span></router-link>
        </nav>
      </div>
    </section>

    <section id="perioperative" class="research-section perioperative-section" aria-labelledby="perioperative-title">
      <div class="research-container">
        <header class="research-section-heading">
          <p class="research-eyebrow"><span>01</span> PERIOPERATIVE AGENTS</p>
          <h2 id="perioperative-title">{{ t('围术期智能体', 'Perioperative agents') }}</h2>
          <p class="section-lead">{{ t('面向术前、术中与术后全流程，研究跨阶段的信息整合与连续决策支持。', 'Studying information integration and continuous decision support across preoperative assessment, intraoperative management and postoperative care.') }}</p>
          <p class="section-description">{{ t('围绕患者状态变化，连接临床数据、医学知识与历史决策，探索从评估、管理到恢复随访的连续智能支持。', 'We connect clinical data, medical knowledge and prior decisions as patient states evolve, exploring continuity from assessment and management to recovery and follow-up.') }}</p>
        </header>
        <PerioperativeResearch />
      </div>
    </section>

    <section id="pharmacy" class="research-section pharmacy-section" aria-labelledby="pharmacy-title">
      <div class="research-container">
        <header class="research-section-heading">
          <p class="research-eyebrow"><span>02</span> PHARMACY AGENTS</p>
          <h2 id="pharmacy-title">{{ t('药学毒性预测与归因智能体', 'Agents for toxicity prediction and attribution') }}</h2>
          <p class="pharmacy-focus">{{ t('统一机制链表征，连接毒性预测与溯因', 'A shared mechanism-chain representation for prediction and attribution') }}</p>
          <p class="section-description">{{ t('研究分子结构、基因、蛋白与靶点的统一表征及机制链标准化，构建药学图结构并检索相关证据，支持新药毒性预测与已有药物毒性溯因。', 'We study unified representations of molecular structures, genes, proteins and targets within a standardized mechanism-chain schema. Graph construction and evidence retrieval support a shared reasoning framework for toxicity prediction in new drugs and attribution in existing drugs.') }}</p>
        </header>
        <PharmacyFramework />
      </div>
    </section>

    <section class="partners-section research-section" aria-labelledby="partners-title">
      <div class="research-container">
        <h2 id="partners-title">{{ t('合作研究', 'Research collaborations') }}</h2>
        <div class="research-partners">
          <article class="partner-item"><ResearchIcon name="monitor" /><div><h3>{{ t('围术期智能体', 'Perioperative agents') }}</h3><p>{{ t('浙江大学医学院附属第二医院麻醉科', 'Department of Anesthesiology, The Second Affiliated Hospital, Zhejiang University School of Medicine') }}</p></div></article>
          <article class="partner-item"><ResearchIcon name="target" /><div><h3>{{ t('药学智能体', 'Pharmacy agents') }}</h3><p>{{ t('浙江大学药学院', 'College of Pharmaceutical Sciences, Zhejiang University') }}</p></div></article>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
import { onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useLanguage } from '../composables/useLanguage';
import ResearchIcon from '../components/research/ResearchIcon.vue';
import ResearchIllustration from '../components/research/ResearchIllustration.vue';
import FlowConnections from '../components/research/FlowConnections.vue';
import PerioperativeResearch from '../components/research/PerioperativeResearch.vue';
import PharmacyFramework from '../components/research/PharmacyFramework.vue';

const { currentLang } = useLanguage();
const route = useRoute();
const t = (zh, en) => currentLang.value === 'zh' ? zh : en;
const previousTitle = document.title;
const heroEdges = [
  { id: 'hero-clinical-agent', from: 'hero-clinical', to: 'hero-agent', direction: 'down' },
  { id: 'hero-pharmacy-agent', from: 'hero-pharmacy', to: 'hero-agent', direction: 'down' },
];
watch(currentLang, () => {
  document.title = t('医疗与药学智能体 | 浙江大学 Data X AI', 'Medical & Pharmacy Agents | ZJU Data X AI');
}, { immediate: true });
onUnmounted(() => { document.title = previousTitle; });
</script>

<style scoped>
.medical-agents { --research-blue: #003f88; --research-ink: #172a40; --research-muted: #58687a; color: var(--research-ink); background: white; padding-top: 80px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif; font-size: 16px; line-height: 1.75; }
.medical-agents *, .medical-agents *::before, .medical-agents *::after { box-sizing: border-box; }
.medical-agents h1, .medical-agents h2, .medical-agents h3, .medical-agents h4 { font-family: inherit; letter-spacing: 0; }
.medical-agents a { text-decoration: none; }.medical-agents a:focus-visible { outline: 2px solid #0059b4; outline-offset: 6px; border-radius: 3px; }
.research-container { width: 100%; max-width: 1200px; padding-left: 40px; padding-right: 40px; margin: 0 auto; }
.research-breadcrumb { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; padding-top: 20px; padding-bottom: 20px; font-size: 13px; line-height: 1.6; color: #627184; }
.research-breadcrumb a { color: #56667a; }.research-breadcrumb a:hover { color: var(--research-blue); }.research-breadcrumb > span[aria-hidden] { color: #a6b2c0; }.research-breadcrumb [aria-current] { color: #263d57; }
.research-hero { background: linear-gradient(115deg, #f4f9ff 10%, #e9f3ff 100%); border-top: 1px solid #edf3fa; border-bottom: 1px solid #e3edf9; padding: 52px 0 32px; }
.hero-layout { display: grid; grid-template-columns: 1.15fr 1fr; gap: 48px; align-items: center; }
.research-eyebrow { margin: 0 0 16px; color: var(--research-blue); font-size: 13px; font-weight: 600; letter-spacing: .045em; line-height: 1.6; }.research-eyebrow > span { margin-right: 12px; font-variant-numeric: tabular-nums; }
.hero-copy h1 { color: #132c49; font-size: clamp(32px, 3.4vw, 46px); line-height: 1.3; font-weight: 650; margin: 0 0 18px; letter-spacing: -.025em; }
.hero-subtitle { margin: 0 0 22px; color: #263f5c; font-size: 21px; line-height: 1.6; font-weight: 500; }
.hero-description { max-width: 540px; margin: 0; color: #53667b; font-size: 16px; line-height: 1.95; }
.hero-map { position: relative; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); column-gap: 34px; row-gap: 58px; align-items: start; padding: 5px 0 0; min-height: 280px; }
.hero-branch { position: relative; z-index: 1; text-align: center; }.hero-branch > span { display: inline-block; padding: 5px 12px; margin-bottom: 10px; background: #00458f; border-radius: 20px; color: white; font-size: 12px; font-weight: 500; line-height: 1.6; }
.hero-source { min-height: 90px; display: flex; align-items: center; justify-content: center; gap: 10px; background: #fbfdff; border: 1px solid #93bce9; border-radius: 10px; padding: 8px; color: #0054ac; }
.hero-source > .research-icon { width: 60px; height: 60px; }.hero-source > .research-icon + .research-icon { width: 48px; height: 56px; color: #609cd9; }
.source-lines { width: 45px; display: grid; gap: 10px; }.source-lines i { height: 5px; border-radius: 4px; background: #b9d7f4; }.source-lines i:nth-child(2) { width: 75%; }.source-lines i:nth-child(3) { width: 90%; }
.hero-connections { position: absolute; inset: 0; width: 100%; height: 100%; fill: none; stroke: #6caae9; stroke-width: 2; }
.hero-agent { position: relative; z-index: 1; grid-column: 1/-1; justify-self: center; display: flex; flex-direction: column; align-items: center; color: #0054ac; margin-top: -8px; }
.hero-agent > .research-icon { width: 104px; height: 96px; padding: 8px; border-radius: 13px; background: #e6f1ff; }.hero-agent > span { margin-top: 4px; color: #56799f; font-size: 12px; }
.direction-links { display: flex; justify-content: center; gap: 24px; margin-top: 34px; }
.direction-link { display: inline-flex; align-items: center; justify-content: center; gap: 30px; min-width: 238px; padding: 12px 24px; border: 1px solid #003f88; border-radius: 7px; background: #ffffffb3; color: var(--research-blue); font-size: 16px; font-weight: 600; line-height: 1.6; transition: background .2s, box-shadow .2s; }
.direction-link-primary { color: white; background: var(--research-blue); }.direction-link-primary:hover { background: #002f66; color: white !important; box-shadow: 0 5px 14px #003f8818; }.direction-link:not(.direction-link-primary):hover { background: white; box-shadow: 0 5px 14px #003f8810; }.direction-link span { font-size: 20px; font-weight: 400; }
.research-section { padding: 64px 0 68px; scroll-margin-top: 100px; }.research-section-heading { margin-bottom: 30px; }
.research-section h2 { margin: 0 0 14px; font-size: 34px; font-weight: 650; color: #172a40; line-height: 1.4; }
.section-lead { margin: 0 0 8px; color: #31465e; font-size: 17px; line-height: 1.8; }.section-description { margin: 0; color: #58687a; font-size: 15px; line-height: 1.85; }
.pharmacy-section { background: #f1f7ff; border-top: 1px solid #e6eff9; border-bottom: 1px solid #e6eff9; }.pharmacy-focus { margin: 0 0 10px; font-size: 19px; line-height: 1.6; font-weight: 550; color: #00458f; }
.partners-section { padding-top: 44px; padding-bottom: 44px; }.partners-section h2 { font-size: 28px; margin-bottom: 28px; }
.research-partners { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }.partner-item { display: flex; gap: 22px; align-items: center; }.partner-item + .partner-item { border-left: 1px solid #dce5f0; padding-left: 40px; }
.partner-item > .research-icon { width: 64px; height: 64px; color: #0051a6; }.partner-item h3 { margin: 0 0 5px; color: #003f88; font-size: 17px; line-height: 1.5; font-weight: 600; }.partner-item p { margin: 0; color: #596b7f; font-size: 14px; line-height: 1.8; }
.research-contact { padding: 34px 0; background: #edf5ff; }.contact-layout { display: flex; justify-content: space-between; gap: 24px; align-items: center; }.research-contact h2 { margin: 0 0 6px; font-size: 23px; font-weight: 600; color: #1d344f; line-height: 1.5; }.research-contact p { margin: 0; color: #63758b; font-size: 14px; }
.research-email { display: inline-flex; align-items: center; gap: 12px; color: #003f88; font-size: 20px; font-weight: 500; }.research-email > .research-icon { width: 28px; height: 28px; }.research-email:hover { text-decoration: underline; text-underline-offset: 5px; }
.research-return { padding-top: 20px; padding-bottom: 20px; display: flex; justify-content: space-between; gap: 24px; font-size: 13px; }.research-return a { color: #576d86; }.research-return a:hover { color: #003f88; }
@media (max-width: 1000px) { .hero-layout { gap: 28px; }.hero-subtitle { font-size: 19px; }.hero-description { font-size: 15px; }.hero-map { column-gap: 18px; }.hero-branch > span { padding: 5px 9px; font-size: 10px; }.hero-source > .research-icon { width: 48px; height: 54px; }.hero-source > .research-icon + .research-icon { width: 38px; }.source-lines { width: 30px; }.research-partners { gap: 24px; }.partner-item { gap: 16px; }.partner-item + .partner-item { padding-left: 24px; }.partner-item > .research-icon { width: 52px; height: 52px; } }
@media (max-width: 760px) { .research-container { padding-left: 24px; padding-right: 24px; }.research-breadcrumb { padding-top: 16px; padding-bottom: 16px; gap: 9px; font-size: 12px; }.research-hero { padding: 36px 0 28px; }.hero-layout { grid-template-columns: 1fr; gap: 26px; }.hero-copy h1 { font-size: 34px; }.hero-description { max-width: 600px; }.hero-map { width: 100%; max-width: 430px; justify-self: center; padding-top: 0; min-height: 270px; column-gap: 32px; }.hero-branch > span { font-size: 12px; }.hero-source > .research-icon { width: 60px; height: 60px; }.hero-source > .research-icon + .research-icon { width: 48px; }.source-lines { width: 42px; }.direction-links { gap: 12px; margin-top: 28px; }.direction-link { min-width: 0; flex: 1; padding: 11px 14px; gap: 14px; font-size: 15px; }.research-section { padding: 44px 0 48px; }.research-section h2 { font-size: 28px; }.research-section-heading { margin-bottom: 24px; }.section-lead { font-size: 16px; }.section-description { font-size: 14px; }.research-eyebrow { font-size: 12px; margin-bottom: 12px; }.pharmacy-focus { font-size: 17px; }.research-partners { grid-template-columns: 1fr; gap: 24px; }.partner-item + .partner-item { border-left: 0; border-top: 1px solid #dce5f0; padding: 22px 0 0; }.partners-section { padding-top: 32px; padding-bottom: 32px; }.partners-section h2 { font-size: 26px; margin-bottom: 24px; }.contact-layout { align-items: flex-start; flex-direction: column; gap: 16px; }.research-contact h2 { font-size: 22px; }.research-email { font-size: 19px; }.research-return { font-size: 12px; gap: 12px; } }
@media (max-width: 380px) { .research-container { padding-left: 18px; padding-right: 18px; }.hero-copy h1 { font-size: 30px; }.hero-subtitle { font-size: 17px; }.hero-map { column-gap: 18px; }.hero-branch > span { font-size: 10px; }.direction-link { font-size: 14px; padding: 10px; gap: 8px; }.research-return { flex-wrap: wrap; } }
@media (prefers-reduced-motion: reduce) { .medical-agents *, .medical-agents *::before, .medical-agents *::after { transition: none !important; scroll-behavior: auto !important; } }
@media (max-width: 991px) { .medical-agents { padding-top: 104px; } }
.hero-map { row-gap: 34px; min-height: 300px; }
.hero-source { min-height: 116px; padding: 0; }
.hero-source > .research-illustration { width: 140px; max-width: 100%; height: 108px; }
.hero-source-pharmacy { gap: 0; }
.hero-source-pharmacy > .research-illustration { width: 50%; max-width: 105px; height: 88px; }
.hero-agent { margin-top: 0; }
.hero-agent-art { width: 146px; height: 108px; }
.hero-agent-art > .research-illustration { width: 100%; height: 100%; }
.direction-link { transition: background-color .2s ease, color .2s ease, box-shadow .2s ease, transform .15s ease; }
.direction-link:hover { transform: translateY(-2px); }
.direction-link:active { transform: translateY(1px); box-shadow: none; }
.direction-link > span { display: inline-block; transition: transform .2s ease; }
.direction-link:hover > span { transform: translateY(3px); }
@media (prefers-reduced-motion: reduce) {
  .direction-link, .direction-link > span { transition: none !important; transform: none !important; }
}
</style>
