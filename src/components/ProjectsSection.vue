<template>
  <!-- Healthcare Data Systems -->
  <div id="projects" class="section healthcare-section">
    <div class="project-container">
      <div class="text-center">
        <h4 class="module-title">
          {{
            currentLang === "zh"
              ? "数据驱动的医疗人工智能"
              : "Data-Driven AI for Healthcare"
          }}
        </h4>
      </div>
      <p class="project-description">
        {{
          currentLang === "zh"
            ? "本研究方向致力于构建面向真实医疗场景的智能体生态系统，探索人工智能智能体（AI Agents）在临床诊疗、生物医药研究及医疗决策中的创新应用。我们以医学大模型、多模态医疗数据和医学知识为基础，研发具备感知、推理、规划、工具调用、协同决策与持续学习能力的专业医疗智能体，实现复杂医疗任务的智能分析与辅助决策。围绕医疗智能体的核心能力，我们重点研究多智能体协作、知识驱动推理、强化学习优化与Agent Memory 记忆增强机制等关键技术，持续提升智能体在复杂医疗场景中的自主学习、动态决策与协同执行能力。通过真实世界临床验证，我们致力于打造可信、安全、可扩展的医疗智能体平台，为智慧医疗提供新一代人工智能基础设施，推动医疗 AI 从\"单一模型\"迈向\"智能体生态\"。"
            : "This research direction focuses on building an agent ecosystem for real-world healthcare scenarios, exploring innovative applications of AI Agents in clinical diagnosis, biomedical research, and medical decision-making. We develop professional healthcare agents with capabilities in perception, reasoning, planning, tool invocation, collaborative decision-making, and continual learning, based on medical large language models, multimodal healthcare data, and medical knowledge. Our research emphasizes multi-agent collaboration, knowledge-driven reasoning, reinforcement learning optimization, and Agent Memory enhancement mechanisms to continuously improve agents' autonomous learning, dynamic decision-making, and collaborative execution in complex healthcare scenarios. Through real-world clinical validation, we aim to create a trustworthy, secure, and scalable healthcare agent platform that serves as the next-generation AI infrastructure for smart healthcare, advancing AI in medicine from \"single models\" to an \"agent ecosystem.\""
        }}
      </p>
      <div class="research-direction-entry">
        <router-link
          to="/research/medical-agents"
          class="research-direction-link"
          :aria-label="
            currentLang === 'zh'
              ? '了解医疗与药学智能体研究方向'
              : 'Learn more about AI agents for medicine and pharmacy'
          "
        >
          <span>Learn More</span>
          <span aria-hidden="true">→</span>
        </router-link>
      </div>
      <div
        class="research-card-grid"
        :class="`card-count-${healthcareProjects.length}`"
      >
        <a
          v-for="item in healthcareProjects"
          :key="item.name"
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          class="research-card"
        >
          <div class="research-card-image-wrap">
            <img
              :src="item.icon"
              :alt="item.name"
              class="research-card-image"
            />
          </div>
          <h5 class="research-card-title">{{ item.name }}</h5>
        </a>
      </div>
    </div>
  </div>

  <!-- Core Data + AI Systems -->
  <div class="section core-section">
    <div class="project-container">
      <div class="text-center">
        <h4 class="module-title">
          {{
            currentLang === "zh"
              ? "高性能AI技术"
              : "High-Performance AI Technology"
          }}
        </h4>
      </div>
      <p class="project-description">
        {{
          currentLang === "zh"
            ? "该方向专注于提升大模型在长文本理解、语义表征和向量检索等场景中的推理效率。我们的目标是在尽量保持模型效果的前提下，通过状态压缩、动态计算和高效算子等技术，降低计算开销、显存占用与推理延迟。通过模型结构、推理流程与硬件执行的协同优化，构建面向长上下文和高并发任务的高效推理方法，为大模型的规模化部署与应用提供支撑。"
            : "This direction focuses on improving the inference efficiency of large language models in long-context understanding, semantic representation, and vector retrieval. Our goal is to reduce computational cost, memory usage, and latency while preserving model quality through techniques such as state compression, adaptive computation, and efficient operators. By jointly optimizing model architecture, inference workflows, and hardware execution, we develop efficient inference methods for long-context and high-throughput applications, supporting the scalable deployment of large language models."
        }}
      </p>
      <div
        class="research-card-grid"
        :class="`card-count-${coreDataProjects.length}`"
      >
        <a
          v-for="item in coreDataProjects"
          :key="item.name"
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          class="research-card"
        >
          <div class="research-card-image-wrap">
            <img
              :src="item.icon"
              :alt="item.name"
              class="research-card-image"
            />
          </div>
          <h5 class="research-card-title">{{ item.name }}</h5>
        </a>
      </div>
    </div>
  </div>

</template>

<script>
import { useLanguage } from "../composables/useLanguage";
import {
  healthcareProjects as healthcareProjectsData,
  aiSystemProjects,
} from "../data/projectsData";

