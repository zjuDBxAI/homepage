<template>
  <div class="perioperative-research">
    <div class="phase-path" :aria-label="t('围术期研究任务', 'Perioperative research tasks')">
      <div class="phase-grid">
        <article v-for="(phase, index) in phases" :key="phase.id" class="phase-card" :data-flow-node="phase.id">
          <span class="phase-number" aria-hidden="true">0{{ index + 1 }}</span>
          <ResearchIllustration :name="phase.icon" class="phase-art" />
          <h3 :aria-label="phase.fullTitle">{{ phase.title }}</h3>
          <ul><li v-for="task in phase.tasks" :key="task">{{ task }}</li></ul>
        </article>
        <FlowConnections :edges="phaseEdges" :revision="currentLang" />
      </div>
      <div class="continuity-strip">
        <strong>{{ t('跨阶段协同', 'Across stages') }}</strong>
        <ol><li v-for="(step, index) in continuity" :key="index"><span class="continuity-number" aria-hidden="true">0{{ index + 1 }}</span>{{ step }}</li></ol>
      </div>
    </div>

    <div class="research-focus">
      <h3>{{ t('核心研究问题', 'Research questions') }}</h3>
      <div class="focus-grid">
        <div v-for="focus in focuses" :key="focus.title" class="focus-item"><h4>{{ focus.title }}</h4><p>{{ focus.description }}</p></div>
      </div>
    </div>

    <article class="featured-work" aria-labelledby="anestrace-title">
      <span class="work-label">{{ t('代表工作', 'Featured research') }}</span>
      <div class="work-header">
        <div class="work-copy">
          <div class="work-heading"><h3 id="anestrace-title">AnesTRACE</h3><span class="work-date">arXiv · 2026</span></div>
          <p class="work-subtitle">{{ t('从多模态感知到多步麻醉决策', 'From multimodal perception to multi-step anesthesia decisions') }}</p>
          <p>{{ t('面向术中麻醉的分层任务与临床对齐评测', 'A task hierarchy and clinician-aligned evaluation for intraoperative anesthesia') }}</p>
        </div>
        <nav class="work-links" :aria-label="t('AnesTRACE 资源', 'AnesTRACE resources')">
          <a href="https://arxiv.org/abs/2609.32740" target="_blank" rel="noopener noreferrer">{{ t('论文', 'Paper') }} <span aria-hidden="true">↗</span></a>
          <a href="https://zjudbxai.github.io/AnesTRACE/" target="_blank" rel="noopener noreferrer">{{ t('项目主页', 'Project') }} <span aria-hidden="true">↗</span></a>
          <a href="https://github.com/zjuDBxAI/AnesTRACE" target="_blank" rel="noopener noreferrer">{{ t('代码', 'Code') }} <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
      <ResearchFigure src="/assets/img/research/anestrace-overview-preview.png" :alt="t('AnesTRACE 完整框架：三层 AnesTRACE-Bench 任务、AnesTRACE-Eval 临床对齐评测与数据构建流程', 'Complete AnesTRACE framework: the three-level AnesTRACE-Bench task hierarchy, clinician-aligned AnesTRACE-Eval and the data construction pipeline')" />
    </article>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useLanguage } from '../../composables/useLanguage';
import ResearchIllustration from './ResearchIllustration.vue';
import FlowConnections from './FlowConnections.vue';
import ResearchFigure from './ResearchFigure.vue';

