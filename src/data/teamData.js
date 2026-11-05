import { assetUrl } from "../utils/assetUrl.js";

// Faculty 教师
export const facultyData = [
  {
    name: "张文桥",
    name_en: "Zhang Wenqiao",
    position: "软件学院 百人计划研究员",
    position_en:
      "100 Talent Platform Researcher, College of Software Technology",
    description:
      "浙江大学软件学院百人计划研究员，入选国家教育部海外引才计划、浙江大学启真优秀青年学者。主要研究方向包括多模态大模型、大模型优化与医疗人工智能等。近年来，在TPAMI，CVPR，ICCV，ACL，NeurIPS等CCF A类期刊与会议上发表论文共60余篇，在国际学术竞赛中获得多次冠军，主持/参与多项国家级、省部级课题。",
    description_en:
      "Research interest: multimodal large models, large model optimization, and medical artificial intelligence. In recent years, I have published more than 60 papers in top-tier CCF-A journals and conferences such as TPAMI, CVPR, ICCV, ACL, and NeurIPS, won multiple championships in international academic competitions, and have led or participated in several national and provincial-level research projects.",
    email: "wenqiaozhang@zju.edu.cn",
    website: "https://person.zju.edu.cn/wenqiao",
    image:
      assetUrl("/assets/img/people/zhangwenqiao.jpg"),
  },
  {
    name: "鲁鹏",
    name_en: "Lu Peng",
    position: "软件学院 百人计划研究员",
    position_en:
      "100 Talent Platform Researcher, College of Software Technology",
    description:
      "浙江大学软件学院百人计划研究员，高级工程师。研究方向为分布式系统、数据库、大规模异构系统软件架构等。近年来，在数据库领域顶级学术期刊TKDE和国际会议 ICDE、VLDB 等发表论文和报告多篇，授权发明专利10余项。先后参与和主持多项国家级和省部级科研课题多项，主持企业合作课题40余项。",
    description_en:
      "Research interest: distributed systems, databases, and large-scale heterogeneous system software architecture. In recent years, I have published several papers and reports in top-tier academic journals such as TKDE and international conferences such as ICDE and VLDB in the field of databases, and have been granted more than 10 invention patents.",
    email: "peng.lu@zju.edu.cn",
    website: "https://person.zju.edu.cn/lupeng",
    image:
      assetUrl("/assets/img/people/lupeng.jpg"),
  },
  {
    name: "谢钟乐",
    name_en: "Xie Zhongle",
    position: "软件学院 百人计划研究员",
    position_en:
      "100 Talent Platform Researcher, College of Software Technology",
    description:
      "浙江大学软件学院百人计划研究员，主要研究方向为智能缓存、AI4Sys、性能加速等。近年来，在数据库领域顶级学术期刊TKDE和国际会议SIGMOD/VLDB/ICML/MM/IJCAI/ICDE等发表论文近30篇，发明专利20余项。获SIGMOD Best System Award（最佳系统奖）、ICDE Best RunnerUp Paper（最佳论文亚军奖）、CCF科技成果奖-自然科学二等奖。",
    description_en:
      "Research interest: intelligent caching, AI4Sys, and AIxDB system acceleration. In recent years, I have published more than 20 papers in top-tier academic journals such as TKDE and international conferences such as SIGMOD, VLDB, ICML, MM, IJCAI, and ICDE in the field of databases, and have nearly 20 invention patents. I have received the SIGMOD Best System Award and the ICDE Best Runner-Up Paper Award.",
    email: "xiezl@zju.edu.cn",
    website: "https://xiezl.github.io/",
    image:
      assetUrl("/assets/img/people/xiezhongle.jpg"),
  }
];