export default {
  name: "ProjectsSection",
  setup() {
    const { currentLang } = useLanguage();

    const healthcareProjects = healthcareProjectsData.map((project) => ({
      ...project,
      url: project.link,
      icon: project.image,
    }));

    const coreProjectNames = ["NeurDB", "HAKES", "Structured Data", "SINGA"];
    const coreDataProjects = aiSystemProjects
      .filter((project) => coreProjectNames.includes(project.name))
      .map((project) => ({
        ...project,
        url: project.link,
        icon: project.image,
      }));

    return {
      currentLang,
      healthcareProjects,
      coreDataProjects,
    };
  },
};
</script>

<style scoped>
.project-container {
  width: 100%;
  max-width: 1580px;
  margin: 0 auto;
  padding: 0 60px;
}

/* 模块标题样式 */
.module-title {
  margin-bottom: 50px;
  font-weight: 500;
  font-size: 60px;
  color: #222222;
  line-height: 84px;
}

/* 医疗数据系统模块 - 白色背景 */
.healthcare-section {
  background-color: #f3f7fc;
  padding: 150px 0;
}

/* 核心数据系统模块 - 灰色背景 */
.core-section {
  background-color: #fff;
  padding: 150px 0;
}

/* 项目描述 */
.project-description {
  max-width: 100%;
  margin: 0 auto 70px;
  font-weight: 400;
  font-size: 22px;
  color: #8c8c8c;
  line-height: 50px;
  text-align: left;
}

.research-direction-entry {
  display: flex;
  justify-content: center;
  margin: -12px 0 42px;
}

.research-direction-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  min-height: 46px;
  padding: 10px 26px;
  border: 1px solid #003f88;
  border-radius: 8px;
  color: #003f88;
  background: #fff;
  font-size: 17px;
  line-height: 24px;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
}

.research-direction-link:hover {
  color: #fff !important;
  background: #003f88;
  text-decoration: none;
  transform: translateY(-2px);
  box-shadow: 0 5px 14px rgba(0, 63, 136, 0.12);
}

.research-direction-link > span:last-child { transition: transform 0.2s ease; }
.research-direction-link:hover > span:last-child { transform: translateX(4px); }
.research-direction-link:active { transform: translateY(1px); box-shadow: none; }

@media (prefers-reduced-motion: reduce) {
  .research-direction-link, .research-direction-link > span { transition: none; transform: none; }
}

.research-direction-link:focus-visible {
  outline: 3px solid #003f88;
  outline-offset: 4px;
}

.research-card-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 28px;
}

.research-card-grid.card-count-2,
.research-card-grid.card-count-3 {
  column-gap: 64px;
}

.research-card-grid.card-count-3 {
  column-gap: 48px;
}

.research-card {
  display: block;
  width: calc((100% - 84px) / 4);
  min-width: 0;
  color: inherit;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.research-card:hover {
  color: inherit;
  text-decoration: none;
  transform: translateY(-3px);
}

.research-card-image-wrap {
  width: 100%;
  aspect-ratio: 4 / 3;
  padding: 24px;
  background: #ffffff;
  border: 1px solid #e9edf2;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(21, 34, 50, 0.08);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
}

.research-card:hover .research-card-image-wrap {
  border-color: rgba(0, 63, 136, 0.45);
  box-shadow: 0 10px 24px rgba(21, 34, 50, 0.12);
}

.research-card-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.research-card:hover .research-card-image {
  transform: scale(1.04);
}

.research-card-title {
  margin: 16px 0 0;
  font-weight: 600;
  font-size: 18px;
  color: #222222;
  line-height: 26px;
  text-align: center;
}

/* 移动端响应式样式 */
@media (max-width: 768px) {
  .research-direction-entry {
    margin: 0 0 32px;
  }

  .project-container {
    padding: 0 calc(60 / 750 * 100vw);
  }

  /* 医疗数据系统模块 - 白色背景 */
  .healthcare-section {
    background-color: #f3f7fc;
    padding: calc(60 / 750 * 100vw) 0;
  }

  /* 核心数据系统模块 - 灰色背景 */
  .core-section {
    background-color: #fff;
    padding: calc(60 / 750 * 100vw) 0;
  }

  .module-title {
    font-size: calc(40 / 750 * 100vw);
    line-height: calc(56 / 750 * 100vw);
    margin-bottom: calc(30 / 750 * 100vw);
  }

  /* 项目描述 */
  .project-description {
    font-size: calc(26 / 750 * 100vw);
    line-height: calc(50 / 750 * 100vw);
    margin-bottom: calc(40 / 750 * 100vw);
  }

  .research-card-grid {
    gap: calc(34 / 750 * 100vw) calc(24 / 750 * 100vw);
  }

  .research-card-grid.card-count-2,
  .research-card-grid.card-count-3 {
    column-gap: calc(24 / 750 * 100vw);
  }

  .research-card {
    width: calc((100% - calc(24 / 750 * 100vw)) / 2);
  }

  .research-card:hover {
    transform: none;
  }

  .research-card-image-wrap {
    padding: calc(18 / 750 * 100vw);
    border-radius: calc(8 / 750 * 100vw);
    box-shadow: 0 calc(5 / 750 * 100vw) calc(16 / 750 * 100vw) 0
      rgba(21, 34, 50, 0.08);
  }

  .research-card-title {
    margin-top: calc(16 / 750 * 100vw);
    font-size: calc(24 / 750 * 100vw);
    line-height: calc(34 / 750 * 100vw);
  }
}
</style>