const { currentLang } = useLanguage();
const t = (zh, en) => currentLang.value === 'zh' ? zh : en;
const phaseEdges = [
  { id: 'pre-intra', from: 'preoperative', to: 'intraoperative', direction: 'auto' },
  { id: 'intra-post', from: 'intraoperative', to: 'postoperative', direction: 'auto' },
];
const phases = computed(() => [
  { id: 'preoperative', icon: 'clipboard', title: t('术前评估', 'Preoperative'), fullTitle: t('术前评估', 'Preoperative assessment'), tasks: [t('病史与检查信息整合', 'History & findings'), t('围术期风险评估', 'Risk assessment'), t('个体化管理规划', 'Management planning')] },
  { id: 'intraoperative', icon: 'monitor', title: t('术中管理', 'Intraoperative'), fullTitle: t('术中管理', 'Intraoperative management'), tasks: [t('多模态监测与状态识别', 'Multimodal monitoring'), t('动态决策与处置建议', 'Adaptive decisions'), t('响应反馈与方案更新', 'Response reassessment')] },
  { id: 'postoperative', icon: 'recovery', title: t('术后管理', 'Postoperative'), fullTitle: t('术后管理', 'Postoperative care'), tasks: [t('恢复状态与风险追踪', 'Recovery tracking'), t('术后管理与随访支持', 'Care & follow-up'), t('跨阶段信息交接', 'Clinical handover')] },
]);
const continuity = computed(() => [t('患者状态记忆', 'State memory'), t('证据更新', 'Evidence updates'), t('决策衔接', 'Decision continuity'), t('反馈评估', 'Feedback review')]);
const focuses = computed(() => [
  { title: t('多模态证据理解', 'Multimodal evidence'), description: t('整合病历、影像与生理信号', 'Integrating records, images and physiological signals') },
  { title: t('跨阶段记忆与推理', 'Memory and reasoning'), description: t('关联患者状态、历史决策与反馈', 'Connecting patient states, prior decisions and feedback') },
  { title: t('连续决策与评测', 'Decisions and evaluation'), description: t('关注安全性、时序一致性与响应效率', 'Studying safety, temporal consistency and efficiency') },
]);
</script>

