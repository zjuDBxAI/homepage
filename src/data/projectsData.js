import { assetUrl } from "../utils/assetUrl.js";

// 医疗健康项目
export const healthcareProjects = [
  {
    name: "HeartcareGPT",
    year: "2025 - ",
    image:
      assetUrl("/assets/img/projects/heartcaregpt.png"),
    link: "https://github.com/DCDmllm/Heartcare-Suite",
    descriptionZh:
      "HeartcareGPT是一个统一的医疗多模态大模型，能够完成原始信号与图像两种格式心电输入的理解与建模。HeartcareGPT使用专为这些格式设计的双通道编码器与投影器，并采用LoRA技术，实现了信号、图像与文本的跨模态语义对齐。该模型在特定领域的Heartcare-400K数据集上进行训练，在症状诊断、报告生成、信号预测等各类医学任务上具备优秀的表现。",
    descriptionEn:
      "HeartcareGPT is a unified multimodal medical large model capable of understanding and modeling electrocardiogram (ECG) inputs in both raw signal and image formats. HeartcareGPT employs dual-channel encoders and projectors specifically designed for these modalities, and leverages LoRA techniques to achieve cross-modal semantic alignment among signals, images, and text. The model is trained on the domain-specific Heartcare-400K dataset and demonstrates strong performance across a wide range of medical tasks, including symptom diagnosis, report generation, and signal prediction.",
  },
  {
    name: "EyecareGPT",
    year: "2025 - ",
    image:
      assetUrl("/assets/img/projects/eyeexpert.jpg"),
    link: "https://github.com/DCDmllm/EyecareGPT",
    descriptionZh:
      "EyeExpertGPT 是一个先进的视觉语言模型，专为智能眼科诊断量身定制。它凭借高质量的数据集 (Eyecare-100K)、全面的评估基准 (Eyecare-Bench) 以及针对细粒度病变识别优化的专用模型架构，解决了该领域的关键挑战。EyeExpertGPT 为眼科视觉理解树立了全新标准。",
    descriptionEn:
      "EyeExpertGPT is an advanced vision-language model tailored for intelligent ophthalmic diagnosis. It addresses key challenges in the field with a high-quality dataset (Eyecare-100K), a comprehensive evaluation benchmark (Eyecare-Bench), and a specialized model architecture optimized for fine-grained lesion identification. EyeExpertGPT sets a new standard in ophthalmology-focused visual understanding.",
  },
  {
    name: "HealthGPT",
    year: "2024 - ",
    image:
      assetUrl("/assets/img/projects/healthgpt.jpg"),
    link: "https://github.com/DCDmllm/HealthGPT",
    descriptionZh:
      "HealthGPT 是一个大型视觉语言模型，旨在实现全面的医学图像理解和报告生成。HealthGPT 基于统一的自回归框架，采用新颖的异构低秩自适应 (H-LoRA) 技术整合视觉和文本知识。该模型在特定领域的 VL-Health 数据集上进行训练，在广泛的医学理解和生成任务中展现出卓越的性能。",
    descriptionEn:
      "HealthGPT is a large vision-language model designed for comprehensive medical image understanding and report generation. Built on a unified autoregressive framework, HealthGPT integrates visual and textual knowledge using a novel heterogeneous low-rank adaptation (H-LoRA) technique. Trained on the domain-specific VL-Health dataset, it demonstrates strong performance across a wide range of medical comprehension and generation tasks.",
  },
  {
    name: "Cohort Study",
    year: "2016 - ",
    image:
      assetUrl("/assets/img/projects/cohort.png"),
    link: "https://www.comp.nus.edu.sg/~dbsystem/cohort/",
    descriptionZh:
      "队列研究（Cohort）是一种典型的面板研究方法，用于调查具有共同特征的个体群体，在因果关系分析中具有强大的识别关键因素的能力。我们正在开展一系列基于人工智能与数据库技术的队列研究，旨在高效、有效地发现多样化的队列群体，分析可解释的队列模式，并将重要的队列研究结果应用于时间序列数据的分析中。队列研究可广泛应用于医疗健康、欺诈检测、金融分析等多个领域。更多基于人工智能的队列研究工作也将陆续推出。",
    descriptionEn:
      "Cohort is a typical panel study to investigate individuals who share a common characteristic and is powerful in identifying the key factors when analyzing the causal relationship. We are conducting a series of AI- and Database-driven cohort study to efficiently and effectively discover diverse cohorts, analyze interpretable cohort patterns, and leverage significant cohort results for time series data. Cohort study can assist in diverse applications, including healthcare, fraud detection, finance analysis, etc. More AI-related works for cohort study are in coming.",
  },
];

// AI系统项目
export const aiSystemProjects = [
  {
    name: "HAKES",
    year: "2024 - ",
    image:
      assetUrl("/assets/img/projects/hakes.png"),
    link: "https://www.comp.nus.edu.sg/~dbsystem/hakes/",
    descriptionZh:
      "HAKES 是一个可扩展、模块化的向量数据库，专为语义搜索优化，由三层组成：嵌入生成、向量检索和数据存储。它在资源利用与可扩展性方面表现优异，在并发负载下的性能比现有系统高出 10 倍，且几乎能实现 100% 的准确率。其模块化设计支持灵活定制，同时通过加密机制保障数据管理的安全性。",
    descriptionEn:
      "HAKES is a scalable, modular vector database optimized for semantic search, comprising three layers - embedding generation, vector search, and data storage. It enhances resource use and scalability, outperforming existing systems by 10 times under concurrent workloads with nearly 100% accuracy. Its modular design allows customization, while encryption ensures secure data management.",
  },
  {
    name: "SINGA",
    year: "2014 - ",
    image:
      assetUrl("/assets/img/projects/singa.jpg"),
    link: "https://singa.apache.org/",
    descriptionZh:
      "一个分布式深度学习平台（间接由ASTAR、MOE和NRF CRP资助）。Apache SINGA 是一个 Apache 顶级项目，开源的深度学习和机器学习模型分布式训练平台，设计理念基于四个原则：易用性、可扩展性、可扩展性和弹性。Apache SINGA v2.0.0 版本具有 AutoML 特性，并提供一个医疗健康模型库，其中包含已用于医疗健康研究的深度学习模型，并支持将其他模型移植到 SINGA 上。SINGA-lite、SINGA-easy 和 SINGA-db 是即将发布的版本。",
    descriptionEn:
      "A distributed Deep Learning platform (indirectly funded by ASTAR, MOE and NRF CRP grants). Apache SINGA is an Apache Top Level Project, open source distributed training platform for deep learning amd machine learning models, and has been designed based on four principles, namely, usability, scalability, extensibility and elasticity. Apache SINGA v2.0.0 has AutoML features, and a Healthcare model zoo which contains deep learning models that have been used for healthcare research, and facility for porting other models onto SINGA. SINGA-lite, SINGA-easy and SINGA-db are upcoming releases.",
  },

];