// Assistant Staff 助理老师
export const assistantData = [
  {
    name: "唐燕君",
    name_en: "Tang Yanjun",
    position: "财务助理",
    position_en: "Finance Assistant",
    description:
      "协助预算编制、报销审核、决算等流程工作，确保科研经费合规高效使用。",
    description_en:
      "Assist in budget preparation, reimbursement review, final accounts, and other processes to ensure compliant and efficient use of research funds.",
    email: "",
    website: "",
    image:
      assetUrl("/assets/img/people/tangyanjun.jpg"),
  },
  {
    name: "应洪彬",
    name_en: "Ying Hongbin",
    position: "工程与基础设施",
    position_en: "Engineering & Infrastructure",
    description: "负责实验室工程项目的组织实施与交付管理，统筹实验室基础设施建设与管理。",
    description_en: "Responsible for the implementation and delivery of laboratory engineering projects, as well as the development and management of laboratory infrastructure.",
    email: "",
    website: "",
    image: assetUrl("/assets/img/people/yinghongbin.jpg")
  }
];

// Students 学生
export const studentsData = [
  {
    name: "舒锦松",
    name_en: "Shu Jinsong",
    position: "博士研究生",
    position_en: "Ph.D. Student",
    description:
      "研究方向包括多模态学习、多模态大模型推理加速。曾在华为实习，参与OceanStore存储系统故障检测与隔离需求的研发。获得过中国软件杯国家级一等奖。如果你对多模态大模型推理加速感兴趣，欢迎大家多多交流！",
    description_en:
      "My research interests include multimodal learning and inference acceleration for multimodal large models. I have interned at Huawei, contributing to the development of fault detection and isolation requirements for the OceanStore storage system. I have also received a national first-class award in the China Software Cup competition.",
    email: "",
    website: "https://github.com/gdace829",
    image:
      assetUrl("/assets/img/people/shuyisong.png"),
  },
  {
    name: "黄紫潍",
    name_en: "Huang Ziwei",
    position: "博士研究生",
    position_en: "Ph.D. Student",
    description:
      "浙江大学软件学院博士生，研究方向为医学多模态大模型的强化学习与深度推理。硕士期间，分别在AAAI和ACL会议发表论文。曾在阿里巴巴淘天集团实习，主要参与多模态大模型的幻觉检测和强化学习目标冲突优化项目，期间获AlHackathon3.0特等奖。欢迎大家与我交流最新科研进展，共同探索多模态技术的更多可能！",
    description_en:
      "I am a Ph.D. student at the School of Software Technology, Zhejiang University, focusing on reinforcement learning and deep reasoning for medical multimodal large models. During my master's studies, I published papers in AAAI and ACL conferences. I interned at Alibaba Taotian Group, where I worked on hallucination detection and reinforcement learning objective conflict optimization for multimodal large models.",
    email: "",
    website: "https://scholar.google.com/citations?user=thIPUrcAAAAJ&hl",
    image:
      assetUrl("/assets/img/people/huangziwei.jpg"),
  },
  {
    name: "陈蔚竹",
    name_en: "Chen Weizhu",
    position: "博士研究生",
    position_en: "Ph.D. Student",
    description: "本科毕业于华东师范大学数据科学与工程学院，浙江大学软件学院博士研究生在读。",
    description_en: "I completed my undergraduate studies at the School of Data Science and Engineering, East China Normal University, and I am currently a Ph.D. student at the School of Software Technology, Zhejiang University.",
    image: assetUrl("/assets/img/people/chenweizhu.jpg"),
  },
  {
    name: "李坤熹",
    name_en: "Li Kunxi",
    position: "博士研究生",
    position_en: "Ph.D. Student",
    description: "浙江大学计算机科学与技术学院2026级博士生，硕士就读于浙江大学软件学院。曾在阿里巴巴淘天集团实习，参与多模态大模型KV Cache优化策略研究，在AAAI、ACL等会议发表论文。目前主要研究方向为Agent与大模型高效训练/推理。",
    description_en: "I am a Ph.D. student who began doctoral studies in 2026 at the College of Computer Science and Technology, Zhejiang University, after completing my master’s studies at Zhejiang University’s School of Software Technology. I previously interned at Alibaba’s Taobao and Tmall Group, where I worked on KV cache optimization for multimodal large language models. I have published papers at conferences including AAAI and ACL. My current research focuses on AI agents and efficient training and inference for large language models.",
    website: "https://scholar.google.com/citations?user=ws7ZrM8AAAAJ&hl=zh-CN&authuser=1",
    image: assetUrl("/assets/img/people/likunxi.jpg"),
  },
  {
    name: "牛恩培",
    name_en: "Niu Enpei",
    position: "博士研究生",
    position_en: "Ph.D. Student",
    description: "本科毕业于南开大学软件学院软件工程专业，浙江大学软件学院博士在读。研究围绕大语言模型与数据管理的交叉领域展开。",
    description_en: "I completed my undergraduate studies at the School of Software Engineering, Nankai University, and I am currently a Ph.D. student at the School of Software Technology, Zhejiang University. My research focuses on the intersection of large language models and data management.",
    email: "",
    website: "",
    image: assetUrl("/assets/img/people/niuenpei.jpeg"),
  },
  {
    name: "刘可涵",
    name_en: "Liu Kehan",
    position: "硕士研究生",
    position_en: "Master Student",
    description:
      "本科毕业于中国石油大学（北京）计算机科学与技术专业，浙江大学软件学院硕士研究生在读。研究方向为云数据库的缓存机制与性能优化，关注在动态工作负载和数据访问模式变化下的高效缓存管理与调度。",
    description_en:
      "I am pursuing an M.Sc. in Software Engineering at Zhejiang University, with a B.Sc. in Computer Science and Technology from China University of Petroleum (Beijing). Research interests include cache mechanisms and performance optimization for cloud databases.",
    email: "",
    website: "",
    image:
      assetUrl("/assets/img/people/liukehan.jpg"),
  },
  {
    name: "吴晨阳",
    name_en: "Wu Chenyang",
    position: "硕士研究生",
    position_en: "Master Student",
    description:
      "本科毕业于西北农林科技大学，方向为AI4Sci，本科阶段热爱算法竞赛，参与ICPC等系列竞赛；个人对AI infra和计算机视觉方向感兴趣，目前从事多模态大模型及推理优化，计算机视觉和机器学习相关工作。在实验之外，我喜欢一人食探店，骑行以及城市漫游。",
    description_en:
      "I completed my undergraduate studies at Northwest A&F University, with a focus on AI4Sci. My research interests include Multimodal large models, Inference Optimization, Computer Vision, and Machine Learning.",
    email: "",
    website: "",
    image:
      assetUrl("/assets/img/people/wuchenyang.jpg"),
  },
  {
    name: "范振璇",
    name_en: "Fan Zhenxuan",
    position: "硕士研究生",
    position_en: "Master Student",
    description:
      "2025级硕士生，本科毕业于东北大学，研究方向为大模型的高效训练和推理，曾参与大模型量化、高效微调等工作，目前专注于大模型的高效推理，尤其是思维链的剪枝和压缩等方向。",
    description_en:
      "I am a master's student enrolled in 2025, graduated from Northeastern University. My research focuses on efficient training and inference of large models. I have previously worked on model quantization and efficient fine-tuning, and currently, I am concentrating on efficient inference techniques, particularly pruning and compression of reasoning chains.",
    email: "",
    website: "https://fanzhenxuan.github.io/",
    image:
      assetUrl("/assets/img/people/fanzhenxuan.jpg"),
  },
  {
    name: "严文杰",
    name_en: "Yan Wenjie",
    position: "硕士研究生",
    position_en: "Master Student",
    description:
      "本科毕业于东南大学吴健雄学院，浙江大学软件学院硕士研究生在读。本科期间参与华为中央研究院服务实验室项目交付领域智能体的课题研究及相关技术报告和专利的撰写。一篇NIPS二作。目前研究方向为医疗多模态大模型。",
    description_en:
      "I am pursuing an M.Sc. in Software Engineering at Zhejiang University, with a B.Sc. from Wu Jianxiong College of Southeast University. During my undergraduate studies, I participated in research on intelligent agents for project delivery in Huawei's Central Research Institute Service Laboratory, contributing to related technical reports and patents. I am currently focused on medical multimodal large models.",
    email: "",
    website: "",
    image:
      assetUrl("/assets/img/people/yanwenjie.jpg"),
  },
  {
    name: "林格西",
    name_en: "Lin Gexi",
    position: "硕士研究生",
    position_en: "Master Student",
    description:
      "本科毕业于浙江工业大学计算机科学与技术学院，浙江大学软件学院硕士研究生在读。研究方向为向量数据库的量化机制优化，关注在数据模态特性和工作负载变化的情况下提升向量数据库的整体性能。",
    description_en:
      "I completed my undergraduate studies at Zhejiang University of Technology, majoring in Computer Science and Technology. I am currently pursuing a master's degree at Zhejiang University School of Software. My research focuses on optimizing the quantization mechanisms of vector databases, aiming to improve overall performance under varying data modality characteristics and workload changes.",
    email: "",
    website: "",
    image:
      assetUrl("/assets/img/people/lingexi.jpg"),
  },
  {
    name: "范倬宁",
    name_en: "Fan Zhuoning",
    position: "硕士研究生",
    position_en: "Master Student",
    description: "本科毕业于南开大学数学与应用数学专业，主要学习方向为概率与统计。浙江大学软件学院硕士研究生在读。研究兴趣集中于智能体记忆、长程推理以及高效智能体系统。",
    description_en: "I received my B.S. in Mathematics and Applied Mathematics from Nankai University, where I studied probability and statistics. I am currently pursuing my M.S. at Zhejiang University. My research interests lie in agent memory, long-horizon reasoning, and efficient agent systems.",
    website: "https://github.com/zoeplus",
    image:
      assetUrl("/assets/img/people/fanzhuoning.jpg"),
  },
  {
    name: "刘汉铖",
    name_en: "Liu Hancheng",
    position: "硕士研究生",
    position_en: "Master Student",
    description: "本科毕业于北京航空航天大学软件学院，浙江大学计算机学院硕士研究生在读。研究兴趣主要集中于大语言模型的高效训练与推理优化，关注长上下文场景下大模型的计算与存储效率问题。",
    description_en: "I completed my undergraduate studies at the School of Software, Beihang University, and am currently pursuing a master's degree at the College of Computer Science and Technology, Zhejiang University. My research interests include efficient training and inference of large language models, with a focus on computational and memory efficiency in long-context scenarios.",
    image:
      assetUrl("/assets/img/people/liuhancheng.jpg"),
  },
  {
    name: "李嘉宁",
    name_en: "Li Jianing",
    position: "硕士研究生",
    position_en: "Master Student",
    description: "本科毕业于华南理工大学软件工程专业，浙江大学软件学院硕士在读，主攻医疗大模型与药物毒性推理中的多智能体系统研究，关注如何结合大语言模型与多智能体协作框架，提升药物安全评估的自动化与可解释性。",
    description_en: "I graduated from South China University of Technology with a bachelor's degree in Software Engineering, and I am currently a master's student in Artificial Intelligence at Zhejiang University. My research mainly focuses on medical large language models and multi-agent systems for drug toxicity reasoning. My current research interest centers on how to combine large language models with multi-agent collaboration frameworks to improve the automation and interpretability of drug safety assessment.",
    website: "https://github.com/jinyu2003",
    image:
      assetUrl("/assets/img/people/lijianing.jpg"),
  },
  {
    name: "邵鹏程",
    name_en: "Shao Pengcheng",
    position: "硕士研究生",
    position_en: "Master Student",
    description: "本科毕业于浙江工商大学计算机科学与技术专业，浙江大学软件学院硕士研究生在读。主要研究方向为大模型应用与智能体系统，关注大语言模型驱动的多智能体协作、任务规划与智能决策，探索大模型技术在智能制造、企业自动化等场景中的应用。",
    description_en: "I graduated from Zhejiang Gongshang University with a bachelor's degree in Computer Science and Technology and am currently pursuing a master's degree at Zhejiang University. My research interests focus on large language model applications and intelligent agent systems, especially multi-agent collaboration and intelligent decision-making in scenarios such as intelligent manufacturing and enterprise automation. ",
    image: assetUrl("/assets/img/people/shaopengcheng.png"),
  },
  {
    name: "叶诚豪",
    name_en: "Ye Chenghao",
    position: "硕士研究生",
    position_en: "Master Student",
    description: "本科毕业于北京科技大学计算机科学与技术专业，爱好户外运动.",
    description_en: "I completed my undergraduate studies at the University of Science and Technology Beijing, majoring in Computer Science and Technology. I enjoy outdoor activities.",
    image: assetUrl("/assets/img/people/yechenhao.jpg"),
  },
  {
    name: "刘格显",
    name_en: "Liu Gexian",
    position: "硕士研究生",
    position_en: "Master Student",
    description: "本科毕业于东北大学软件工程专业，浙江大学软件学院硕士研究生在读。曾在 PingCAP 实习，参与 TiDB 查询优化器的维护。目前关注数据库系统与人工智能的交叉研究，对 Agentic Database、Data Agent 等方向感兴趣。",
    description_en: "I received my B.E. in Software Engineering from Northeastern University and am currently a master’s student at the School of Software Technology, Zhejiang University. I previously interned at PingCAP, maintaining the TiDB query optimizer. My interests include database–AI integration, agentic databases, and data agents.",
    email: "",
    website: "https://github.com/ghoshh",
    image: assetUrl("/assets/img/people/liugexian.jpeg"),
  },
  {
    name: "郑俊洋",
    name_en: "Zheng Junyang",
    position: "硕士研究生",
    position_en: "Master Student",
    description: "本科毕业于河南工业大学数据科学与大数据专业，浙江大学软件学院硕士在读。目前研究兴趣为大模型推理加速。",
    description_en: "I received my B.E. in Data Science and Big Data from Henan University of Technology and am currently a master’s student at the School of Software Technology, Zhejiang University. My current research interests focus on accelerating large model inference.",
    email: "",
    website: "",
    image: assetUrl("/assets/img/people/zhengjunyang.png"),
  },
  {
    name: "罗子熠",
    name_en: "Luo Ziyi",
    position: "硕士研究生",
    position_en: "Master Student",
    description: "本科毕业于南京工业大学数学与应用数学专业，浙江大学软件学院硕士研究生在读。研究兴趣集中于数据库系统与人工智能系统，关注 Agent Infra、AI Infra 及分布式系统。",
    description_en: "I completed my undergraduate studies in Mathematics and Applied Mathematics at Nanjing University of Technology and am currently a master student at the School of Software Technology, Zhejiang University. My research interests focus on database systems and AI systems, with an emphasis on Agent Infra, AI Infra, and distributed systems.",
    email: "",
    website: "",
    image: assetUrl("/assets/img/people/luoziyi.jpeg"),
  },
  {
    name: "王鹏程",
    name_en: "Wang Pengcheng",
    position: "硕士研究生",
    position_en: "Master Student",
    description: "本科毕业于浙江大学计算机学院，浙江大学软件学院硕士研究生在读。目前研究兴趣为数据库智能体。",
    description_en: "I completed my undergraduate studies at the School of Computer Science, Zhejiang University, and am currently a master student at the School of Software Technology, Zhejiang University. My current research interests focus on database intelligent agents.",
    email: "",
    website: "",
    image: assetUrl("/assets/img/people/wangpengcheng.png"),
  },
  {
    name: "魏德第",
    name_en: "Wei Dedi",
    position: "硕士研究生",
    position_en: "Master Student",
    description: "本科毕业于中南财经政法大学信息安全专业，浙江大学软件学院硕士研究生在读，目前研究兴趣为大模型推理加速。",
    description_en: "I completed my undergraduate studies in Information Security at Zhongnan University of Economics and Law and am currently a master student at the School of Software Technology, Zhejiang University. My current research interests focus on accelerating large model inference.",
    email: "",
    website: "",
    image: assetUrl("/assets/img/people/weidedi.jpeg"),
  },
  {
    name: "喻俊",
    name_en: "Yu Jun",
    position: "硕士研究生",
    position_en: "Master Student",
    description: "本科毕业于北京理工大学软件工程专业，浙江大学软件学院硕士研究生在读。主要研究方向是多模态大模型推理加速，KV Cache优化策略研究。",
    description_en: "I graduated from Beijing Institute of Technology with a bachelor's degree in Software Engineering, and I am currently a master's student at the School of Software Technology, Zhejiang University. My main research interests include inference acceleration for multimodal large models and KV Cache optimization strategies.",
    email: "",
    website: "",
    image: assetUrl("/assets/img/people/yujun.jpeg"),
  },
  {
    name: "秦镇楠",
    name_en: "Qin Zhennan",
    position: "硕士研究生",
    position_en: "Master Student",
    description: "本科毕业于南京工业大学机械工程专业，浙江大学软件学院硕士研究生在读。主要研究方向是多智能体协作和虚拟社区。",
    description_en: "I graduated with a Bachelor's degree in Mechanical Engineering from Nanjing Tech University and am currently pursuing my Master's degree at the School of Software Technology, Zhejiang University. My primary research interests focus on multi-agent collaboration and virtual communities.",
    email: "",
    website: "",
    image: assetUrl("/assets/img/people/qinzhennan.jpeg"),
  },
  {
    name: "石雨承",
    name_en: "Shi Yucheng",
    position: "硕士研究生",
    position_en: "Master Student",
    description: "本科毕业于吉林大学人工智能学院，浙江大学软件学院硕士研究生在读，目前研究方向为大模型驱动的麻醉决策智能体研究。",
    description_en: "I graduated from the School of Artificial Intelligence at Jilin University and is currently pursuing a master’s degree at the School of Software Technology, Zhejiang University. The current research focus is large language model-driven intelligent agents for anesthesia decision-making.",
    email: "",
    website: "",
    image: assetUrl("/assets/img/people/shiyucheng.png"),
  },
  {
    name: "梁鸿宇",
    name_en: "Liang Hongyu",
    position: "硕士研究生",
    position_en: "Master Student",
    description: "本科毕业于江南大学物联网工程专业，浙江大学软件学院硕士研究生在读，当前研究方向为数据库领域的智能体评测。",
    description_en: "I graduated from Jiangnan University with a degree in Internet of Things Engineering and am currently pursuing a master's degree at the School of Software Technology, Zhejiang University. My current research focuses on the evaluation and benchmarking of intelligent agents for database systems.",
    email: "",
    website: "",
    image: assetUrl("/assets/img/people/lianghongyu.jpeg"),
  }
];

