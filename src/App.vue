<template>
  <div id="app">
    <!-- Header组件 -->
    <Header />

    <!-- 路由视图 -->
    <router-view v-slot="{ Component, route }">
      <component :is="Component" :key="route.path" class="route-page" />
    </router-view>

    <!-- Footer组件 -->
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
.route-page {
  animation: page-arrive 300ms cubic-bezier(0.22, 0.68, 0.25, 1) both;
}

@keyframes page-arrive {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: none; }
}

@media (prefers-reduced-motion: reduce) {
  .route-page { animation: none; }
}

/* 全局样式已通过外部CSS加载 */
:root {
  --zju-blue: #003f88;
  --zju-blue-dark: #002f66;
  --zju-blue-soft: rgba(0, 63, 136, 0.08);
  --zju-blue-border: rgba(0, 63, 136, 0.22);
  --zju-red: #b01f24;
}

/* 覆盖外部CSS的header默认样式 - 只针对首�?*/
[data-home-page] .sigma_header.style-5 {
  background-color: transparent;
  box-shadow: none;
}

[data-home-page] .sigma_header .sigma_header-bottom {
  background-color: transparent;
}

/* 为固定header添加的全局样式 */
body {
  padding-top: 0;
}

/* 非首页需要顶部padding以适应固定header */
.sigma_subheader {
  margin-top: 80px;
}

/* 首页不需要margin */
[data-home-page] ~ * .sigma_subheader,
[data-home-page] .sigma_subheader {
  margin-top: 0;
}

/* 全站节奏收紧：增加左右留白，降低内容尺度 */
:where(
    .header-container,
    .news-container,
    .project-container,
    .team-container,
    .memorial-container,
    .footer-divider,
    .footer-bottom
  ) {
  max-width: 1200px !important;
}

:where(.project-container, .team-container, .memorial-container) {
  padding-left: 40px !important;
  padding-right: 40px !important;
}

:where(
    .news-section,
    .healthcare-section,
    .core-section,
    .publications-section,
    .team-section,
    .memorial-section,
    .contact-section
  ) {
  padding-top: 96px !important;
  padding-bottom: 96px !important;
}

:where(.module-title) {
  font-size: 42px !important;
  line-height: 56px !important;
}

:where(.project-description, .project-detail-description) {
  font-size: 17px !important;
  line-height: 30px !important;
}

:where(.project-description) {
  margin-bottom: 42px !important;
}

:where(.research-card-title, .project-tag, .year-tag, .member-position) {
  font-size: 18px !important;
}

:where(.publication-title, .member-name, .project-year, .category-title) {
  font-size: 22px !important;
}

:where(.publication-authors, .member-description) {
  font-size: 16px !important;
  line-height: 28px !important;
}

:where(.publications-box) {
  max-width: 1200px !important;
  border-radius: 8px !important;
  padding: 32px 36px !important;
  box-shadow: 0 8px 24px rgba(21, 34, 50, 0.08) !important;
}

:where(.year-tags) {
  margin-top: 34px !important;
  margin-bottom: 30px !important;
}

:where(.year-tag, .project-tag) {
  height: 40px !important;
  line-height: 40px !important;
  border-radius: 8px !important;
}

:where(.project-tag) {
  min-width: 180px !important;
}

:where(.research-card-image-wrap) {
  padding: 16px !important;
  border-radius: 8px !important;
  box-shadow: 0 8px 24px rgba(21, 34, 50, 0.08) !important;
}

:where(.team-category) {
  margin-top: 48px !important;
}

:where(.member-avatar) {
  width: 96px !important;
  height: 96px !important;
}

:where(.memorial-card) {
  padding: 36px 40px !important;
}

:where(.memorial-title) {
  font-size: 44px !important;
}

:where(.memorial-text) {
  font-size: 17px !important;
  line-height: 28px !important;
}

:where(
    a:hover,
    .footer-link:hover,
    .member-icon:hover,
    .year-tag:hover,
    .year-tag.active
  ) {
  color: var(--zju-blue) !important;
}

:where(
    .sigma_btn-custom,
    .project-tag.active,
    .project-tag:hover
  ) {
  background-color: var(--zju-blue) !important;
}

:where(
    .year-tag:hover,
    .year-tag.active,
    .project-tag.active,
    .project-tag:hover,
    .research-card:hover .research-card-image-wrap
  ) {
  border-color: var(--zju-blue) !important;
}

:where(.year-tag:hover, .year-tag.active) {
  background-color: var(--zju-blue-soft) !important;
}

@media (max-width: 768px) {
  :where(
      .news-section,
      .healthcare-section,
      .core-section,
      .publications-section,
      .team-section,
      .memorial-section,
      .contact-section
    ) {
    padding-top: calc(60 / 750 * 100vw) !important;
    padding-bottom: calc(60 / 750 * 100vw) !important;
  }
}
</style>
