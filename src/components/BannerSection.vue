<template>
  <div class="sigma_banner banner-3 home-banner">
    <div class="sigma_banner-slider">
      <div
        class="light-bg sigma_banner-slider-inner bg-cover bg-center bg-norepeat dark-overlay"
        :style="{ backgroundImage: `url(${assetUrl('/assets/img/home-banner.png')})` }"
      >
        <div class="sigma_banner-text">
          <div class="container">
            <div class="row justify-content-center">
              <div
                class="text-center banner-text-content"
                :class="currentLang === 'zh' ? 'lang-zh' : 'lang-en'"
              >
                <template v-if="currentLang === 'zh'">
                  <h2 class="title text-white">浙江大学</h2>
                  <h2 class="title text-white data-lab-title">
                    Data X AI 数据库实验室
                  </h2>
                  <h5 class="text-white data-lab-description">
                    我们聚焦于人工智能与大数据的融合方向，致力于研发高性能、自学习、自优化的数据系统与人工智能基础设施，以支撑医疗健康、智能制造、科学研究等领域的应用
                  </h5>
                </template>
                <template v-else>
                  <h3 class="title text-white">ZJU Data System</h3>
                  <h3 class="title text-white data-lab-title">
                    Data X AI Research Group
                  </h3>
                  <h4 class="text-white data-lab-description">
                    We focus on the fusion of artificial intelligence and big data. We develop high-performance self-learning and self-optimizing data systems and artificial intelligence infrastructure to support healthcare, smart manufacturing, and scientific research applications.
                  </h4>
                </template>
                <div
                  class="section-button d-flex align-items-center justify-content-center"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useLanguage } from "../composables/useLanguage";
import { assetUrl } from "../utils/assetUrl.js";

export default {
  name: "BannerSection",
  setup() {
    const { currentLang } = useLanguage();

    return {
      assetUrl,
      currentLang,
    };
  },
};
</script>

<style scoped>
.banner-text-content {
  display: inline-block;
  width: 100%;
  max-width: 760px;
  padding: 0 48px;
}

.banner-text-content .title {
  font-weight: 600;
  font-size: 48px;
  line-height: 64px;
}

.data-lab-description {
  margin-top: 20px;
  font-weight: 300;
  font-size: 20px;
  color: #ffffff;
  line-height: 32px;
}

/* Banner贴顶显示 */
.home-banner {
  margin-top: 0 !important;
  padding-top: 0 !important;
}

/* Banner内容区域添加顶部padding以适应固定header */
.home-banner :deep(.sigma_banner-text) {
  padding-top: 64px;
}

.banner-3.sigma_banner :deep(.sigma_banner-slider-inner) {
  min-height: 580px;
  padding: 88px 0 112px !important;
}

/* 数据库实验室标题不换行 */
.data-lab-title {
  white-space: nowrap;
  width: max-content;
  text-align: center;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

/* 移动端响应式 */
@media (max-width: 768px) {
  .banner-3.sigma_banner :deep(.sigma_banner-slider-inner) {
    background-position: top 0 center;
  }
  .banner-text-content {
    max-width: calc(660 / 750 * 100vw);
    padding: 0 calc(48 / 750 * 100vw);
  }

  .banner-text-content .title {
    font-size: calc(40 / 750 * 100vw);
    line-height: calc(56 / 750 * 100vw);
  }

  .data-lab-description {
    font-size: calc(22 / 750 * 100vw);
    line-height: calc(34 / 750 * 100vw);
    margin-top: calc(18 / 750 * 100vw);
  }

  .home-banner :deep(.sigma_banner-text) {
    padding-top: calc(64 / 750 * 100vw);
  }

  .banner-3.sigma_banner :deep(.sigma_banner-slider-inner) {
    min-height: calc(500 / 750 * 100vw);
    padding: calc(88 / 750 * 100vw) 0 calc(96 / 750 * 100vw) !important;
  }
}

@media (max-width: 480px) {
  .banner-text-content .title {
    font-size: calc(42 / 750 * 100vw);
    line-height: calc(58 / 750 * 100vw);
  }

  .data-lab-description {
    font-size: calc(22 / 750 * 100vw);
    line-height: calc(34 / 750 * 100vw);
    margin-top: calc(14 / 750 * 100vw);
  }
}
</style>
