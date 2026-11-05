import { assetUrl } from "../utils/assetUrl.js";

// 新闻数据
export const newsData = [
    {
      id: "2026-08-04",
      image: assetUrl("/assets/img/news/2026-08-04-3.jpg"),
      title_zh: "实验室研究生荣获第二十五届CCF数据库暑期研修营一等奖",
      title_en: "Graduate Student of the Laboratory Wins First Prize in the 25th CCF Database Summer Camp",
      date_zh: "2026年8月4日",
      date_en: "August 04, 2026",
      source_link: "",
      zh_translation: "",
      en_translation: "ChatGPT 5.6",
      summary_zh: "实验室研究生参加第二十五届CCF数据库暑期研修营，围绕“大模型与数据库”开展学习实践，与多校学生组成团队完成数据库性能优化任务，荣获小组一等奖。",
      summary_en: "Graduate student of the laboratory participated in the 25th CCF Database Summer Camp, focusing on learning and practice around 'Large Models and Databases', and formed a team with students from multiple schools to complete database performance optimization tasks, winning the first prize in the group.",
      content_zh: `
        <p>中国数据库暑期研修营下属于中国计算机学会数据库专业委员会, 旨在为中国从事或有志于从事数据库理论与技术研究的教师、学者和研究生提供一个学习和交流的机会。每年不定期地邀请数据库及相关领域内国际知名的学者来中国讲学，以促进我国对国际数据库学科前沿全面及时了解，并在此前提下，立足应用研发具有特色的数据管理技术和系统。</p>
        <img src="${assetUrl("/assets/img/news/2026-08-04-1.jpg")}" alt="post" style="display: block; margin: 0 auto; max-width: 100%;">
        <p>第二十五届CCF数据库暑期研修营将于2026年7月12日-7月19日在中国桂林举办，由桂林电子科技大学承办，北京奥星贝斯科技有限公司（OceanBase）协办。本期CCF数据库暑期研修营由周傲英教授担任校长。研修营汇聚了来自学术界和产业界的10余位专家学者，围绕“大模型与数据库”这一前沿交叉领域，开展了多场高质量特邀报告与系统化专题授课。OceanBase CTO杨传辉、清华大学王健楠教授、新加坡南洋理工大学丛高教授、香港中文大学方一向教授等高校学者和行业专家，结合前沿研究成果与产业实践经验进行深入分享。</p>
        <img src="${assetUrl("/assets/img/news/2026-08-04-2.jpg")}" alt="post" style="display: block; margin: 0 auto; max-width: 100%;">
        <p>来自全国32所高校的102名同学共同参与并完成了AI数据库理论学习与技术实训。作为暑期研修营的参与者，实验室研究生有幸参与了精心策划的一系列前沿技术培训，培训以数据在系统中的流转路径为主线，自底向上串联起架构层、数据层、检索层、查询层、应用层五大模块，构建起一条层次清晰的完整应用链路。</p>
        <img src="${assetUrl("/assets/img/news/2026-08-04-3.jpg")}" alt="post" style="display: block; margin: 0 auto; max-width: 100%;">
        <p>本次实验室研究生刘可涵、陈蔚竹与华东师范大学、东北大学3名同学跨校组队，完成了课程与实训任务以及小组答辩，包括在Seekdb上实现从查询到存储层面的细粒度瓶颈分析与性能优化，最终荣获小组一等奖。在实践过程中，团队成员充分发挥各自在数据库系统、智能优化和工程实现等方面的优势，围绕查询执行、索引设计、数据组织与存储管理等关键环节展开讨论，并通过多轮实验验证优化方案的有效性。此次跨校合作不仅提升了成员分析和解决复杂数据库性能问题的能力，也进一步锻炼了团队协作、沟通表达与成果展示能力。未来，实验室成员将继续加强交流合作，积极探索人工智能与数据库系统深度融合的新技术，并将此次学习成果应用于后续科研与工程实践中。</p>
      `,
      content_en: `
        <p>The China Database Summer Camp, organized under the Database Professional Committee of the China Computer Federation (CCF), aims to provide a platform for teachers, researchers, and graduate students engaged in or interested in database theory and technology research to learn and exchange ideas. Each year, the camp invites internationally renowned scholars in the database and related fields to deliver lectures in China, helping participants gain timely and comprehensive insights into the latest developments in the international database community. Building on these insights, the camp promotes the research and development of innovative data management technologies and systems tailored to practical applications.</p>

        <img src="${assetUrl("/assets/img/news/2026-08-04-1.jpg")}" alt="post" style="display: block; margin: 0 auto; max-width: 100%;">

        <p>The 25th CCF Database Summer Camp was held from July 12 to July 19, 2026, in Guilin, China. The event was hosted by Guilin University of Electronic Technology and co-organized by Beijing OceanBase Technology Co., Ltd. (OceanBase). Professor Ao Ying Zhou served as the director of this year's camp. Bringing together more than 10 experts and scholars from academia and industry, the camp focused on the cutting-edge interdisciplinary topic of "Large Models and Databases" and featured a series of high-quality keynote talks and systematic technical lectures. Experts including OceanBase CTO Chuanhui Yang, Professor Jiannan Wang from Tsinghua University, Professor Gao Cong from Nanyang Technological University, and Professor Yixiang Fang from The Chinese University of Hong Kong shared their latest research achievements and industrial experiences.</p>
            
        <img src="${assetUrl("/assets/img/news/2026-08-04-2.jpg")}" alt="post" style="display: block; margin: 0 auto; max-width: 100%;">
            
        <p>A total of 102 students from 32 universities across China participated in the camp and completed theoretical courses and technical training on AI databases. As participants of the summer camp, graduate students from the laboratory took part in a carefully designed series of advanced technology courses. The training was organized around the lifecycle of data flow within database systems, connecting five key layers from the bottom up: architecture layer, data layer, retrieval layer, query layer, and application layer, thereby constructing a comprehensive and systematic technology pipeline.</p>
            
        <img src="${assetUrl("/assets/img/news/2026-08-04-3.jpg")}" alt="post" style="display: block; margin: 0 auto; max-width: 100%;">
            
        <p>During the camp, laboratory graduate students Liu Kehan and Chen Weizhu formed a cross-university team with three students from East China Normal University and Northeastern University. The team successfully completed course assignments, technical practices, and group presentations, including fine-grained bottleneck analysis and performance optimization of Seekdb from query processing to storage layers. They ultimately won First Prize in the team competition. Throughout the project, team members leveraged their respective strengths in database systems, intelligent optimization, and engineering implementation. They conducted in-depth discussions on key aspects such as query execution, index design, data organization, and storage management, and validated their optimization strategies through multiple rounds of experiments. This cross-university collaboration not only enhanced their ability to analyze and solve complex database performance problems but also strengthened their teamwork, communication, and presentation skills. In the future, laboratory members will continue to promote collaboration and actively explore emerging technologies at the intersection of artificial intelligence and database systems, applying the knowledge gained from this experience to future research and engineering practices.</p>
      `,
    },
    {
    id: "2026-04-025",
    image:
      assetUrl("/assets/img/news/2026-04-25.jpg"),
    title_zh: "讣告",    
    title_en: "In Memoriam Professor Ooi Beng Chin",
    date_zh: "2026年4月25日",
    date_en: "April 25, 2026",
    source_link: "",
    zh_translation: "",
    en_translation: "",
    summary_zh:
      "",
    summary_en:
      "",
    content_zh: `
      <img src="${assetUrl("/assets/img/news/2026-04-25.jpg")}" alt="post" style="display: block; margin: 10 auto; max-width: 50%;">
      <p>世界级计算机科学家，中国科学院外籍院士、新加坡科学院院士、新加坡工程院院士、欧洲科学院外籍院士，浙江大学求是讲席教授黄铭钧先生，于2026年4月25日凌晨在新加坡不幸辞世，享年65岁。</p>
      <p>黄铭钧，新加坡籍，1961年出生于马来西亚，1989年澳大利亚莫纳什大学博士毕业，曾任新加坡国立大学计算机学院院长。他于2023年11月当选为中国科学院外籍院士，2025年3月全职加盟浙江大学软件学院和宁波国际科创中心。黄院士是全球唯一一位同时获得ACM SIGMOD贡献奖、E. F. Codd创新奖和系统奖三大数据库领域最高荣誉的学者，还曾获得新加坡总统科学奖、IEEE CS Tsutomu Kanai奖、IEEE TCDE CSEE影响奖、中国计算机学会海外杰出贡献奖等。</p>
      <p>黄院士长期从事数据库性能优化、索引技术、内存数据管理、人工智能、云计算和并行分布式系统的研究与应用，并致力于ABC领域（AI，Big Data，Cloud Computing）的创新与产业化，对企业级平台开发和系统集成有数十年经验，涉及领域包括大数据分析与解决方案、智能制造、金融科技和人工智能服务等。完整解决了数据库系统全流程中的关键技术难题，突破了复杂数据查询的局限；为区块链数据管理的发展做出了奠基性贡献；提出了数据管理和人工智能协同设计思想，其主导研发的系统Apache SINGA列入全球十大通用机器学习框架。</p>
      <p>黄铭钧院士毕生热爱科学，矢志追求卓越。他始终潜心研究，坚持求是创新，开数据库领域之先河，树国际学术之典范。他奖掖后进，桃李满天下，为我国计算机领域培养了大批人才。作为外籍院士，他始终心系中国科技事业的发展，积极推动中外学术交流合作，为我国数据库领域的进步建言献策。黄铭钧院士的逝世是全球计算机领域的重大损失。我们沉痛悼念并深切缅怀黄铭钧院士！他的精神与风范长存！</p>
    `,
    content_en: `
      <img src="${assetUrl("/assets/img/news/2026-04-25.jpg")}" alt="post" style="display: block; margin: 10 auto; max-width: 50%;">
      <p>We are deeply saddened by the passing of Professor Ooi Beng Chin, a distinguished scholar, visionary leader, and beloved member of the NUS Computing community.</p>
      <p>Professor Ooi served NUS with extraordinary dedication for over three decades, joining the University in 1991 and later serving as Dean of the School of Computing from 2007 to 2013. He was the Lee Kong Chian Centennial Professor at NUS. Through his leadership, he helped shape the School’s growth, reputation, and international standing, and played a pivotal role in advancing computing research and education in Singapore.</p>
      <p>An internationally renowned computer scientist, Professor Ooi made foundational contributions to database systems, distributed systems, blockchain systems, machine learning systems, and large-scale data analytics. His work combined deep scientific insight with the design and deployment of practical, high-impact systems. He led the development of Apache SINGA, the first Apache Top-Level Project on distributed deep learning.</p>
      <p>Professor Ooi’s contributions were recognised with many of the highest honours in computing. He was a Fellow of ACM, IEEE, the Singapore National Academy of Science, the Singapore Academy of Engineering, and the China Computer Federation, as well as a Foreign Member of Academia Europaea and the Chinese Academy of Sciences. He received the ACM SIGMOD Contributions Award, the ACM SIGMOD Edgar F. Codd Innovations Award, the ACM SIGMOD Systems Award, the IEEE Computer Society Kanai Award, the IEEE TCDE CSEE Impact Award, and the China Computer Federation Overseas Outstanding Contributions Award. He was also a co-recipient of the Singapore President’s Science Award.</p>
      <p>Beyond his research achievements, Professor Ooi was a generous mentor, deeply respected colleague, and influential academic leader. He served the global research community in many capacities, including as President of the VLDB Endowment, Editor-in-Chief of IEEE Transactions on Knowledge and Data Engineering, founding Editor-in-Chief of ACM Transactions on Data Science, and in senior leadership roles for major conferences.</p>
      <p>He inspired generations of students, researchers, and faculty members in Singapore and around the world, and will be remembered for his wisdom, intellectual generosity, and unwavering commitment to excellence. His passing is a profound loss to NUS Computing, to Singapore, and to the international computer science community.</p>
      <p>Professor Ooi’s legacy lives on in the School he helped build, the research community he shaped, the systems and ideas he created, and the many lives he touched.</p>
      <p>We extend our deepest condolences to his family and loved ones during this time of profound loss.</p>
  `,
  },
  {
    id: "2026-04-01",
    image:
      assetUrl("/assets/img/news/2025-04-08.jpg"),
    title_zh: "APACHE SINGA 5.1.0 发布",
    title_en: "APACHE SINGA 5.1.0 released",
    date_zh: "2026年4月1日",
    date_en: "April 01, 2026",
    source_link: "",
    zh_translation: "",
    en_translation: "",
    summary_zh:
      "我们很高兴地宣布 Apache SINGA v5.1.0 正式发布！在本版本中，我们添加了LLMs的低秩适应（LORA）和参数高效微调（PEFT）的实现，更新了医疗模型库，并添加了更多医疗示例等。",
    summary_en:
      "We are happy to announce the release of Apache SINGA v5.1.0! In this version, we added the implementations for Low-Rank Adaptation of LLMs (LORA) and Parameter-Efficient Fine-Tuning (PEFT), update the healthcare model zoo, and add more healthcare examples, etc.",
    content_zh: `
      <p>我们很高兴地宣布 Apache SINGA v5.1.0 正式发布！</p>
      <p>在本版本中，我们添加了LLMs的低秩适应（LORA）和参数高效微调（PEFT）的实现，更新了医疗模型库，并添加了更多医疗示例等。</p>
      <p>我们于2014年启动了<a href="https://singa.apache.org/" target="_blank">Apache SINGA</a>，这是一个分布式深度学习平台；在2015年在Apache软件基金会（ASF）孵化，并于2015年10月发布了<a href="https://en.wikipedia.org/wiki/Apache_SINGA" target="_blank">第一个版本</a>。它于2019年10月毕业成为第一个ASF顶级项目（TOP），专注于分布式学习。</p>
      <img src="${assetUrl("/assets/img/news/2025-04-08.jpg")}" alt="post" style="display: block; margin: 0 auto; max-width: 100%;">
    `,
    content_en: `
      <p>We are happy to announce the release of Apache SINGA v5.1.0!</p>
      <p>In this version, we added the implementations for Low-Rank Adaptation of LLMs (LORA) and Parameter-Efficient Fine-Tuning (PEFT), update the healthcare model zoo, and add more healthcare examples, etc.</p>
      <p>We started <a href="https://singa.apache.org/" target="_blank">Apache SINGA</a>, a distributed deep learning platform, in 2014; incubated it at Apache Software Foundation (ASF) in 2015, and released its <a href="https://en.wikipedia.org/wiki/Apache_SINGA" target="_blank">first version</a> in October 2015. It graduated as the first ASF top-level-project (TOP) on distributed learning in Oct 2019.</p>
      <img src="${assetUrl("/assets/img/news/2025-04-08.jpg")}" alt="post" style="display: block; margin: 0 auto; max-width: 100%;">
    `,
  },
  {
    id: "2025-12-16",
    image:
      assetUrl("/assets/img/news/2025-12-16-1.png"),
    title_zh:
      "第二届CCF中国数据大会｜中国科学院外籍院士黄铭钧：数据价值如何才能真正释放？",
    title_en:
      "CCF China Data 2025 | Ooi Beng Chin, Foreign Academician of the Chinese Academy of Sciences: How Can the Value of Data Truly Be Unleashed?",
    date_zh: "2025年12月16日",
    date_en: "December 16, 2025",
    source_link:
      "https://dsj.guizhou.gov.cn/xwzx/snyw/202512/t20251216_89056046.html",
    zh_translation: "",
    en_translation: "ChatGPT 5.1",
    summary_zh:
      '12月13日，在第二届CCF中国数据大会开幕式现场，中国科学院外籍院士、浙江大学教授黄铭钧以"NeurDB数据库内分析：面向高效部署的模型选择、切片与定制化"为主题作主旨报告。',
    summary_en:
      'On December 13, at the opening ceremony of the Second CCF China Data Conference, Ooi Beng Chin, Foreign Academician of the Chinese Academy of Sciences and Professor at Zhejiang University, delivered a keynote speech titled "NeurDB In-Database Analytics: Model Selection, Slicing, and Customization for Efficient Deployment."',
    content_zh: `
      <p>"数据库是数字经济的关键基础设施，市场规模预计2028年将突破930亿元。"12月13日，在第二届CCF中国数据大会开幕式现场，中国科学院外籍院士、浙江大学教授黄铭钧以"NeurDB数据库内分析：面向高效部署的模型选择、切片与定制化"为主题作主旨报告。</p>
      <p>黄铭钧认为，各行业正推进智能化转型，智慧金融、智慧医疗等场景对数据智能化应用提出了更高要求。</p>
      <img src="${assetUrl("/assets/img/news/2025-12-16-1.png")}" alt="post" style="display: block; margin: 0 auto; max-width: 100%;">
      <p>然而，现有数据库系统尚未实现AI与数据库的深度融合，AI应用研发多采用跨数据库与AI两套独立系统的模式，既因数据频繁跨系统流动产生性能损耗，又存在数据暴露于外部模型的安全风险。</p>
      <p>黄铭钧院士梳理了数据驱动智能的演进脉络，从依赖人类编码知识的符号智能时代，到依托神经网络学习数据规律的统计学习时代，再到以大模型与数据生态为核心的中心化智能时代；数据库也历经关系型、NoSQL、NewSQL的迭代，到目前亟需突破"AI与数据库割裂"的技术瓶颈。</p>
      <p>"事实上，我们团队早在2016年便提出'AI与数据库能力互补'的愿景，从2014年跨模态检索研究起步，到2015年SINGA孵化器落地、2019年技术纳入Apache顶级项目，逐步搭建起AI与数据库融合的技术体系。"黄铭钧说。</p>
      <img src="${assetUrl("/assets/img/news/2025-12-16-2.png")}" alt="post" style="display: block; margin: 0 auto; max-width: 100%;">
      <p>黄铭钧院士详解了两大核心成果，一是以AI驱动的新型数据库系统NeurDB，能够打破数据库与AI系统的技术阻隔，实现一体化设计；二是数据库原生智能数据分析框架NeurIDA，其三大核心技术模块聚焦破解行业难题。</p>
      <p>"数据的价值，唯有通过高效管理与深度分析才能真正释放。"黄铭钧院士强调，NeurDB与NeurIDA实现了模型结构与查询意图、关系模式、任务语义的深度对齐，不仅降低了各行业应用AI技术的门槛，更代表着下一代数据库管理系统的发展。</p>
    `,
    content_en: `
      <p>"Databases are a critical infrastructure of the digital economy, and the market size is expected to exceed RMB 93 billion by 2028." On December 13, at the opening ceremony of the Second CCF China Data Conference, Huang Mingjun, Foreign Academician of the Chinese Academy of Sciences and Professor at Zhejiang University, delivered a keynote speech titled "NeurDB In-Database Analytics: Model Selection, Slicing, and Customization for Efficient Deployment."</p>
      <p>Prof. Ooi Beng Chin noted that industries across the board are advancing intelligent transformation, and scenarios such as smart finance and smart healthcare are placing higher demands on intelligent data applications.</p>
      <img src="${assetUrl("/assets/img/news/2025-12-16-1.png")}" alt="post" style="display: block; margin: 0 auto; max-width: 100%;">
      <p>However, existing database systems have yet to achieve deep integration between AI and databases. AI application development often adopts two separate systems—one for databases and another for AI—which not only incurs performance overhead due to frequent cross-system data movement, but also introduces security risks as data are exposed to external models.</p>
      <p>Prof. Ooi Beng Chin reviewed the evolution of data-driven intelligence—from the era of symbolic intelligence that relied on human-encoded knowledge, to the era of statistical learning powered by neural networks, and further to the current era of centralized intelligence centered on large models and data ecosystems. In parallel, databases have evolved from relational systems to NoSQL and NewSQL, and now urgently need to break through the technological bottleneck of the separation between AI and databases.</p>
      <p>"In fact, our team proposed the vision of 'complementary capabilities between AI and databases' as early as 2016," Prof. Ooi Beng Chin said. "Starting with cross-modal retrieval research in 2014, followed by the launch of the SINGA incubator in 2015 and the inclusion of related technologies into an Apache top-level project in 2019, we have gradually built a technical system that integrates AI and databases."</p>
      <img src="${assetUrl("/assets/img/news/2025-12-16-2.png")}" alt="post" style="display: block; margin: 0 auto; max-width: 100%;">
      <p>Prof. Ooi Beng Chin then elaborated on two core achievements. The first is NeurDB, a new AI-driven database system that breaks the technical barriers between databases and AI systems through an integrated, unified design. The second is NeurIDA, a database-native intelligent data analytics framework whose three core technical modules are designed to address key industry challenges.</p>
      <p>"The value of data can only be truly unleashed through efficient management and deep analysis," Huang emphasized. By deeply aligning model structures with query intent, relational schemas, and task semantics, NeurDB and NeurIDA not only lower the barrier to adopting AI technologies across industries, but also represent the future direction of next-generation database management systems.</p>
    `,
  },
  {
    id: "2025-11-09",
    image:
      assetUrl("/assets/img/news/2025-11-09.png"),
    title_zh: "世界互联网大会：黄铭钧谈数据与人工智能协同",
    title_en:
      "World Internet Conference: Ooi Beng Chin Talks about Data and AI Collaboration",
    date_zh: "2025年11月9日",
    date_en: "November 09, 2025",
    source_link: "",
    zh_translation: "",
    en_translation: "",
    summary_zh:
      "在2025年11月8日举行的世界互联网大会乌镇峰会人工智能技术创新与治理论坛上，黄铭钧院士围绕数据与人工智能协同发展进行分享。",
    summary_en:
      "At the Artificial Intelligence Technology Innovation and Governance Forum held during the 2025 World Internet Conference Wuzhen Summit on November 8, Academician Ooi Beng Chin shared insights on the collaborative development of data and AI.",
    content_zh: `
      <p>11月8日，2025年世界互联网大会乌镇峰会人工智能技术创新与治理论坛在浙江乌镇举行。论坛以"擘画人工智能新时代，共谋创新治理新篇章"为主题，围绕生成式人工智能、大模型等技术热点，探讨人工智能发展趋势与全球治理路径，推动技术创新与安全治理协同并进。</p>
      <p>来自中国及多个国家和地区的政府代表、院士专家、国际组织负责人和企业代表参加论坛。与会嘉宾认为，人工智能在赋能经济社会发展的同时，也对安全、伦理和治理提出了更高要求，需要在开放合作中凝聚国际共识。</p>
      <p>中国科学院外籍院士、新加坡工程院院士、浙江大学求是讲席教授黄铭钧结合实践指出，数据系统与人工智能具有显著协同效应，通过融合数据库技术、深度学习和大语言模型，可构建高效、可信的智能系统，为人工智能在重点行业的应用奠定基础。</p>
      <img src="${assetUrl("/assets/img/news/2025-11-09.png")}" alt="post" style="display: block; margin: 0 auto; max-width: 100%;">
    `,
    content_en: `
      <p>On November 8th, the 2025 World Internet Conference Wuzhen Summit Artificial Intelligence Technology Innovation and Governance Forum was held in Wuzhen, Zhejiang. The forum, themed "Drawing a New Era of Artificial Intelligence, Jointly Creating a New Chapter of Innovative Governance," focused on hot topics such as generative AI and large models, discussing AI development trends and global governance paths, promoting the coordinated advancement of technological innovation and security governance.</p>
      <p>Government representatives, academicians, experts, heads of international organizations, and enterprise representatives from China and multiple countries and regions attended the forum. Participants believed that while AI empowers economic and social development, it also raises higher requirements for security, ethics, and governance, necessitating the consolidation of international consensus through open cooperation.</p>
      <p>Academician of the Chinese Academy of Sciences, Academician of the Singapore Academy of Engineering, and Qiu Shi Chair Professor at Zhejiang University, Ooi Beng Chin, pointed out based on practice that data systems and AI have significant synergy. By integrating database technology, deep learning, and large language models, efficient and trustworthy intelligent systems can be built, laying the foundation for AI applications in key industries.</p>
      <img src="${assetUrl("/assets/img/news/2025-11-09.png")}" alt="post" style="display: block; margin: 0 auto; max-width: 100%;">
    `,
  },
  {
    id: "2025-11-04",
    image:
      assetUrl("/assets/img/news/2025-11-04.jpg"),
    title_zh: "NeurDB 0.5.0 发布",
    title_en:
      "NeurDB 0.5.0 released",
    date_zh: "2025年11月4日",
    date_en: "November 04, 2025",
    source_link: "",
    zh_translation: "",
    en_translation: "",
    summary_zh:
      "我们很高兴地发布 NeurDB v0.5.0，带来在AI驱动的数据分析和自主操作方面的重大增强。",
    summary_en:
      "We are pleased to release NeurDB v0.5.0, bringing substantial enhancements in AI-powered data analytics and autonomous operations.",
    content_zh: `
      <p>我们很高兴地发布 NeurDB <a href="https://github.com/neurdb/neurdb/releases/tag/v0.5.0/" target="_blank">v0.5.0</a>，带来在AI驱动的数据分析和自主操作方面的重大增强。</p>
      <img src="${assetUrl("/assets/img/news/2025-11-04.jpg")}" alt="post" style="display: block; margin: 0 auto; max-width: 100%;">
      <p>在本版本中，我们发布了以下关键功能：</p>
      <p><strong>数据库内模型管理</strong></p>
      <ul>
        <li>集成了数据库原生的深度学习模型存储（NeurStore），实现高效的模型持久化和检索。</li>
        <li>优化了模型加载和保存机制，降低存储开销并提升I/O性能。</li>
        <li>增强了元数据跟踪，支持多版本模型管理和依赖关系追踪。</li>
      </ul>
      <p><strong>并发控制增强</strong></p>
      <ul>
        <li>优化了NRAM（NeurDB访问方法），提升混合工作负载下的事务吞吐量。</li>
        <li>增强了学习型并发控制（NeurCC）的锁管理和状态抽象。</li>
        <li>添加了测试用例验证事务隔离性并检测潜在异常。</li>
      </ul>
      <p><strong>基于KV的存储引擎增强</strong></p>
      <ul>
        <li>集成了进程间通信（IPC）通道，降低上下文切换开销并提升延迟性能。</li>
        <li>添加了测试用例验证并发读写下的正确性。</li>
      </ul>
      <p><strong>自动数据准备管道</strong></p>
      <ul>
        <li>引入了面向AI分析查询的自动化数据准备和特征转换管道。</li>
        <li>支持训练就绪数据集的生成。</li>
      </ul>
    `,
    content_en: `
      <p>We are pleased to release NeurDB <a href="https://github.com/neurdb/neurdb/releases/tag/v0.5.0/" target="_blank">v0.5.0</a>, bringing substantial enhancements in AI-powered data analytics and autonomous operations.</p>
      <img src="${assetUrl("/assets/img/news/2025-11-04.jpg")}" alt="post" style="display: block; margin: 0 auto; max-width: 100%;">
      <p>In this version, we released the following key features:</p>
      <p><strong>In-Database Model Management</strong></p>
      <ul>
        <li>Integrated a database-native deep learning model store (NeurStore) for efficient model persistence and retrieval.</li>
        <li>Optimized model loading and saving mechanisms with reduced storage overhead and improved I/O performance.</li>
        <li>Enhanced metadata tracking to support multi-version model management and dependency tracing.</li>
      </ul>
      <p><strong>Concurrency Control Enhancement</strong></p>
      <ul>
        <li>Refined the NRAM (NeurDB Access Method) for improved transaction throughput under mixed workloads.</li>
        <li>Enhanced lock management and state abstraction for learned concurrency control (NeurCC).</li>
        <li>Added test cases to validate transaction isolation and detect potential anomalies.</li>
      </ul>
      <p><strong>KV-based Storage Engine Enhancement</strong></p>
      <ul>
        <li>Integrated an inter-process communication (IPC) channel to reduce context-switch overhead and improve latency.</li>
        <li>Added test cases to validate correctness under concurrent read/write.</li>
      </ul>
      <p><strong>Automatic Data Preparation Pipeline</strong></p>
      <ul>
        <li>Introduced an automated data preparation and feature transformation pipeline for AI analytical queries.</li>
        <li>Supports training-ready dataset generation.</li>
      </ul>
    `,
  },
  {
    id: "2025-04-08",
    image:
      assetUrl("/assets/img/news/2025-04-08.jpg"),
    title_zh: "APACHE SINGA 5.0.0 发布",
    title_en: "APACHE SINGA 5.0.0 released",
    date_zh: "2025年4月8日",
    date_en: "April 08, 2025",
    source_link: "",
    zh_translation: "",
    en_translation: "",
    summary_zh:
      "我们很高兴地宣布 Apache SINGA v5.0 正式发布！在本版本中，我们重点增强了医疗模型库，目前已支持包括心血管疾病、糖尿病、血液疾病等在内的多种疾病模型。",
    summary_en:
      "We are happy to announce the release of Apache SINGA v5.0! In this version, we focus on enhancing the healthcare model zoo, which now supports models for diseases such as cardiovascular disease, diabetes, hematologic disorders, etc.",
    content_zh: `
      <p>我们很高兴地宣布 Apache SINGA v5.0 正式发布！</p>
      <p>在本版本中，我们重点增强了医疗模型库，目前已支持包括心血管疾病、糖尿病、血液疾病等在内的多种疾病模型。</p>
      <p>我们于2014年启动了<a href="https://singa.apache.org/" target="_blank">Apache SINGA</a>，这是一个分布式深度学习平台；在2015年在Apache软件基金会（ASF）孵化，并于2015年10月发布了<a href="https://en.wikipedia.org/wiki/Apache_SINGA" target="_blank">第一个版本</a>。它于2019年10月毕业成为第一个ASF顶级项目（TOP），专注于分布式学习。</p>
      <img src="${assetUrl("/assets/img/news/2025-04-08.jpg")}" alt="post" style="display: block; margin: 0 auto; max-width: 100%;">
    `,
    content_en: `
      <p>We are happy to announce the release of Apache SINGA v5.0!</p>
      <p>In this version, we focus on enhancing the healthcare model zoo, which now supports models for diseases such as cardiovascular disease, diabetes, hematologic disorders, etc.</p>
      <p>We started <a href="https://singa.apache.org/" target="_blank">Apache SINGA</a>, a distributed deep learning platform, in 2014; incubated it at Apache Software Foundation (ASF) in 2015, and released its <a href="https://en.wikipedia.org/wiki/Apache_SINGA" target="_blank">first version</a> in October 2015. It graduated as the first ASF top-level-project (TOP) on distributed learning in Oct 2019.</p>
      <img src="${assetUrl("/assets/img/news/2025-04-08.jpg")}" alt="post" style="display: block; margin: 0 auto; max-width: 100%;">
    `,
  },
  {
    id: "2025-03-14",
    image:
      assetUrl("/assets/img/news/2025-03-14-8.png"),
    title_zh: "黄铭钧院士全职加盟浙江大学软件学院",
    title_en:
      "Academician Ooi Beng Chin Joins Zhejiang University School of Software Full-time",
    date_zh: "2025年3月14日",
    date_en: "March 14, 2025",
    source_link: "http://www.cst.zju.edu.cn/2025/0325/c36202a3030789/page.htm",
    zh_translation: "",
    en_translation: "ChatGPT 5.1",
    summary_zh:
      "3月13日下午，浙江大学软件学院、宁波国际科创中心在新园区举行黄铭钧院士全职聘任仪式。",
    summary_en:
      "On the afternoon of March 13, the School of Software Technology of Zhejiang University and the Ningbo International Innovation Center jointly held the full-time appointment ceremony of Academician Ooi Beng Chin at the new campus.",
    content_zh: `
      <p>3月13日下午，浙江大学软件学院、宁波国际科创中心在新园区举行黄铭钧院士全职聘任仪式。</p>
      <p>宁波市委组织部副部长、市委人才办常务副主任、市人力社保局局长张瑞丽，鄞州区委常委、组织部部长黄健，中国工程院院士、浙江大学教授陈纯，浙江大学党委常委、副校长陈刚，浙江大学发展规划处处长、软件学院院长、浙江大学宁波国际科创中心主任尹建伟，浙江大学人才工作办公室副主任徐晓峰，以及软件学院、宁波国际科创中心班子成员出席聘任仪式。仪式由尹建伟院长主持。</p>
      <img src="${assetUrl("/assets/img/news/2025-03-14-1.png")}" style="margin-top:20px;margin-bottom:20px;width:100%;">
      <p>尹建伟院长在致辞中回顾了黄院士的卓越学术成就与行业贡献，并代表浙江大学软件学院及宁波国际科创中心，向黄院士致以诚挚欢迎。他强调，黄院士的加盟将带来强大的学术动能与创新势能，期待在黄院士的引领下，共同推动人工智能与数据科学领域的跨越式发展，擘画校地协同创新的新图景。</p>
      <img src="${assetUrl("/assets/img/news/2025-03-14-2.png")}" style="margin-top:20px;margin-bottom:20px;width:100%;">
      <p>陈刚副校长对黄院士深耕人工智能与大数据领域数十载、在学术界和工业界作出的突出贡献表示崇高敬意，对黄院士为推动新加坡国立大学与浙江大学建立长期合作关系所作出的努力表示衷心感谢。今年初，宁波市与浙江大学签署全面深化战略合作协议，有力推动了名城名校的高质量协同发展。黄院士的全职加盟将为校地融合创新发展注入强劲动能，助力打造教育科技人才产业一体化融合发展高地。</p>
      <img src="${assetUrl("/assets/img/news/2025-03-14-3.png")}" style="margin-top:20px;margin-bottom:20px;width:100%;">
      <p>陈纯院士在致辞中指出，宁波制造业根基深厚，近年来产业数字化转型成效显著。他强调，在宁波各级政府的大力支持下，浙江大学软件学院与宁波国际科创中心作为区域信息技术发展双引擎，将为黄院士团队搭建优质创新平台，期待双方共同为宁波经济高质量发展赋能。特别要立足长三角一体化战略，通过杭甬双城协同创新，切实将科研优势转化为产业竞争优势。</p>
      <img src="${assetUrl("/assets/img/news/2025-03-14-4.png")}" style="margin-top:20px;margin-bottom:20px;width:100%;">
      <p>张瑞丽副部长发表讲话。她指出，宁波始终将人才视为"第一资源"，深入实施"人才强市"战略，为顶尖人才提供"一人一策"专项支持政策，覆盖科研平台建设、团队组建、成果转化、生活保障等全方位服务。她期待黄院士团队发挥引领作用，在人工智能与大数据领域突破关键技术，助力产业升级；并以黄院士为纽带，形成"以才引才、群贤毕至"的生动局面。</p>
      <img src="${assetUrl("/assets/img/news/2025-03-14-5.png")}" style="margin-top:20px;margin-bottom:20px;width:100%;">
      <p>黄铭钧院士对宁波市和浙江大学的诚挚邀请表示感谢，并介绍了与浙江大学的合作渊源以及共同开展研究的情况。他指出，中国的数字经济规模已突破50万亿元，呈现蓬勃向上发展态势。他将聚焦新型数据系统，着力突破数据处理效率、分析质量及流通安全等核心问题。同时深化产学研用深度融合，为浙江大学软件学院和宁波国际科创中心的学科建设、科技创新和人才培养贡献力量，助力宁波市数字经济发展。</p>
      <img src="${assetUrl("/assets/img/news/2025-03-14-6.png")}" style="margin-top:20px;margin-bottom:20px;width:100%;">
      <p>尹建伟院长与黄铭钧院士签订聘任协议。</p>
      <img src="${assetUrl("/assets/img/news/2025-03-14-7.png")}" style="margin-top:20px;margin-bottom:20px;width:100%;">
      <p>陈刚副校长为黄院士佩戴浙江大学校徽，软件学院学生向黄院士献花。</p>
      <img src="${assetUrl("/assets/img/news/2025-03-14-8.png")}" style="margin-top:20px;margin-bottom:20px;width:100%;">
    `,
    content_en: `
      <p>On the afternoon of March 13, the School of Software Technology of Zhejiang University and the Ningbo International Innovation Center jointly held the full-time appointment ceremony of Academician Ooi Beng Chin at the new campus.</p>
      <p>The ceremony was attended by Zhang Ruili, Deputy Director of the Organization Department of the Ningbo Municipal Party Committee, Executive Deputy Director of the Municipal Talent Office, and Director of the Municipal Human Resources and Social Security Bureau; Huang Jian, Member of the Standing Committee of the Yinzhou District Party Committee and Director of its Organization Department; Academician Chen Chun of the Chinese Academy of Engineering and Professor at Zhejiang University; Chen Gang, Member of the Standing Committee of the CPC Zhejiang University Committee and Vice President of Zhejiang University; Yin Jianwei, Director of the Development Planning Office, Dean of the School of Software Technology, and Director of the Ningbo International Innovation Center of Zhejiang University; Xu Xiaofeng, Deputy Director of the Talent Affairs Office of Zhejiang University; as well as members of the leadership teams of the School of Software Technology and the Ningbo International Innovation Center. The ceremony was chaired by Dean Yin Jianwei.</p>
      <img src="${assetUrl("/assets/img/news/2025-03-14-1.png")}" style="margin-top:20px;margin-bottom:20px;width:100%;">
      <p>In his opening remarks, Dean Yin Jianwei reviewed Academician Prof Ooi's outstanding academic achievements and contributions to industry. On behalf of the School of Software Technology of Zhejiang University and the Ningbo International Innovation Center, he extended a warm welcome to Academician Ooi Beng Chin. He emphasized that Prof Ooi's appointment would bring strong academic momentum and innovative vitality, and expressed the hope that, under Prof Ooi's leadership, both sides would jointly promote leapfrog development in the fields of artificial intelligence and data science, and outline a new blueprint for university–local collaborative innovation.</p>
      <img src="${assetUrl("/assets/img/news/2025-03-14-2.png")}" style="margin-top:20px;margin-bottom:20px;width:100%;">
      <p>Vice President Chen Gang expressed his deep respect for Academician Ooi Beng Chin's decades-long dedication to artificial intelligence and big data, as well as his outstanding contributions to both academia and industry. He also conveyed sincere appreciation for Prof Ooi's efforts in fostering long-term cooperation between the National University of Singapore and Zhejiang University. Earlier this year, Ningbo Municipality and Zhejiang University signed a comprehensive strategic cooperation agreement, effectively advancing high-quality collaboration between a renowned city and a top university. Prof Ooi's full-time appointment will inject strong momentum into integrated university–local innovation and help build a highland for the integrated development of education, science and technology, talent, and industry.</p>
      <img src="${assetUrl("/assets/img/news/2025-03-14-3.png")}" style="margin-top:20px;margin-bottom:20px;width:100%;">
      <p>In his remarks, Academician Chen Chun pointed out that Ningbo has a solid manufacturing foundation and has achieved remarkable progress in industrial digital transformation in recent years. He emphasized that, with strong support from governments at all levels in Ningbo, the School of Software Technology of Zhejiang University and the Ningbo International Innovation Center, as dual engines for regional information technology development, will provide an excellent innovation platform for Academician Ooi Beng Chin's team. He expressed the hope that both sides would jointly empower Ningbo's high-quality economic development, particularly by leveraging the Yangtze River Delta integration strategy and promoting coordinated innovation between Hangzhou and Ningbo to effectively transform scientific research strengths into industrial competitiveness.</p>
      <img src="${assetUrl("/assets/img/news/2025-03-14-4.png")}" style="margin-top:20px;margin-bottom:20px;width:100%;">
      <p>Deputy Director Zhang Ruili delivered a speech, noting that Ningbo has always regarded talent as its "primary resource" and has deeply implemented the strategy of strengthening the city through talent. The city provides "tailor-made" support policies for top-tier talents, covering scientific research platform construction, team building, achievement transformation, and living services in an all-round manner. She expressed the expectation that Academician Ooi Beng Chin's team would play a leading role in achieving breakthroughs in key technologies in artificial intelligence and big data, driving industrial upgrading, and forming a vibrant landscape of "attracting talent through talent."</p>
      <img src="${assetUrl("/assets/img/news/2025-03-14-5.png")}" style="margin-top:20px;margin-bottom:20px;width:100%;">
      <p>Academician Ooi Beng Chin expressed his sincere gratitude to Ningbo Municipality and Zhejiang University for their invitation, and introduced the background of his collaboration with Zhejiang University and their joint research efforts. He noted that China's digital economy has exceeded a scale of 50 trillion yuan and continues to show strong growth momentum. He stated that he would focus on next-generation data systems, aiming to make breakthroughs in core issues such as data processing efficiency, analytical quality, and data circulation security. At the same time, he will deepen the integration of industry, academia, research, and application, contributing to discipline development, scientific innovation, and talent cultivation at the School of Software Technology of Zhejiang University and the Ningbo International Innovation Center, and supporting the development of Ningbo's digital economy.</p>
      <img src="${assetUrl("/assets/img/news/2025-03-14-6.png")}" style="margin-top:20px;margin-bottom:20px;width:100%;">
      <p>At the ceremony, Dean Yin Jianwei and Academician Ooi Beng Chin signed the appointment agreement.</p>
      <img src="${assetUrl("/assets/img/news/2025-03-14-7.png")}" style="margin-top:20px;margin-bottom:20px;width:100%;">
      <p>Vice President Chen Gang presented Academician Ooi Beng Chin with the Zhejiang University emblem, and students from the School of Software Technology presented flowers to Academician Ooi Beng Chin.</p>
      <img src="${assetUrl("/assets/img/news/2025-03-14-8.png")}" style="margin-top:20px;margin-bottom:20px;width:100%;">
    `,
  },
  {
    id: "2024-10-09",
    image:
      assetUrl("/assets/img/news/2024-10-09.png"),
    title_zh: "黄铭钧教授荣获中国计算机学会会士",
    title_en:
      "Professor Ooi Beng Chin honoured Fellow of the China Computer Federation",
    date_zh: "2024年10月9日",
    date_en: "October 09, 2024",
    source_link: "",
    zh_translation: "",
    en_translation: "",
    summary_zh:
      "黄铭钧教授被选为中国计算机学会（CCF）会士。CCF会士是中国计算机学会的最高荣誉，旨在表彰在计算机科学和技术领域做出杰出贡献的学者和专业人士。",
    summary_en:
      "Professor Ooi Beng Chin has been elected as Fellow of the China Computer Federation (CCF). Awarded by CCF, this distinction represents the highest honour which supports the academic and professional advancement of computing professionals worldwide.",
    content_zh: `
      <h5>黄铭钧教授被选为中国计算机学会（CCF）会士</h5>
      <p>CCF会士是中国计算机学会的最高荣誉，旨在表彰在计算机科学和技术领域做出杰出贡献的学者和专业人士。</p>
      <img src="${assetUrl("/assets/img/news/2024-10-09.png")}" alt="post">
      <p>全球仅有180位中国计算机学会（CCF）会士，黄铭钧教授的当选充分体现了他在计算领域的卓越贡献。这一荣誉不仅彰显了他在推动技术前沿发展方面的执着追求，也进一步巩固了我们在全球科研与创新领域的领导地位。</p>
    `,
    content_en: `
      <h5>Professor Ooi Beng Chin has been elected as Fellow of the China Computer Federation (CCF)</h5>
      <p>Awarded by CCF, this distinction represents the highest honour which supports the academic and professional advancement of computing professionals worldwide.</p>
      <img src="${assetUrl("/assets/img/news/2024-10-09.png")}" alt="post">
      <p>With only 180 CCF Fellows selected globally, Professor Ooi's achievement demonstrates his outstanding contribution to the field of computing. This recognition not only reflects his dedication to pushing the frontiers of technology but also reinforces our leadership in research and innovation on the global stage.</p>
    `,
  },
];