<style scoped>
.perioperative-research { color: #27364a; }
.phase-path { padding: 26px; border: 1px solid #d4e3f4; border-radius: 12px; background: linear-gradient(135deg, #f7fbff, #eff6ff); }
.phase-grid { position: relative; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 38px; }
.phase-card { position: relative; z-index: 1; display: grid; grid-template-rows: 120px 44px 168px; row-gap: 14px; justify-items: center; min-width: 0; padding: 22px 18px; border: 1px solid #cbdff5; border-radius: 10px; background: #fff; box-shadow: 0 5px 16px #164b8504; }
.phase-number { position: absolute; top: 14px; left: 16px; color: #7899bc; font-size: 12px; letter-spacing: .08em; }
.phase-art { align-self: center; width: 160px; max-width: 100%; height: 120px; }
.phase-card h3 { display: flex; align-items: center; justify-content: center; align-self: center; width: 100%; max-width: 228px; height: 40px; margin: 0; padding: 0 10px; border-radius: 22px; background: #00458f; color: #fff; font-size: 19px; line-height: 1.4; font-weight: 600; text-align: center; white-space: nowrap; }
.phase-card ul { display: grid; grid-template-rows: repeat(3, 50px); gap: 9px; width: 100%; margin: 0; padding: 0; list-style: none; }
.phase-card li { display: flex; align-items: center; justify-content: center; min-width: 0; padding: 5px 8px; border-radius: 6px; background: #eff5fc; color: #344d68; font-size: 14px; line-height: 20px; text-align: center; }
.continuity-strip { display: grid; grid-template-columns: auto 1fr; align-items: center; gap: 22px; padding: 15px 20px; margin-top: 24px; border: 1px solid #d4e2f2; border-radius: 7px; background: #ffffffd9; }
.continuity-strip strong { padding-right: 22px; border-right: 1px solid #d2e0f0; color: #003f88; font-size: 14px; font-weight: 600; line-height: 24px; white-space: nowrap; }
.continuity-strip ol { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; margin: 0; padding: 0; list-style: none; }
.continuity-strip li { position: relative; color: #405976; font-size: 13px; line-height: 24px; text-align: center; white-space: nowrap; }
.continuity-strip li:not(:last-child)::after { content: '→'; position: absolute; right: -14px; color: #3670ae; }
.continuity-number { display: none; }
.research-focus { margin: 28px 0 40px; }
.research-focus > h3 { margin: 0 0 15px; color: #61758d; font-size: 13px; line-height: 1.6; font-weight: 500; }
.focus-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 26px; }
.focus-item { padding-left: 18px; border-left: 2px solid #d8e6f5; }
.focus-item h4 { margin: 0 0 5px; color: #003f88; font-size: 17px; line-height: 1.5; font-weight: 600; }
.focus-item p { margin: 0; color: #617087; font-size: 14px; line-height: 1.75; }
.featured-work { position: relative; padding: 30px; border: 1px solid #d3e1f1; border-top: 3px solid #0b4e97; border-radius: 10px; background: #fcfdff; box-shadow: 0 6px 22px #003f8806; }
.work-label { position: absolute; top: -15px; left: 22px; padding: 4px 13px; border-radius: 5px; background: #003f88; color: #fff; font-size: 13px; line-height: 1.6; }
.work-header { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 25px; align-items: center; }
.work-heading { display: flex; flex-wrap: wrap; gap: 15px; align-items: center; margin-bottom: 6px; }
.work-heading h3 { margin: 0; color: #142a42; font-size: 30px; line-height: 1.4; font-weight: 650; letter-spacing: -.02em; }
.work-date { padding: 4px 10px; border-radius: 5px; background: #e8f2ff; color: #003f88; font-size: 12px; line-height: 1.6; }
.work-copy p { margin: 0; color: #61728a; font-size: 14px; line-height: 1.8; }
.work-copy .work-subtitle { margin-bottom: 5px; color: #334d69; font-size: 17px; line-height: 1.6; }
.work-links { display: flex; align-items: center; gap: 22px; padding: 14px 0 14px 26px; border-left: 1px solid #dce6f1; }
.work-links a { display: inline-flex; gap: 7px; align-items: center; color: #003f88; font-size: 14px; line-height: 1.6; font-weight: 500; white-space: nowrap; text-decoration: none; }
.work-links a:hover { text-decoration: underline; text-underline-offset: 4px; }
.work-links a:focus-visible { outline: 2px solid #1465b6; outline-offset: 5px; }
@media (max-width: 1000px) {
  .phase-path { padding: 20px; }
  .phase-grid { gap: 30px; }
  .phase-card { padding: 20px 12px; }
  .phase-card h3 { font-size: 17px; }
  .phase-card li { font-size: 13px; }
  .continuity-strip { grid-template-columns: 1fr; gap: 10px; padding: 12px 18px; }
  .continuity-strip strong { padding: 0; border: 0; text-align: center; }
  .work-header { grid-template-columns: minmax(0, 1fr); gap: 16px; }
  .work-links { border: 0; padding: 0; }
}
@media (max-width: 760px) {
  .phase-path { padding: 15px; }
  .phase-grid { grid-template-columns: minmax(0, 1fr); gap: 32px; }
  .phase-card { grid-template-rows: 112px 44px 168px; padding: 20px; row-gap: 12px; }
  .phase-art { width: 150px; height: 112px; }
  .phase-card h3 { font-size: 19px; }
  .phase-card li { font-size: 14px; }
  .continuity-strip { padding: 12px; margin-top: 20px; }
  .continuity-strip ol { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px 14px; }
  .continuity-strip li { display: flex; align-items: center; justify-content: center; gap: 6px; font-size: 12px; }
  .continuity-strip li:not(:last-child)::after { display: none; }
  .continuity-number { display: inline; color: #7190af; font-size: 10px; }
  .focus-grid { grid-template-columns: 1fr; gap: 18px; }
  .focus-item h4 { font-size: 16px; }
  .featured-work { padding: 27px 18px 20px; }
  .work-heading { gap: 12px; }
  .work-heading h3 { font-size: 28px; }
  .work-copy .work-subtitle { font-size: 16px; }
  .work-links { gap: 24px; }
}
</style>
