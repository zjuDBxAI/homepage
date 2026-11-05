<template>
  <section id="memorial" class="memorial-section" aria-labelledby="memorial-title">
    <div class="memorial-container">
      <div class="memorial-card">
        <div class="memorial-grid">
          <div class="memorial-copy">
            <div class="memorial-label">
              <span>{{ currentLang === "zh" ? "沉痛悼念" : "In Memoriam" }}</span>
            </div>

            <h4 id="memorial-title" class="memorial-title">
              {{
                currentLang === "zh"
                  ? "黄铭钧院士"
                  : "Professor Ooi Beng Chin"
              }}
              <span class="memorial-years">1961 - 2026</span>
            </h4>

            <p class="memorial-text">
              {{
                currentLang === "zh"
                  ? "我们深切缅怀黄铭钧院士。他是 Data X AI 数据库实验室的最初创始人，以卓越的学术远见和育人精神，为团队奠定了工作基础。他的贡献与精神将持续激励我们前行。"
                  : "We deeply remember Professor Ooi Beng Chin, the founding figure of the Data X AI Database Lab. His academic vision, dedication to mentorship, and lasting contributions laid the foundation for the team’s work and will continue to inspire us."
              }}
            </p>
          </div>

          <div class="memorial-portrait-wrap">
            <img
              class="memorial-portrait"
              :src="assetUrl('/assets/img/people/ooibc.webp')"
              alt="黄铭钧院士 / Professor Ooi Beng Chin"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useLanguage } from "../composables/useLanguage";
import { assetUrl } from "../utils/assetUrl.js";

export default {
  name: "MemorialSection",
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
.memorial-section {
  background: #f3f7fc;
  padding: 150px 0;
}

.memorial-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 60px;
}

.memorial-card {
  position: relative;
  overflow: hidden;
  padding: 56px 60px;
  border-radius: 8px;
  background: linear-gradient(145deg, #181818 0%, #303030 42%, #505050 100%);
  box-shadow: 0 8px 24px rgba(21, 34, 50, 0.18);
}

.memorial-card::after {
  content: "";
  position: absolute;
  top: -100px;
  right: -110px;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.16) 0%,
    rgba(255, 255, 255, 0.08) 42%,
    rgba(255, 255, 255, 0) 72%
  );
}

.memorial-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(230px, 0.52fr);
  align-items: start;
  gap: 40px;
}

.memorial-copy {
  max-width: 860px;
}

.memorial-label {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 18px;
  font-weight: 500;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.72);
  line-height: 22px;
  text-transform: uppercase;
}

.memorial-label::before {
  content: "";
  width: 34px;
  height: 1px;
  background: rgba(255, 255, 255, 0.35);
}

.memorial-title {
  margin: 0;
  max-width: 12em;
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 500;
  font-style: italic;
  font-size: 72px;
  color: #ffffff;
  line-height: 1.04;
}

.memorial-years {
  display: block;
  margin-top: 18px;
  margin-left: 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.56em;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
}

.memorial-text {
  max-width: 720px;
  margin: 28px 0 0;
  font-weight: 400;
  font-size: 21px;
  color: rgba(255, 255, 255, 0.84);
  line-height: 1.65;
}

.memorial-portrait-wrap {
  display: flex;
  justify-content: center;
  align-self: center;
}

.memorial-portrait {
  display: block;
  width: min(100%, 180px);
  aspect-ratio: 4 / 5;
  object-fit: cover;
  object-position: center top;
  border: 3px solid rgba(255, 255, 255, 0.18);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 18px 34px rgba(0, 0, 0, 0.24);
  filter: grayscale(100%);
}

@media (max-width: 1200px) {
  .memorial-grid {
    grid-template-columns: minmax(0, 1fr) 220px;
    gap: 44px;
  }

  .memorial-title {
    font-size: 60px;
  }
}

@media (max-width: 768px) {
  .memorial-section {
    padding: calc(70 / 750 * 100vw) 0;
  }

  .memorial-container {
    padding: 0 calc(60 / 750 * 100vw);
  }

  .memorial-card {
    padding: calc(34 / 750 * 100vw);
    border-radius: calc(18 / 750 * 100vw);
  }

  .memorial-card::after {
    top: calc(-100 / 750 * 100vw);
    right: calc(-110 / 750 * 100vw);
    width: calc(280 / 750 * 100vw);
    height: calc(280 / 750 * 100vw);
  }

  .memorial-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: calc(34 / 750 * 100vw);
  }

  .memorial-copy {
    max-width: 100%;
  }

  .memorial-label {
    gap: calc(10 / 750 * 100vw);
    margin-bottom: calc(18 / 750 * 100vw);
    font-size: calc(18 / 750 * 100vw);
    line-height: calc(25 / 750 * 100vw);
  }

  .memorial-label::before {
    width: calc(34 / 750 * 100vw);
  }

  .memorial-title {
    max-width: none;
    font-size: calc(50 / 750 * 100vw);
    line-height: 1.08;
  }

  .memorial-years {
    margin-top: calc(12 / 750 * 100vw);
  }

  .memorial-text {
    margin-top: calc(26 / 750 * 100vw);
    font-size: calc(24 / 750 * 100vw);
    line-height: 1.65;
  }

  .memorial-portrait-wrap {
    width: 100%;
    justify-content: flex-start;
  }

  .memorial-portrait {
    width: min(100%, 190px);
    border-width: calc(3 / 750 * 100vw);
    border-radius: calc(22 / 750 * 100vw);
    box-shadow: 0 calc(12 / 750 * 100vw) calc(34 / 750 * 100vw)
      rgba(0, 0, 0, 0.24);
  }
}
</style>