// Interns 实习生
export const internData = [
  {
    name: "王仁轩",
    name_en: "Wang Renxuan",
    position: "实习生",
    position_en: "Intern",
    description:
      "本科在读于西北工业大学计算机学院，本科阶段关注数据库以及系统内核，关注数据存储优化。在泡图书馆之外，有乒乓球，电影等爱好。",
    description_en:
      "I am an undergraduate student at Northwestern Polytechnical University, majoring in Computer Science. My research interests include databases and system kernels, with a focus on data storage optimization. Outside of the library, I enjoy playing table tennis and watching movies.",
    email: "",
    website: "",
    image:
      assetUrl("/assets/img/people/wangrenxuan.jpg"),
  },
  {
    name: "嵇哲",
    name_en: "Ji Zhe",
    position: "实习生",
    position_en: "Intern",
    description:
      "中南大学软件工程专业大三在读。曾参与AI医疗大模型研发，专注算法优化、模型调优与智能调度落地；目前研究方向为医疗多模态大模型与垂直领域智能体。",
    description_en:
      "I am a junior student majoring in Software Engineering at Central South University. I have participated in the development of AI medical large models, focusing on algorithm optimization, model tuning, and intelligent scheduling implementation. Currently, my research interests include medical multimodal large models and vertical domain intelligent agents.",
    email: "",
    website: "",
    image:
      assetUrl("/assets/img/people/jizhe.jpg"),
  },
  {
    name: "陈俊屹",
    name_en: "Chen Junyi",
    position: "实习生",
    position_en: "Intern",
    description:
      "本科在读于浙江大学数学与应用数学专业。目前主要关注跨模态与OOD查询场景下的高效向量检索问题。",
    description_en:
      "I am currently an undergraduate student majoring in Mathematics and Applied Mathematics at Zhejiang University. My current research focuses on efficient vector retrieval for cross-modal and Out-of-Distribution (OOD) queries.",
    email: "",
    website: "",
    image:
      assetUrl("/assets/img/people/chenjunyi.jpeg")
  }
];
