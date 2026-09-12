const LANGUAGE_STORAGE_KEY = "nodi-language";

const translations = {
  zh: {
    meta: {
      title: "NODI 实验室 | 吉林大学",
      description:
        "吉林大学 NODI 实验室主页，面向国内外学者与学生展示研究方向、科研项目、实验室动态、团队、活动与学术成果。",
    },
    brand: {
      sub: "吉林大学",
    },
    nav: {
      skip: "跳转到主要内容",
      research: "研究",
      projects: "项目",
      updates: "动态",
      team: "团队",
      gallery: "活动",
      outcomes: "成果",
      contact: "联系",
    },
    hero: {
      eyebrow: "吉林大学 · 计算机科学与技术学院",
      title: "网络优化与分布式智能实验室",
      text:
        "NODI Lab 聚焦网络、系统、人工智能与安全的交叉研究，围绕网络优化与云边系统、联邦智能与可信计算、大模型与可信推理、智能体优化与安全、科学智能以及推荐系统与数据智能六个方向，开展基础方法、系统机制与真实场景应用研究。",
      button: {
        research: "查看研究方向",
        contact: "联系实验室",
        pi: "负责人主页",
      },
      stat: {
        affiliation: "吉林大学计算机科学与技术学院",
        admissions: "招收 2027 年博士生与 2027 年推免硕士生",
        collab: "欢迎学术合作、产业合作与联合培养",
      },
      card: {
        label: "当前研究重点",
        title: "网络、分布式学习、隐私安全与可扩展智能系统",
        1: "高性能网络优化与资源调度，面向现代计算基础设施效率提升。",
        2: "边缘计算、云计算与分布式机器学习系统，关注规模化部署与协同机制。",
        3: "联邦学习与分布式系统安全，强调隐私保护、鲁棒性与可信智能。",
      },
    },
    research: {
      eyebrow: "研究方向",
      title: "研究方向",
      text:
        "实验室围绕网络、系统、智能与安全交叉方向开展研究，形成以下六个主要研究方向。",
      1: {
        title: "网络优化与云边系统",
        text: "研究网络优化、内容分发、缓存管理与云边协同，围绕服务部署、资源管理与弹性调度构建高效的网络与计算基础设施。",
      },
      2: {
        title: "联邦智能与可信计算",
        text: "研究联邦学习、分布式训练、去中心化协同、鲁棒聚合、攻击防御与隐私保护，构建安全、可靠、可扩展的分布式智能系统。",
      },
      3: {
        title: "大模型与可信推理",
        text: "研究大模型优化、持续学习、推理增强、安全对齐与可信推理，支撑大模型系统在真实场景中的高效部署与可靠应用。",
      },
      4: {
        title: "智能体优化与安全",
        text: "研究智能体规划与决策、工具调用、多智能体协作及效率优化，探索提示注入防御、权限控制、可追溯性与安全评估方法。",
      },
      5: {
        title: "科学智能与交叉计算",
        text: "面向生物信息、医学诊断、药物设计与 DNA 存储等科学问题，研究融合领域知识、机制建模与数据驱动方法的系统框架。",
      },
      6: {
        title: "推荐系统与数据智能",
        text: "研究推荐系统、序列建模、图学习与个性化决策，服务复杂交互场景下的数据理解、建模与推荐任务。",
      },
    },
    projects: {
      eyebrow: "科研项目",
      title: "科研项目",
      text: "实验室获得国家级与省级科研项目支持，为长期研究方向中的方法创新、系统实现和应用验证提供基础。",
      national: "国家级",
      provincial: "省级",
      period: "执行期",
      periodSeparator: "：",
      columns: {
        number: "序号",
        level: "层级",
        program: "资助项目",
        description: "说明",
      },
      1: {
        title: "国家自然科学基金优秀青年科学基金项目（海外）",
        text: "支持青年学者自主开展创新性研究，为形成稳定研究方向与建设高水平科研团队提供持续基础。",
      },
      2: {
        title: "国家自然科学基金面上项目",
        text: "围绕自然科学基础研究中的重要问题，持续开展方法创新、理论分析、系统实现与实验验证。",
      },
      3: {
        title: "吉林省自然科学基金面上项目",
        text: "面向基础与应用基础研究需求，推进具有科学价值和区域影响力的研究工作。",
      },
    },
    updates: {
      eyebrow: "实验室更新",
      title: "实验室动态",
      text:
        "同步展示 NODI 实验室招生公告、论文录用、学术交流与讲座动态。",
      publications: {
        title: "最新研究成果",
        text: "依据实验室公众号整理近期论文录用与研究内容，点击“查看详情”可直接阅读全文摘要。",
      },
      news: {
        title: "新闻与公告",
        text: "招生公告置顶展示，并同步学术交流、专家讲座与团队动态，点击“查看详情”可直接阅读。",
      },
      more: {
        publications: "加载更多成果",
        news: "加载更多动态",
      },
      item: {
        pinned: "置顶",
        more: "查看详情",
        less: "收起详情",
      },
    },
    team: {
      eyebrow: "团队结构",
      title: "团队构成",
      text:
        "NODI Lab 汇聚博士生、硕士生与本科科研成员，围绕网络系统、分布式智能、安全与数据智能开展长期科研训练。",
      pi: {
        role: "实验室负责人",
        name: "燕刚 教授",
        text: "2016年、2019年先后于南开大学获得学士、硕士学位，2023年获纽约州立大学宾汉姆顿分校（SUNY-Binghamton）电子与计算机工程博士学位。2024年于加州大学默塞德分校（UC, Merced）从事博士后研究，同年入选国家高层次青年人才计划。2025年1月加入吉林大学计算机学院，任教授、博士生导师，兼任院长助理和国家级物联网虚拟仿真教学中心主任。",
      },
      summary: {
        title: "实验室成员",
      },
      stats: {
        count: "人",
      },
      toggle: {
        showAll: "显示全部 {count} 位{label}",
        collapse: "收起 {label}",
      },
    },
    gallery: {
      eyebrow: "实验室活动",
      title: "实验室活动照片",
      text:
        "记录学术交流、科研训练、团队建设与校园生活片段，呈现实验室开放、专注、互助的研究氛围。",
      more: "加载更多活动",
      all: "全部活动",
      showing: "当前显示 {visible} / {total} 项",
      categories: {
        academic: "学术活动",
        daily: "日常活动",
        other: "其他活动",
      },
    },
    outcomes: {
      eyebrow: "学术成果",
      title: "学术成果",
      text:
        "按年份展示正式发表论文与最新接收成果；作者、会议与论文链接均依据公开学术主页、会议页面和实验室公告核对。",
      more: "查看全部论文",
      collapse: "收起论文列表",
      papers: {
        kicker: "PUBLICATION RECORD",
        title: "完整论文列表",
        note: "截至 2026 年 9 月共整理 33 项；同一年内先列会议论文，再列期刊论文，各类别内优先排列 Gang Yan 为第一作者、共同第一作者或末位作者的论文，再按发表场所层级排序。",
        newTab: "（在新标签页打开）",
        scholar: "Google Scholar 完整列表",
        faculty: "吉林大学教师主页",
      },
    },
    contact: {
      eyebrow: "联系信息",
      title: "联系方式",
      text:
        "提供实验室官方邮箱、单位与地址，便于招生咨询、学术合作与项目交流。",
      card: {
        title: "欢迎联系与合作",
        text: "如需申请 2027 年博士和硕士，或开展学术合作与项目交流，可通过以下邮箱联系 NODI Lab。",
      },
      list: {
        email: "Email: gyan8@jlu.edu.cn / gangyan58@gmail.com",
        affiliation: "单位：吉林大学计算机科学与技术学院",
        location: "地址：中国吉林省长春市前进大街2699号前卫南校区",
      },
      wechat: {
        title: "NODI 公众号",
        text: "扫码关注实验室公众号",
        alt: "NODI 实验室公众号二维码",
      },
    },
    footer: {
      name: "NODI Lab",
      fullName: "网络优化与分布式智能实验室 · 吉林大学",
      copyright: "© 2026 NODI Lab, Jilin University.",
      rights: "保留所有权利。",
      counterMetric: "累计访问",
    },
    guard: {
      watermark: "NODI Lab",
      printNotice: "出于资料保护，本站不支持直接打印页面。",
    },
    aria: {
      brand: "NODI 实验室主页",
      logoAlt: "NODI 实验室 Logo",
      primaryNav: "主导航",
      languageSwitch: "语言切换",
      heroStats: "实验室概览",
      publicationsList: "论文与成果列表",
      newsList: "实验室动态列表",
      teamStats: "团队人数概览",
      teamDirectory: "团队目录",
      galleryFilters: "活动分类",
      galleryGrid: "活动照片列表",
      papersList: "论文成果列表",
      academicProfiles: "学术主页入口",
      projectsList: "科研项目列表",
    },
  },
  en: {
    meta: {
      title: "NODI Lab | Jilin University",
      description:
        "NODI Lab at Jilin University conducts research in networked systems, distributed intelligence, trustworthy AI, and AI for Science.",
    },
    brand: {
      sub: "Jilin University",
    },
    nav: {
      skip: "Skip to main content",
      research: "Research Areas",
      projects: "Projects",
      updates: "News",
      team: "People",
      gallery: "Gallery",
      outcomes: "Research",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Jilin University • College of Computer Science and Technology",
      title: "Network Optimization and Distributed Intelligence Laboratory",
      text:
        "NODI Lab studies networked systems and intelligent computing, with an emphasis on efficiency, reliability, and security. Our work spans network optimization and cloud–edge systems, federated intelligence, foundation models, AI agents, AI for Science, and recommender systems. We develop principled methods and deployable systems for real-world settings.",
      button: {
        research: "Explore Our Research",
        contact: "Contact Us",
        pi: "PI Homepage",
      },
      stat: {
        affiliation: "College of Computer Science and Technology, Jilin University",
        admissions: "2027 Ph.D. recruitment · Recommendation-based master's admission",
        collab: "Open to academic and industry partnerships and joint supervision",
      },
      card: {
        label: "Research Focus",
        title: "Efficient and Trustworthy Networked Intelligence",
        1: "Network optimization and resource scheduling for modern computing infrastructure.",
        2: "Cloud–edge systems and distributed machine learning at scale.",
        3: "Privacy, robustness, and security in federated and distributed learning.",
      },
    },
    research: {
      eyebrow: "Research Areas",
      title: "Research Areas",
      text:
        "Our research brings together networking, distributed systems, machine learning, and security across six themes.",
      1: {
        title: "Network Optimization and Cloud–Edge Systems",
        text: "We design algorithms and systems for network optimization, content delivery, caching, cloud–edge coordination, service placement, and elastic resource scheduling.",
      },
      2: {
        title: "Federated Learning and Trustworthy Distributed Intelligence",
        text: "We study federated and decentralized learning, robust aggregation, privacy-preserving collaboration, and defenses against attacks on distributed AI systems.",
      },
      3: {
        title: "Foundation Models and Trustworthy Reasoning",
        text: "We develop methods for foundation model optimization, continual learning, efficient inference, safety alignment, and reliable reasoning in real-world settings.",
      },
      4: {
        title: "AI Agents: Optimization and Security",
        text: "We study planning, tool use, multi-agent coordination, and efficient decision-making, together with prompt-injection defenses, access control, and security evaluation.",
      },
      5: {
        title: "AI for Science and Computational Discovery",
        text: "We integrate domain knowledge, mechanistic models, and data-driven learning for problems in bioinformatics, medical diagnosis, drug discovery, and DNA data storage.",
      },
      6: {
        title: "Recommender Systems and Data Intelligence",
        text: "We study sequential recommendation, graph learning, user modeling, and personalized decision-making in complex interactive environments.",
      },
    },
    projects: {
      eyebrow: "Research Funding",
      title: "Funded Projects",
      text: "Our work is supported by national and provincial research grants.",
      national: "National",
      provincial: "Provincial",
      period: "Funding period",
      periodSeparator: ": ",
      columns: {
        number: "No.",
        level: "Level",
        program: "Program",
        description: "Description",
      },
      1: {
        title: "Excellent Young Scientists Fund Program (Overseas), National Natural Science Foundation of China",
        text: "Supports independent research and the development of a sustained research program and team.",
      },
      2: {
        title: "General Program, National Natural Science Foundation of China",
        text: "Supports investigator-initiated basic research in the natural sciences.",
      },
      3: {
        title: "General Program, Natural Science Foundation of Jilin Province",
        text: "Supports basic and applied basic research with scientific and regional relevance.",
      },
    },
    updates: {
      eyebrow: "News",
      title: "News & Highlights",
      text:
        "Admissions, research highlights, academic exchanges, and invited talks from NODI Lab.",
      publications: {
        title: "Research Highlights",
        text: "Recent paper acceptances and concise research summaries.",
      },
      news: {
        title: "News & Announcements",
        text: "Admissions notices, academic exchanges, invited talks, and lab updates.",
      },
      more: {
        publications: "More Research Highlights",
        news: "More News",
      },
      item: {
        pinned: "Pinned",
        more: "Read More",
        less: "Show Less",
      },
    },
    team: {
      eyebrow: "People",
      title: "People",
      text:
        "Our group includes Ph.D., master's, and undergraduate researchers working across networked systems, distributed intelligence, security, and data-driven AI.",
      pi: {
        role: "Principal Investigator",
        name: "Prof. Gang Yan",
        text: "Since January 2025, Gang Yan has been a professor and Ph.D. supervisor at Jilin University, where he also serves as Assistant Dean of the College of Computer Science and Technology and Director of the National Virtual Simulation Teaching Center for the Internet of Things.",
      },
      summary: {
        title: "Lab Members",
      },
      stats: {
        count: "members",
      },
      toggle: {
        showAll: "View all {count} {label}",
        collapse: "Show fewer {label}",
      },
    },
    gallery: {
      eyebrow: "Lab Life",
      title: "Life at NODI",
      text:
        "Seminars, conferences, research exchanges, and moments from life in the lab.",
      more: "More Photos",
      all: "All",
      showing: "Showing {visible} of {total}",
      categories: {
        academic: "Academic Events",
        daily: "Lab Life",
        other: "Other",
      },
    },
    outcomes: {
      eyebrow: "Research",
      title: "Research",
      text:
        "Published and accepted papers, organized by year.",
      more: "View All Publications",
      collapse: "Show Fewer Publications",
      papers: {
        kicker: "PUBLICATIONS",
        title: "Publications",
        note: "33 published or accepted papers as of September 2026. Within each year, conference papers precede journal articles; work led by Gang Yan or listing him as senior or corresponding author appears first within each category, followed by venue prominence.",
        newTab: " (opens in a new tab)",
        scholar: "Google Scholar",
        faculty: "Jilin University Faculty Profile",
      },
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact",
      text:
        "Contact information for graduate admissions, academic collaboration, and project inquiries.",
      card: {
        title: "Contact & Collaboration",
        text: "For 2027 graduate applications, academic collaboration, or project inquiries, please contact us by email.",
      },
      list: {
        email: "Email: gyan8@jlu.edu.cn / gangyan58@gmail.com",
        affiliation: "Affiliation: College of Computer Science and Technology, Jilin University",
        location: "Location: Changchun, Jilin, China",
      },
      wechat: {
        title: "NODI Lab on WeChat",
        text: "Scan to follow our official account",
        alt: "QR code for the NODI Lab WeChat official account",
      },
    },
    footer: {
      name: "NODI Lab",
      fullName: "Network Optimization and Distributed Intelligence Laboratory · Jilin University",
      copyright: "© 2026 NODI Lab, Jilin University.",
      rights: "All rights reserved.",
      counterMetric: "Total Visits",
    },
    guard: {
      watermark: "NODI Lab",
      printNotice: "Printing is disabled to protect site materials.",
    },
    aria: {
      brand: "NODI Lab homepage",
      logoAlt: "NODI Lab logo",
      primaryNav: "Primary navigation",
      languageSwitch: "Language switch",
      heroStats: "Lab overview",
      publicationsList: "Publications and research outputs",
      newsList: "Lab news and announcements",
      teamStats: "Team overview",
      teamDirectory: "Team directory",
      galleryFilters: "Gallery categories",
      galleryGrid: "Photo gallery",
      papersList: "Publications list",
      academicProfiles: "Academic profile links",
      projectsList: "Funded research projects",
    },
  },
};

const galleryItems = [
  {
    id: "freshman-meeting-2026",
    categoryKey: "academic",
    month: { zh: "2026 年 9 月", en: "September 2026" },
    title: { zh: "实验室新生见面会", en: "Welcome Event for New Lab Members" },
    description: {
      zh: "实验室新成员参加团队新生见面会，与师生交流研究方向、科研训练与团队生活。",
      en: "New members met the group and discussed research directions, graduate training, and life at NODI Lab.",
    },
    image: "assets/images/gallery/freshman-meeting-2026-09.jpg",
    thumbnail: "assets/images/gallery/freshman-meeting-2026-09.jpg",
    objectPosition: "50% 58%",
    accent: ["#7295bf", "#e0ebf6", "#294a73"],
  },
  {
    id: "jeju-island-2026",
    categoryKey: "daily",
    month: { zh: "2026 年 8 月", en: "August 2026" },
    title: { zh: "济州岛风景", en: "Jeju Island" },
    description: {
      zh: "实验室成员参加 ACM KDD 2026 期间拍摄的济州岛海岸与港湾风景。",
      en: "A coastal view of Jeju Island, photographed during ACM KDD 2026.",
    },
    image: "assets/images/gallery/jeju-kdd-2026-08.jpg",
    thumbnail: "assets/images/gallery/jeju-kdd-2026-08.jpg",
    accent: ["#5c91be", "#d9edf7", "#215174"],
  },
  {
    id: "kdd-2026",
    categoryKey: "academic",
    month: { zh: "2026 年 8 月", en: "August 2026" },
    title: { zh: "燕刚教授参加 ACM KDD 2026", en: "Professor Gang Yan at ACM KDD 2026" },
    description: {
      zh: "燕刚教授参加 ACM KDD 2026，与同行围绕数据挖掘、机器学习及相关研究开展学术交流。",
      en: "Professor Gang Yan attended ACM KDD 2026 and joined discussions with researchers in data mining and machine learning.",
    },
    image: "assets/images/gallery/gang-yan-kdd-2026-08.jpg",
    thumbnail: "assets/images/gallery/gang-yan-kdd-2026-08.jpg",
    accent: ["#6a92c8", "#dce9f8", "#24457f"],
  },
  {
    id: "waic-2026",
    categoryKey: "academic",
    month: { zh: "2026 年 7 月", en: "July 2026" },
    title: { zh: "实验室参加 2026 世界人工智能大会", en: "NODI Lab at WAIC 2026" },
    description: {
      zh: "实验室成员赴上海参加 2026 世界人工智能大会，了解人工智能前沿进展并开展团队交流。",
      en: "NODI Lab members attended WAIC 2026 in Shanghai to follow recent advances in AI and meet researchers from other institutions.",
    },
    image: "assets/images/gallery/waic-2026-07.jpg",
    thumbnail: "assets/images/gallery/waic-2026-07.jpg",
    accent: ["#5f8ab9", "#d7e7f7", "#27456c"],
  },
  {
    id: "istanbul-2026",
    categoryKey: "daily",
    month: { zh: "2026 年 7 月", en: "July 2026" },
    title: { zh: "伊斯坦布尔风景", en: "Istanbul" },
    description: {
      zh: "实验室成员参加 IEEE/ACM IWQoS 2026 期间拍摄的伊斯坦布尔城市风景。",
      en: "A view of Istanbul, photographed during IEEE/ACM IWQoS 2026.",
    },
    image: "assets/images/gallery/istanbul-iwqos-2026-07.jpg",
    thumbnail: "assets/images/gallery/istanbul-iwqos-2026-07.jpg",
    accent: ["#7590b4", "#e9e1d7", "#394d69"],
  },
  {
    id: "iwqos-2026",
    categoryKey: "academic",
    month: { zh: "2026 年 7 月", en: "July 2026" },
    title: { zh: "燕刚教授参加 IEEE/ACM IWQoS 2026", en: "Professor Gang Yan at IEEE/ACM IWQoS 2026" },
    description: {
      zh: "燕刚教授在 IEEE/ACM IWQoS 2026 进行学术报告，分享联邦学习系统效率相关研究。",
      en: "Professor Gang Yan presented research on efficient federated learning systems at IEEE/ACM IWQoS 2026.",
    },
    image: "assets/images/gallery/gang-yan-iwqos-2026-07.jpg",
    thumbnail: "assets/images/gallery/gang-yan-iwqos-2026-07.jpg",
    objectPosition: "66% 62%",
    accent: ["#6f96cf", "#dfeafa", "#284c87"],
  },
  {
    id: "xiong-guojun-talk",
    categoryKey: "academic",
    month: { zh: "2026 年 6 月", en: "June 2026" },
    title: { zh: "熊国钧副教授学术讲座", en: "Invited Talk by Guojun Xiong" },
    description: {
      zh: "熊国钧副教授围绕智能决策从算法与强化学习到基于大模型的智能体演进作学术报告。",
      en: "Guojun Xiong discussed the evolution of intelligent decision-making from classical algorithms and reinforcement learning to LLM-based agents.",
    },
    image: "assets/images/gallery/xiong-guojun-talk-2026-06.jpg",
    thumbnail: "assets/images/gallery/xiong-guojun-talk-2026-06.jpg",
    accent: ["#729ad0", "#dfebfb", "#315182"],
  },
  {
    id: "yang-doctor-talk",
    categoryKey: "academic",
    month: { zh: "2026 年 4 月", en: "April 2026" },
    title: { zh: "杨博士学术讲座", en: "Invited Talk by Dr. Yang" },
    description: {
      zh: "杨博士面向实验室师生作专题学术报告，并围绕相关研究问题进行交流讨论。",
      en: "Dr. Yang gave an invited seminar, followed by a discussion with NODI Lab members.",
    },
    image: "assets/images/gallery/yang-talk-2026-04.jpg",
    thumbnail: "assets/images/gallery/yang-talk-2026-04.jpg",
    accent: ["#628bc2", "#dbe8f9", "#29436d"],
  },
  {
    id: "jingyuetan-outing",
    categoryKey: "daily",
    month: { zh: "2026 年 4 月", en: "April 2026" },
    title: { zh: "实验室净月潭踏青", en: "Lab Outing at Jingyuetan" },
    description: {
      zh: "实验室成员赴净月潭开展春季团队活动，在科研训练之外增进交流。",
      en: "A spring outing to Jingyuetan for informal discussion and team building.",
    },
    image: "assets/images/gallery/jingyuetan-outing-2026-04.jpg",
    thumbnail: "assets/images/gallery/jingyuetan-outing-2026-04.jpg",
    accent: ["#6485a8", "#dbe7f2", "#274260"],
  },
];

const pendingFocus = {
  zh: "研究方向整理中",
  en: "Research interests forthcoming",
};

function createMemberProfile({
  nameZh,
  nameEn,
  focusZh,
  focusEn,
  image = null,
  imagePosition = null,
  homepage = null,
}) {
  return {
    name: {
      zh: nameZh,
      en: nameEn,
    },
    homepage,
    image,
    imagePosition,
    focus: {
      zh: focusZh || pendingFocus.zh,
      en: focusEn || pendingFocus.en,
    },
    note: "",
  };
}

const memberProfiles = {
  "范可晴": createMemberProfile({
    nameZh: "范可晴",
    nameEn: "Keqing Fan",
    image: "assets/images/people/keqing-fan.jpg",
  }),
  "马亦瞳": createMemberProfile({
    nameZh: "马亦曈",
    nameEn: "Yitong Ma",
    focusZh: "机器学习安全、AI 医疗与高性能网络",
    focusEn: "Machine learning security, healthcare AI, and high-performance networking",
    image: "assets/images/people/yitong-ma.jpg",
    imagePosition: "74% 50%",
  }),
  "马秀慧": createMemberProfile({
    nameZh: "马秀慧",
    nameEn: "Xiuhui Ma",
    focusZh: "AI 医疗",
    focusEn: "Healthcare AI",
    image: "assets/images/people/xiuhui-ma.jpg",
  }),
  "王垚": createMemberProfile({
    nameZh: "王垚",
    nameEn: "Yao Wang",
    focusZh: "大语言模型微调",
    focusEn: "LLM fine-tuning",
    image: "assets/images/people/yao-wang.jpg",
  }),
  "曹先智": createMemberProfile({
    nameZh: "曹先智",
    nameEn: "Xianzhi Cao",
    focusZh: "边缘计算与内容分发网络",
    focusEn: "Edge computing and content delivery networks",
    image: "assets/images/people/xianzhi-cao.jpg",
  }),
  "胡文晗": createMemberProfile({
    nameZh: "胡文晗",
    nameEn: "Wenhan Hu",
    image: "assets/images/people/wenhan-hu.jpg",
  }),
  "李玉堂": createMemberProfile({
    nameZh: "李玉堂",
    nameEn: "Yutang Li",
    focusZh: "推荐系统",
    focusEn: "Recommender systems",
    image: "assets/images/people/yutang-li.jpg",
  }),
  "朱同曼": createMemberProfile({
    nameZh: "朱同曼",
    nameEn: "Tongman Zhu",
    focusZh: "AI 医疗与多模态学习",
    focusEn: "Healthcare AI and multimodal learning",
    image: "assets/images/people/tongman-zhu.jpg",
  }),
  "李曼迪": createMemberProfile({
    nameZh: "李曼迪",
    nameEn: "Mandi Li",
    focusZh: "AI 医学",
    focusEn: "Medical AI",
    image: "assets/images/people/mandi-li.jpg",
  }),
  "高雪岩": createMemberProfile({
    nameZh: "高雪岩",
    nameEn: "Xueyan Gao",
    focusZh: "大模型优化与隐私保护",
    focusEn: "Foundation model optimization and privacy-preserving learning",
    image: "assets/images/people/xueyan-gao.jpg",
  }),
  "黄会敏": createMemberProfile({
    nameZh: "黄会敏",
    nameEn: "Huimin Huang",
    focusZh: "强化学习",
    focusEn: "Reinforcement learning",
    image: "assets/images/people/huimin-huang.jpg",
  }),
  "黄佑江": createMemberProfile({
    nameZh: "黄佑江",
    nameEn: "Youjiang Huang",
    focusZh: "联邦学习",
    focusEn: "Federated learning",
    image: "assets/images/people/youjiang-huang.jpg",
  }),
  "刘沛霖": createMemberProfile({
    nameZh: "刘沛霖",
    nameEn: "Peilin Liu",
    focusZh: "推荐系统、联邦学习与大模型推理",
    focusEn: "Recommender systems, federated learning, and LLM inference",
    image: "assets/images/people/peilin-liu.jpg",
  }),
  "王天琦": createMemberProfile({
    nameZh: "王天琦",
    nameEn: "Tianqi Wang",
    focusZh: "多模态学习与参数高效微调",
    focusEn: "Multimodal learning and parameter-efficient fine-tuning",
    image: "assets/images/people/tianqi-wang.jpg",
    homepage: "https://orcid.org/0009-0001-5814-8249",
  }),
  "李梦纯": createMemberProfile({
    nameZh: "李梦纯",
    nameEn: "Mengchun Li",
    focusZh: "时间序列预测",
    focusEn: "Time-series forecasting",
    image: "assets/images/people/mengchun-li.jpg",
  }),
  "李霖杭": createMemberProfile({
    nameZh: "李霖杭",
    nameEn: "Linhang Li",
    image: "assets/images/people/linhang-li.jpg",
  }),
  "王涵平": createMemberProfile({
    nameZh: "王涵平",
    nameEn: "Hanping Wang",
    focusZh: "机器学习与深度学习，聚焦多模态方法与情感计算",
    focusEn: "Machine learning and deep learning, with a focus on multimodal methods and affective computing",
    image: "assets/images/people/hanping-wang.jpg",
  }),
  "盛浩鹏": createMemberProfile({
    nameZh: "盛浩鹏",
    nameEn: "Haopeng Sheng",
    focusZh: "基于自监督语音表征与对比学习的语音情感识别",
    focusEn: "Speech emotion recognition with self-supervised speech representations and contrastive learning",
    image: "assets/images/people/haopeng-sheng.jpg",
  }),
  "王策燃": createMemberProfile({
    nameZh: "王策燃",
    nameEn: "Ceran Wang",
    focusZh: "联邦学习",
    focusEn: "Federated learning",
    image: "assets/images/people/ceran-wang.jpg",
  }),
  "张卓群": createMemberProfile({
    nameZh: "张卓群",
    nameEn: "Zhuoqun Zhang",
    focusZh: "多模态联邦学习、异构跨模态检索与大模型安全对齐",
    focusEn: "Multimodal federated learning, heterogeneous cross-modal retrieval, and safety alignment for large language models",
    image: "assets/images/people/zhuoqun-zhang.jpg",
  }),
  "林正烨": createMemberProfile({
    nameZh: "林正烨",
    nameEn: "Zhengye Lin",
    focusZh: "联邦学习、VLA 与 MLLM",
    focusEn: "Federated learning, vision-language-action models, and multimodal LLMs",
    image: "assets/images/people/zhengye-lin.jpg",
  }),
  "赵传浩": createMemberProfile({
    nameZh: "赵传浩",
    nameEn: "Chuanhao Zhao",
  }),
};

function pickMembers(names) {
  return names
    .map((name) => memberProfiles[name])
    .filter(Boolean);
}

const TEAM_PREVIEW_COUNT = 8;

const teamGroups = [
  {
    key: "doctoral",
    label: { zh: "博士生", en: "Ph.D. Students" },
    previewCount: TEAM_PREVIEW_COUNT,
    members: pickMembers(["范可晴", "马亦瞳", "马秀慧", "王垚", "曹先智"]),
  },
  {
    key: "master",
    label: { zh: "硕士生", en: "Master's Students" },
    previewCount: TEAM_PREVIEW_COUNT,
    members: pickMembers(["胡文晗", "李玉堂", "朱同曼", "李曼迪", "高雪岩", "黄会敏", "黄佑江"]),
  },
  {
    key: "undergraduate",
    label: { zh: "本科生", en: "Undergraduate Students" },
    previewCount: TEAM_PREVIEW_COUNT,
    members: pickMembers([
      "刘沛霖",
      "林正烨",
      "王策燃",
      "李梦纯",
      "王涵平",
      "王天琦",
      "张卓群",
      "盛浩鹏",
      "李霖杭",
      "赵传浩",
    ]),
  },
];

const publications = [
  {
    meta: "2026-08-11 · ACM CIKM 2026",
    title: {
      zh: "实验室三篇论文被ACM CIKM 2026接收",
      en: "Three NODI Lab Papers Accepted to ACM CIKM 2026",
    },
    text: {
      zh: "成果覆盖鲁棒联邦聚合、联邦 LoRA 后门防御与短会话上下文老虎机信用分配。",
      en: "The papers cover robust federated aggregation, backdoor mitigation for federated LoRA, and credit assignment for short-session contextual bandits.",
    },
    detail: {
      zh: [
        {
          title: "论文一｜FedBIG：让联邦更新的几何判断更可信",
          paragraphs: [
            "《When Geometry Becomes Unreliable: Robust Federated Aggregation via Bounded Influence》由马亦瞳同学担任第一作者、燕刚教授担任通讯作者。论文重新审视鲁棒联邦聚合中的基础假设：在每轮参与客户端有限、模型更新维度极高且数据非独立同分布时，仅凭范数、距离、角度或相似度识别异常更新，其几何统计本身可能并不稳定。",
            "FedBIG 先将高维更新映射到由当前参与客户端数量能够支撑的低维空间，再通过鲁棒尺度估计、协方差校准与白化削弱极端更新及方向尺度差异，最后依据稳定后的偏离程度限制可疑客户端对聚合结果的影响。实验覆盖图像与文本任务、多种模型投毒和后门攻击，并考察强数据异质性与低客户端参与率。论文同时指出方法的适用边界：当参与客户端过少或正常更新过度分散时，服务器难以形成可靠几何判断，鲁棒聚合性能也会下降。",
          ],
        },
        {
          title: "论文二｜StrAP：面向 Federated LoRA 的结构化后门防御",
          paragraphs: [
            "《Backdoor Poisoning Mitigation for Federated LoRA via Structural Adaptive Control》由胡文晗同学担任第一作者、王喆教授担任第二作者、燕刚教授担任通讯作者。论文关注 LoRA 联邦微调中的新型安全风险：主干网络被冻结后，任务适配集中在低秩参数中，攻击者可以把后门行为隐藏在少量 LoRA rank channels，并让影响跨轮次积累。",
            "StrAP 同时分析客户端行为和 LoRA 内部结构。聚合前，方法利用服务器端少量干净数据产生的验证梯度识别长期偏离正常优化方向的客户端，并借助跨轮信任状态降低单轮波动造成的误判；聚合后，再检查 LoRA 的 rank channels，对统计异常且对正常任务贡献较小的结构单元进行选择性抑制或重置。实验覆盖 ViT、RoBERTa，BadNets、Neurotoxin、CerP、PFedBA 等攻击，以及不同聚合器、非独立同分布程度和稀疏客户端参与设置。",
          ],
        },
        {
          title: "论文三｜ReBEP：冻结评估下的短期反馈记忆",
          paragraphs: [
            "《Action-Aligned Frozen Credit: Storing Selected Feedback for Short-Session Contextual Bandits》由燕刚教授独立完成。论文追问短会话推荐与 contextual bandit 中一个容易被忽略的问题：后续决策变好，究竟源于早期反馈已被保存，还是模型在评估阶段仍持续利用新 reward 学习。",
            "为分离这两种解释，论文提出 adapt-then-freeze 设置：模型只在会话前几步接收 reward 并更新内部状态，随后关闭 reward 写入，后续决策只能读取冻结时已经形成的记忆。ReBEP 将被选动作的反馈写入该动作对应的独立、有限容量 memory slot，保留 action-level 的反馈归属关系。清零冻结记忆或打乱动作与 slot 的对应关系都会显著削弱性能；在统一冻结条件下，论文还与 Transformer、GRU、NeuralUCB、Thompson Sampling 和 differentiable plasticity 等方法进行了比较。",
          ],
        },
        {
          title: "共同关注",
          paragraphs: [
            "三项工作分别研究信息是否可靠、风险隐藏在哪里，以及有限反馈如何转化为可用状态，体现了实验室对学习与决策系统可靠性、可解释性及复杂环境适应能力的持续关注。",
          ],
        },
      ],
      en: [
        {
          title: "Paper 1 | FedBIG: Reliable Geometry for Robust Aggregation",
          paragraphs: [
            "Yitong Ma is the first author of “When Geometry Becomes Unreliable: Robust Federated Aggregation via Bounded Influence,” with Gang Yan as corresponding author. The paper revisits a basic assumption in robust federated aggregation: when participation is sparse, updates are extremely high-dimensional, and benign data are non-IID, norms, distances, angles, and similarities may be statistically unreliable indicators of malicious behavior.",
            "FedBIG first projects client updates into a lower-dimensional space whose dimensionality is compatible with the number of participating clients. Robust scale estimation, covariance calibration, and whitening then reduce the influence of extreme updates and directional scale differences before suspicious contributions are bounded during aggregation. The study covers image and text tasks, model-poisoning and backdoor attacks, strong heterogeneity, and low participation. It also identifies a boundary condition: reliable geometric inference becomes difficult when too few clients participate or benign updates are excessively dispersed.",
          ],
        },
        {
          title: "Paper 2 | StrAP: Structural Backdoor Defense for Federated LoRA",
          paragraphs: [
            "Wenhan Hu is the first author of “Backdoor Poisoning Mitigation for Federated LoRA via Structural Adaptive Control,” with Zhe Wang as second author and Gang Yan as corresponding author. The paper addresses a security risk in low-rank adaptation: with the backbone frozen, an attacker can conceal a backdoor in a small number of LoRA rank channels and accumulate its effect across communication rounds.",
            "Before aggregation, StrAP uses validation gradients from a small clean server dataset and cross-round trust states to identify clients that persistently deviate from the normal optimization direction. After aggregation, it examines LoRA rank channels and selectively suppresses or resets units that are statistically abnormal yet contribute little to the clean task. Evaluation covers ViT and RoBERTa, BadNets, Neurotoxin, CerP, and PFedBA attacks, multiple aggregators, non-IID levels, and sparse participation.",
          ],
        },
        {
          title: "Paper 3 | ReBEP: Feedback Memory under Frozen Evaluation",
          paragraphs: [
            "“Action-Aligned Frozen Credit: Storing Selected Feedback for Short-Session Contextual Bandits” is sole-authored by Gang Yan. It asks whether later decisions improve because the model retains early feedback or because it continues learning from rewards during evaluation.",
            "The paper introduces an adapt-then-freeze protocol: rewards may update the internal state only during the first few steps, after which reward writes stop and later decisions must use the frozen memory. ReBEP stores feedback for each selected action in its own finite-capacity memory slot, preserving action-level credit. Clearing the frozen memory or shuffling action-to-slot assignments sharply reduces performance. The work also compares ReBEP with Transformer, GRU, NeuralUCB, Thompson Sampling, and differentiable-plasticity methods under the same frozen protocol.",
          ],
        },
        {
          title: "Common thread",
          paragraphs: [
            "Together, the papers examine whether information is reliable, where risk is stored, and how limited feedback becomes usable state—questions central to building learning and decision systems that remain interpretable and dependable in complex environments.",
          ],
        },
      ],
    },
  },
  {
    meta: "2026-07-11 · ACM MM 2026",
    title: {
      zh: "实验室论文被ACM MM 2026接收",
      en: "NODI Lab Paper Accepted to ACM Multimedia 2026",
    },
    text: {
      zh: "FedCoPA 面向模态异构的联邦跨模态检索，以教师空间迁移与原型锚定改善跨客户端知识对齐。",
      en: "FedCoPA improves knowledge alignment for modality-heterogeneous federated cross-modal retrieval through teacher-space transfer and prototype anchoring.",
    },
    detail: {
      zh: [
        {
          title: "论文与作者",
          paragraphs: [
            "论文《Teacher-Space Transfer and Prototype Anchoring for Modality-Heterogeneous Federated Cross-Modal Retrieval》被第 34 届 ACM 国际多媒体会议（ACM Multimedia 2026）接收。张卓群与范可晴为共同第一作者，燕刚为通讯作者。",
          ],
        },
        {
          title: "研究问题与方法",
          paragraphs: [
            "论文研究模态异质场景下的联邦跨模态检索。实际联邦系统中的客户端往往只拥有图像或文本，只有少量客户端持有配对图文数据。跨模态监督不完整会使各客户端的表示空间发生偏移，传统参数聚合难以维持稳定一致的图文语义关系。",
            "FedCoPA 以冻结视觉语言模型的语义空间作为所有客户端的共同参照。客户端通过模态对齐、关系蒸馏和对比学习，把本地表示迁移至统一教师空间；服务器维护图像与文本原型记忆，为客户端提供跨通信轮次保留的全局语义锚点。图像、文本和多模态客户端因此能够在不共享原始数据的条件下协同学习跨模态表示。",
          ],
        },
        {
          title: "实验验证",
          paragraphs: [
            "论文在 MSCOCO、Flickr8k、Flickr30k 和 VizWiz 上评估图像检索文本与文本检索图像任务。公众号报道显示，FedCoPA 在各项设置中取得稳定提升，在仅一个客户端拥有配对图文数据的极端模态不均衡场景下仍保持良好表现，同时只增加较小的通信开销。",
          ],
        },
      ],
      en: [
        {
          title: "Paper and authors",
          paragraphs: [
            "“Teacher-Space Transfer and Prototype Anchoring for Modality-Heterogeneous Federated Cross-Modal Retrieval” was accepted to the 34th ACM International Conference on Multimedia (ACM Multimedia 2026). Zhuoqun Zhang and Keqing Fan are co-first authors, and Gang Yan is the corresponding author.",
          ],
        },
        {
          title: "Problem and method",
          paragraphs: [
            "The paper studies federated cross-modal retrieval when clients hold incomplete modalities: some have only images, some only text, and only a small subset have paired image–text data. Missing cross-modal supervision causes local representation spaces to drift, so standard parameter aggregation cannot preserve a stable shared semantic space.",
            "FedCoPA uses the semantic space of a frozen vision-language model as a common reference. On each client, modality alignment, relational distillation, and contrastive learning transfer local representations into that teacher space. On the server, image and text prototype memories provide global semantic anchors across communication rounds, enabling image-only, text-only, and multimodal clients to collaborate without sharing raw data.",
          ],
        },
        {
          title: "Evaluation",
          paragraphs: [
            "The study evaluates image-to-text and text-to-image retrieval on MSCOCO, Flickr8k, Flickr30k, and VizWiz. The lab announcement reports consistent gains, including when only one client has paired data, with modest additional communication overhead.",
          ],
        },
      ],
    },
  },
  {
    meta: "2026-06-22 · ECCV 2026",
    title: {
      zh: "实验室论文被ECCV 2026接收",
      en: "NODI Lab Paper Accepted to ECCV 2026",
    },
    text: {
      zh: "FedSDG 以共享与私有 LoRA 分支、块级门控和动态对齐实现可辨识的联邦参数高效个性化。",
      en: "FedSDG makes federated parameter-efficient personalization identifiable through shared and private LoRA branches, block-wise gating, and dynamic alignment.",
    },
    detail: {
      zh: [
        {
          title: "论文与研究问题",
          paragraphs: [
            "论文《Identifiable Gated Residual Personalization for Federated Parameter-Efficient Fine-Tuning》被 ECCV 2026 接收，作者为黄会敏、胡文晗和燕刚。该工作研究大规模预训练模型在原始数据不出域、通信受限和客户端数据异质条件下的高效个性化适配。",
            "全模型联邦微调成本较高；LoRA 虽能降低训练与通信成本，却需要在有限残差空间中合理分配共享知识和客户端私有知识。论文指出，已有门控残差混合方法中，私有残差幅值与门控权重共同决定最终贡献，因而存在尺度不可辨识性：相同输出可能来自不同的“残差大小—门控强度”组合，使门控系数难以直接解释为个性化强度，并影响稀疏正则与训练稳定性。",
          ],
        },
        {
          title: "FedSDG 方法",
          paragraphs: [
            "FedSDG 将共享 LoRA 与私有 LoRA 分为两条路径：共享分支在客户端间聚合以学习共性表示；私有分支和门控参数保留在本地，以建模客户端特有修正。方法还在 Transformer 的不同注入位置设置块级标量门控，形成分层且可解释的个性化调节。",
            "Dynamic Alignment 以冻结主干网络的输出尺度作为稳定参照，在门控混合前对私有残差进行 RMS 对齐，缓解本地训练产生的尺度漂移。经过对齐后，门控值主要表示相对于主干激活尺度的个性化注入比例，而不再承担尺度补偿。",
          ],
        },
        {
          title: "实验与开源",
          paragraphs: [
            "论文在 CIFAR-100、Tiny-ImageNet、Office-Home 和 Mini-DomainNet 的多种 Non-IID 设置下进行验证。公众号报道显示，FedSDG 在强异质场景中的平均精度与客户端鲁棒性均有稳定改善；机制分析表明 Dynamic Alignment 能稳定不同层的门控行为，并使个性化更多集中在深层语义表示阶段。代码仓库：github.com/ahuang0324/fedsdg。",
          ],
        },
      ],
      en: [
        {
          title: "Paper and research question",
          paragraphs: [
            "“Identifiable Gated Residual Personalization for Federated Parameter-Efficient Fine-Tuning” was accepted to ECCV 2026. The authors are Huimin Huang, Wenhan Hu, and Gang Yan. The paper studies efficient personalization of large pretrained models when raw data remain local, communication is constrained, and client distributions are heterogeneous.",
            "Full-model federated fine-tuning is expensive. LoRA reduces training and communication costs but still requires a careful balance between shared and client-specific knowledge. The paper identifies scale non-identifiability in gated residual mixtures: private residual magnitude and gate weight jointly determine the contribution, so the same output can arise from different magnitude–gate combinations. This weakens the interpretation of gate values and can destabilize sparsity regularization and training.",
          ],
        },
        {
          title: "FedSDG method",
          paragraphs: [
            "FedSDG separates shared and private LoRA paths. Shared adapters are aggregated across clients to learn common representations, while private adapters and gates stay local. Block-wise scalar gates at different Transformer injection points provide hierarchical and interpretable personalization.",
            "Dynamic Alignment uses the frozen backbone output scale as a stable reference and RMS-aligns private residuals before gated mixing. This reduces local scale drift so that gate values more closely represent the proportion of personalization injected relative to the backbone activation, instead of compensating for scale.",
          ],
        },
        {
          title: "Evaluation and code",
          paragraphs: [
            "The study evaluates CIFAR-100, Tiny-ImageNet, Office-Home, and Mini-DomainNet under multiple non-IID settings. The lab announcement reports gains in mean accuracy and client robustness under strong heterogeneity. Analysis of the learned gates shows more stable layer-wise behavior, with personalization concentrated in deeper semantic stages. Code: github.com/ahuang0324/fedsdg.",
          ],
        },
      ],
    },
  },
  {
    meta: "2026-06-02 · ACM KDD 2026",
    title: {
      zh: "实验室两篇论文被 KDD 2026 接收",
      en: "Two NODI Lab Papers Accepted to ACM KDD 2026",
    },
    text: {
      zh: "GAUC 研究鲁棒优化中的更新几何控制；ANCHOR 面向 DNA 存储建立逐碱基风险预测模型。",
      en: "GAUC studies geometry-aware update control for robust optimization, while ANCHOR predicts per-base risk in DNA data storage.",
    },
    detail: {
      zh: [
        {
          title: "录用概况",
          paragraphs: [
            "实验室两篇论文被 ACM SIGKDD 2026 接收：《Geometry-Aware Update Control for Robust Optimization》进入 Cycle 2 Research Track；《ANCHOR: Aligned Non-contextual and Contextual Hybridization with On-condition Calibration for Per-Base Risk Prediction》进入 Cycle 2 AI for Sciences Track。",
          ],
        },
        {
          title: "GAUC｜鲁棒优化中的几何感知更新控制",
          paragraphs: [
            "GAUC 关注深度学习训练的优化稳定性。少量异常梯度可能污染优化器状态，引起训练轨迹偏移、loss spike 甚至训练失稳。该方法位于反向传播与参数更新之间，对梯度进行几何检查：同时分析更新方向与历史下降方向的一致性、异常正交能量注入以及反向更新。",
            "依据这些信号，GAUC 在参数块级执行投影校正、尺度感知裁剪和有界预算控制，以限制单次异常更新的影响并尽量保留正常下降信息。公众号报道的验证场景包括方向噪声、正交扰动、重尾噪声、梯度反向、真实噪声标签、混合精度训练与梯度累积。",
          ],
        },
        {
          title: "ANCHOR｜DNA 存储逐碱基风险预测",
          paragraphs: [
            "ANCHOR 研究 DNA 数据存储在合成、扩增、保存与测序过程中产生的逐碱基错误。研究基于公共 digital-twin 数据集和实验室自建湿实验数据集 Inkjet4721，分析真实流程中的错误分布。公众号报道显示，错误并非均匀随机发生：大多数碱基位置风险较低，少数位置形成长尾高风险区域，并与 GC 含量、均聚物、局部结构可及性、PCR 应激和测序平台等因素相关。",
            "该框架把 DNA 基础模型的上下文表示与机制描述符稳定融合，并引入条件感知校准，以增强跨实验条件的风险识别可靠性。补充实验将预测风险用于固定预算下的序列筛选和冗余资源分配，用于改善解码成功率并降低保留序列的预期错误，为主动序列筛选、实验质控和编码设计提供依据。",
          ],
        },
      ],
      en: [
        {
          title: "Acceptance overview",
          paragraphs: [
            "Two papers were accepted to ACM SIGKDD 2026: “Geometry-Aware Update Control for Robust Optimization” in the Cycle 2 Research Track, and “ANCHOR: Aligned Non-contextual and Contextual Hybridization with On-condition Calibration for Per-Base Risk Prediction” in the Cycle 2 AI for Sciences Track.",
          ],
        },
        {
          title: "GAUC | Geometry-aware update control for robust optimization",
          paragraphs: [
            "GAUC addresses optimization instability in deep learning. A few anomalous gradients can contaminate optimizer state, shift the training trajectory, trigger loss spikes, or destabilize training. Positioned between backpropagation and the parameter update, GAUC checks whether a gradient agrees with the historical descent direction, injects unusual orthogonal energy, or reverses the update direction.",
            "Using these signals, the method performs block-level projection correction, scale-aware clipping, and bounded-budget control. The aim is to limit the effect of an abnormal step while preserving legitimate descent information. Reported evaluation settings include directional noise, orthogonal perturbations, heavy-tailed noise, gradient reversal, real-world label noise, mixed-precision training, and gradient accumulation.",
          ],
        },
        {
          title: "ANCHOR | Per-base risk prediction for DNA storage",
          paragraphs: [
            "ANCHOR studies per-base errors introduced during DNA synthesis, amplification, storage, and sequencing. Using a public digital-twin dataset and the lab's wet-lab Inkjet4721 dataset, the study finds a long-tailed risk distribution rather than uniform random error. A small subset of high-risk bases is associated with GC content, homopolymers, local structural accessibility, PCR stress, and sequencing platform.",
            "The framework combines contextual representations from a DNA foundation model with mechanistic descriptors and adds condition-aware calibration for transfer across experimental conditions. Supplementary experiments use predicted risk for fixed-budget sequence screening and redundancy allocation, with the aim of improving decoding success and reducing expected error among retained sequences.",
          ],
        },
      ],
    },
  },
];


const featuredNewsItems = [
  {
    pinned: true,
    meta: { zh: "更新于 2026-09-11 · 博士招生", en: "Updated Sep 11, 2026 · Ph.D. Admissions" },
    title: {
      zh: "NODI实验室2027年博士研究生招生公告",
      en: "Ph.D. Admissions | Fall 2027",
    },
    text: {
      zh: "面向网络、分布式智能、大模型、智能体与科学智能方向招收学术型博士研究生（包含直博）。",
      en: "Three academic-track Ph.D. positions are planned for Fall 2027, including direct-entry applicants, across networking, distributed intelligence, foundation models, AI agents, and AI for Science.",
    },
    detail: {
      zh: [
        {
          title: "招生计划",
          paragraphs: [
            "2027 年秋季：计划招收 3 名学术型博士研究生。招生类型、最终名额、报名条件与录取流程以吉林大学及学院当年度正式通知为准。",
            "实验室同时招收 2027 年推免硕士研究生，计划名额 5 个，具体信息见下一条置顶公告。",
          ],
        },
        {
          title: "研究方向",
          paragraphs: [
            "1. 网络优化与云边系统：网络优化、内容分发、缓存管理、云边协同、服务部署与资源调度。",
            "2. 联邦智能与可信计算：联邦学习、分布式训练、去中心化协同、鲁棒聚合、攻击防御与隐私保护。",
            "3. 大模型与可信推理：大模型优化、持续学习、推理增强、安全对齐与可信推理。",
            "4. 智能体优化与安全：智能体规划与决策、工具调用、多智能体协作、效率优化、可追溯性与安全评估。",
            "5. 科学智能与交叉计算：面向生物信息、医学诊断、药物设计、DNA 存储等问题的 AI for Science。",
            "6. 推荐系统与数据智能：推荐系统、序列建模、图学习与个性化决策。",
          ],
        },
        {
          title: "申请要求",
          paragraphs: [
            "具有良好的英语阅读、写作与沟通能力；对科研有持续热情，能够独立思考并积极协作；动手能力强，能够独立编写代码、复现实验或搭建 testbed。",
            "在计算机系统、机器学习、深度学习、数学或统计学等方面具备扎实基础。有相关科研经历、论文、竞赛、开源项目或系统实践者优先。教育背景、科研潜力、实际能力和长期投入意愿将综合评价。",
          ],
        },
        {
          title: "培养与支持",
          paragraphs: [
            "实验室提供科研经费、计算资源与实验条件，支持成员探索具有学术价值和实际意义的问题。研究方向在团队长期主题内尊重个人兴趣，鼓励交叉研究、国际交流与高质量开源。",
            "团队采用相对灵活的科研安排，不要求以每日打卡衡量投入；寒暑假正常安排，并支持硕士生在不影响培养与科研计划的前提下参加实习。团队定期组织讨论、聚餐和户外活动，重视高质量投入与长期身心平衡。",
          ],
        },
        {
          title: "申请方式",
          paragraphs: [
            "请将个人简历、代表性成果（论文、竞赛、开源项目或系统作品等），以及本科和硕士阶段成绩单发送至 gyan8@jlu.edu.cn 或 gangyan58@gmail.com。邮件标题：2027年博士申请-姓名。",
            "申请材料应清楚说明研究兴趣、个人承担的工作和可核验成果；尚未发表论文不等于缺乏研究潜力，扎实基础、主动性、执行力和持续投入同样是重要评价依据。",
          ],
        },
      ],
      en: [
        {
          title: "Planned intake",
          paragraphs: [
            "The lab plans to recruit three academic-track Ph.D. students for Fall 2027, including applicants entering directly from a bachelor's program. The final quota, eligibility requirements, and admissions process are subject to official notices from Jilin University and the college.",
            "The lab also plans to recruit five master's students for 2027 through China's recommendation-based graduate admissions pathway; see the next pinned announcement for details.",
          ],
        },
        {
          title: "Research directions",
          paragraphs: [
            "1. Network Optimization and Cloud–Edge Systems: content delivery, caching, cloud–edge coordination, service placement, and resource scheduling.",
            "2. Federated Learning and Trustworthy Distributed Intelligence: distributed training, decentralized collaboration, robust aggregation, privacy-preserving methods, and defenses against attacks.",
            "3. Foundation Models and Trustworthy Reasoning: model optimization, continual learning, inference optimization, safety alignment, and trustworthy reasoning.",
            "4. AI Agents: Optimization and Security: planning, decision-making, tool use, multi-agent collaboration, efficiency, traceability, and security evaluation.",
            "5. AI for Science and Computational Discovery: bioinformatics, medical diagnosis, drug discovery, DNA storage, and related scientific problems.",
            "6. Recommender Systems and Data Intelligence: recommendation, sequential modeling, graph learning, and personalized decision-making.",
          ],
        },
        {
          title: "Applicant profile",
          paragraphs: [
            "Applicants should be able to read and write technical English, communicate clearly, think independently, and collaborate effectively. They should also be able to implement algorithms, reproduce experiments, or build experimental testbeds.",
            "A solid foundation in computer systems, machine learning, mathematics, or statistics is expected. Research experience, publications, competitions, open-source work, and systems projects are valued. We assess academic preparation, research potential, practical ability, initiative, and sustained commitment as a whole.",
          ],
        },
        {
          title: "Research environment",
          paragraphs: [
            "The lab provides research funding, computing resources, and experimental support. Students can develop their own interests within the group's broader themes and are encouraged to pursue interdisciplinary work, international exchange, and high-quality open-source research.",
            "Research schedules are flexible, and progress is not measured by daily attendance. Winter and summer breaks follow the normal academic calendar, and master's students may pursue internships when compatible with their degree and research plans. The group values sustained, healthy research practice.",
          ],
        },
        {
          title: "How to apply",
          paragraphs: [
            "Email a CV, representative work (papers, competitions, open-source projects, or systems), and undergraduate and master's transcripts to gyan8@jlu.edu.cn or gangyan58@gmail.com. Suggested subject: “2027 Ph.D. Application – Name.”",
            "Please state your research interests, your contribution to each project, and any verifiable outputs. Publications are welcome but not required; strong fundamentals, initiative, execution, and sustained commitment are equally important.",
          ],
        },
      ],
    },
    resources: [
      {
        label: { zh: "导师官方主页", en: "Official faculty profile" },
        url: "https://ccst.jlu.edu.cn/info/1367/20676.htm",
      },
    ],
  },
  {
    pinned: true,
    meta: { zh: "2026-07-01 · 推免招生", en: "Jul 1, 2026 · Master's Admissions" },
    title: {
      zh: "NODI实验室招收2027年推免生",
      en: "Master's Admissions | 2027 Recommendation-Based Entry",
    },
    text: {
      zh: "面向全国高校招收 2027 年推荐免试硕士研究生，计划名额 5 个，欢迎优秀本科生联系咨询。",
      en: "Five master's places are planned for 2027 through China's recommendation-based graduate admissions pathway.",
    },
    detail: {
      zh: [
        {
          title: "招生对象与名额",
          paragraphs: [
            "吉林大学计算机科学与技术学院燕刚教授课题组（NODI Lab.）面向全国高校招收 2027 年推荐免试硕士研究生，计划名额 5 个。推免资格、夏令营或预推免安排、最终名额与录取流程以吉林大学和学院当年度正式通知为准。",
          ],
        },
        {
          title: "研究方向",
          paragraphs: [
            "1. 网络优化与云边系统；2. 联邦智能与可信计算；3. 大模型与可信推理；4. 智能体优化与安全；5. 科学智能与交叉计算（AI for Science）；6. 推荐系统与数据智能。",
            "具体课题可以覆盖云边协同、网络资源调度、内容分发、联邦学习与隐私保护、大模型持续学习与安全、可信智能体，以及 AI 与生物信息、医学诊断、药物设计和 DNA 存储的交叉研究。",
          ],
        },
        {
          title: "我们期待这样的同学",
          paragraphs: [
            "欢迎计算机、软件工程、人工智能、电子信息、自动化、数学、统计等相关专业的本科生申请。申请者应具备扎实的专业基础和较好的编程能力，对科研有兴趣并愿意持续投入，能够主动学习、独立实现算法，并具备良好的英文文献阅读与写作能力。",
            "具有机器学习、系统、网络、安全、算法、开源项目、科研训练、实习或学科竞赛经历者优先。论文发表不是必要条件，团队更重视基础能力、科研潜力、主动性、执行力和长期成长空间。",
          ],
        },
        {
          title: "申请材料",
          paragraphs: [
            "请准备个人简历、本科成绩单、英语水平证明，科研、项目、竞赛和实习经历说明，以及已发表论文、代码仓库、项目报告等代表性材料（如有）。邮件标题建议：2027推免申请-姓名-本科学校-意向方向。",
          ],
        },
        {
          title: "联系方式",
          paragraphs: [
            "联系人：燕刚教授，吉林大学计算机科学与技术学院。邮箱：gyan8@jlu.edu.cn；备用邮箱：gangyan58@gmail.com。",
          ],
        },
      ],
      en: [
        {
          title: "Eligibility and planned intake",
          paragraphs: [
            "Professor Gang Yan's group in Jilin University's College of Computer Science and Technology plans to admit five master's students for 2027 through China's recommendation-based graduate admissions pathway. Eligibility, summer school and pre-admission arrangements, the final quota, and admissions procedures are subject to official notices from Jilin University and the college.",
          ],
        },
        {
          title: "Research directions",
          paragraphs: [
            "1. Network Optimization and Cloud–Edge Systems; 2. Federated Learning and Trustworthy Distributed Intelligence; 3. Foundation Models and Trustworthy Reasoning; 4. AI Agents: Optimization and Security; 5. AI for Science and Computational Discovery; 6. Recommender Systems and Data Intelligence.",
            "Projects may address cloud–edge coordination, network scheduling, content delivery, federated learning and privacy, continual learning and safety for foundation models, trustworthy agents, and interdisciplinary work spanning bioinformatics, medical diagnosis, drug discovery, and DNA data storage.",
          ],
        },
        {
          title: "Who should apply",
          paragraphs: [
            "We welcome applicants from computer science, software engineering, artificial intelligence, electronic and information engineering, automation, mathematics, statistics, and related fields. Candidates should have strong fundamentals, solid programming skills, sustained research interest, initiative, and the ability to read and write technical English.",
            "Experience in machine learning, systems, networking, security, algorithms, open-source development, research projects, internships, or academic competitions is valued. Publications are not required; we place greater weight on fundamentals, research potential, initiative, execution, and capacity for long-term growth.",
          ],
        },
        {
          title: "Application materials",
          paragraphs: [
            "Please send a CV, undergraduate transcript, proof of English proficiency, a summary of research, project, competition, and internship experience, and representative papers, code repositories, or project reports if available. Suggested subject: “2027 Master's Application – Name – Institution – Research Area.”",
          ],
        },
        {
          title: "Contact",
          paragraphs: [
            "Contact Professor Gang Yan, College of Computer Science and Technology, Jilin University: gyan8@jlu.edu.cn; alternative email: gangyan58@gmail.com.",
          ],
        },
      ],
    },
    resources: [
      {
        label: { zh: "导师官方主页", en: "Official faculty profile" },
        url: "https://ccst.jlu.edu.cn/info/1367/20676.htm",
      },
    ],
  },
  {
    meta: { zh: "2026-07-22 · 学术交流", en: "Jul 22, 2026 · Research Exchange" },
    title: {
      zh: "从WAIC出发，走向更深的合作",
      en: "From WAIC to New Research Collaborations",
    },
    text: {
      zh: "实验室博士生赴上海参加 WAIC，并与华东师范大学、上海交通大学团队围绕医学、药物、金融与安全智能体开展交流。",
      en: "NODI Lab doctoral students attended WAIC in Shanghai and met with teams from East China Normal University and Shanghai Jiao Tong University to discuss medical and financial agents, AI-assisted drug discovery, and agent security.",
    },
    detail: {
      zh: [
        {
          title: "在 WAIC 现场观察真实落地问题",
          paragraphs: [
            "NODI 实验室组织在读博士生赴上海参加世界人工智能大会（WAIC），重点关注大模型、智能体、科学智能、医疗人工智能、金融科技和安全治理的发展。此次参会把关注点放在人工智能系统如何进入复杂场景并稳定运行，以及实验性能能否转化为实际价值。",
            "在 AI 辅助药物设计中，团队关注分子表征、候选分子生成、性质预测和药物靶点分析从算法输出走向生物学、药学与实验验证的完整链条；在医学智能体、金融智能体和智能体安全方面，关注专业知识调用、复杂任务规划、外部工具使用、过程可追溯、结果可验证和行为边界。",
          ],
        },
        {
          title: "与华东师大、上海交大团队交流",
          paragraphs: [
            "实验室与华东师范大学相关团队介绍了各自研究基础，并围绕 AI 辅助药物设计、医学智能体、金融智能体与智能体安全讨论潜在互补方向，包括计算方法如何结合领域知识、智能体如何在专业场景中可靠决策，以及安全评价如何贯穿训练、执行与输出全过程。目前交流处于前期沟通阶段，后续仍需明确科学问题、研究条件、任务分工和验证方式。",
            "与上海交通大学相关团队的讨论建立在已开展课题的基础上，重点交流现有进展、后续技术路线和协同方式，目标是通过更系统的实验与评价继续验证研究假设。",
          ],
        },
        {
          title: "后续安排",
          paragraphs: [
            "实验室将继续细化与上海交通大学相关团队的研究任务和评价方案，并与华东师范大学相关团队保持沟通，寻找具体且可行的合作切入点，把大会观察与交流想法转化为可推进、可检验的研究工作。",
          ],
        },
      ],
      en: [
        {
          title: "From conference insights to real-world deployment",
          paragraphs: [
            "NODI Lab doctoral students attended the World Artificial Intelligence Conference in Shanghai. They focused on foundation models, AI agents, AI for Science, medical AI, financial technology, and AI safety governance, with particular attention to reliable deployment in complex settings and the translation of experimental gains into practical value.",
            "For AI-assisted drug discovery, the group examined the full pipeline from molecular representation, candidate generation, property prediction, and target analysis to biological, pharmaceutical, and experimental validation. Discussions of medical agents, financial agents, and agent security focused on domain knowledge, task planning, tool use, process traceability, verifiable outputs, and behavioral safeguards.",
          ],
        },
        {
          title: "Research exchanges with ECNU and SJTU",
          paragraphs: [
            "In preliminary discussions with researchers at East China Normal University, the two groups reviewed their current work and explored possible collaborations in AI-assisted drug design, medical agents, financial agents, and agent security. Any joint project will require a clearly defined scientific question, available research resources, agreed responsibilities, and a validation protocol.",
            "Discussions with researchers at Shanghai Jiao Tong University built on existing joint work. The participants reviewed current progress, next-stage technical plans, and ways to coordinate more systematic experiments and evaluation of the underlying hypotheses.",
          ],
        },
        {
          title: "Next steps",
          paragraphs: [
            "The lab will refine research tasks and evaluation plans with the SJTU team while continuing discussions with the ECNU team to identify concrete starting points and turn conference observations into testable research questions.",
          ],
        },
      ],
    },
  },
  {
    meta: { zh: "2026-06-06 · 专家讲座", en: "Jun 6, 2026 · Invited Seminar" },
    title: {
      zh: "【专家讲座-上海交大熊国钧】智能决策进化：From Algorithms & RL to LLM-based Agents",
      en: "Invited Talk | Guojun Xiong: From Algorithms and RL to LLM-Based Agents",
    },
    text: {
      zh: "围绕 Algorithms、强化学习与大模型智能体的发展脉络，介绍在线序列决策、随机优化控制和多智能体强化学习。",
      en: "An invited talk tracing the evolution from classical algorithms and reinforcement learning to LLM-based agents, including online sequential decision-making, stochastic optimization and control, and multi-agent reinforcement learning.",
    },
    detail: {
      zh: [
        {
          title: "活动信息",
          paragraphs: [
            "报告于 2026 年 6 月 16 日 14:00—15:00 在吉林大学中心校区王湘浩楼 A521 举行，由上海交通大学计算机学院熊国钧副教授主讲，燕刚教授主持。活动属于吉林大学计算机学科成立 50 周年系列暨计算机科学技术专家讲座。",
          ],
        },
        {
          title: "报告内容",
          paragraphs: [
            "报告围绕智能决策从经典算法、强化学习到大语言模型智能体的技术演进展开。经典算法以动态规划、整数规划和随机优化为代表，模型清晰且理论成熟，但在大规模真实环境中面临建模与计算瓶颈；强化学习通过智能体与环境交互学习策略，推动无人机、自动驾驶、智慧农业、医疗调度和野生动物保护等应用探索。",
            "大语言模型智能体进一步引入世界知识、推理规划和工具调用能力，使决策系统延伸到任务理解、协同执行与人机交互。报告结合主讲人在强化学习工业部署与 LLM-based Agents 方面的研究，讨论智能决策方法的技术演进和应用前景。",
          ],
        },
        {
          title: "主讲人简介",
          paragraphs: [
            "熊国钧，上海交通大学计算机学院副教授、博士生导师。2024 年博士毕业于纽约州立大学石溪分校，随后在哈佛大学计算机系从事博士后研究；2025 年入选国家级青年人才计划和上海市海外高层次青年人才计划。研究聚焦 AI 智能网络决策与结构化强化学习，包括不确定环境下的在线序列决策、随机优化与控制、网络化系统的分布式优化和多智能体强化学习，并关注公共卫生、社会公益与 AI for Social Good 场景。",
          ],
        },
        {
          title: "主办单位",
          paragraphs: [
            "吉林大学计算机科学与技术学院、软件学院、计算机科学技术研究所、符号计算与知识工程教育部重点实验室、仿真技术教育部重点实验室、网络技术及应用软件教育部工程研究中心、吉林大学国家级计算机实验教学示范中心。",
          ],
        },
      ],
      en: [
        {
          title: "Event information",
          paragraphs: [
            "The talk was held from 14:00 to 15:00 on June 16, 2026, in Room A521 of the Wang Xianghao Building on Jilin University's Central Campus. Associate Professor Guojun Xiong of Shanghai Jiao Tong University's School of Computer Science presented the seminar, hosted by Professor Gang Yan. It formed part of Jilin University's 50th Anniversary Lecture Series in Computer Science.",
          ],
        },
        {
          title: "Talk overview",
          paragraphs: [
            "The talk traced the evolution of intelligent decision-making from classical algorithms through reinforcement learning to large language model agents. Dynamic programming, integer programming, and stochastic optimization provide well-defined models and mature theory but face modeling and computational bottlenecks in large-scale real-world environments. Reinforcement learning learns policies through interaction and has enabled applications in unmanned aerial vehicles, autonomous driving, smart agriculture, medical scheduling, and wildlife conservation.",
            "LLM-based agents add world knowledge, reasoning, planning, and tool use, extending decision systems to task understanding, coordinated execution, and human–machine interaction. Drawing on the speaker's work in industrial reinforcement learning and LLM-based agents, the talk reviewed the technical evolution and application prospects of intelligent decision-making.",
          ],
        },
        {
          title: "Speaker",
          paragraphs: [
            "Guojun Xiong is an associate professor and Ph.D. advisor at Shanghai Jiao Tong University's School of Computer Science. He earned his Ph.D. from Stony Brook University in 2024 and subsequently conducted postdoctoral research at Harvard University. In 2025, he was selected for national and Shanghai programs supporting high-level young scholars with overseas experience. His research covers AI-enabled network decision-making, structured reinforcement learning, stochastic optimization and control, distributed optimization, and multi-agent reinforcement learning, with applications in public health and AI for Social Good.",
          ],
        },
        {
          title: "Organizers",
          paragraphs: [
            "The event was organized by Jilin University's College of Computer Science and Technology, College of Software, Institute of Computer Science and Technology, two Ministry of Education key laboratories, a Ministry of Education engineering research center, and the National Demonstration Center for Experimental Computer Education.",
          ],
        },
      ],
    },
  },
];




const curatedPaperOutcomeItems = [
  {
    year: "2026",
    title: "FedRIDA: Coordinated Participation and Update Control for Time-Efficient Federated Learning",
    venue: "IEEE/ACM IWQoS 2026",
    authors: "Gang Yan, Yujie Jia",
    topic: { zh: "高效联邦学习", en: "Time-efficient federated learning" },
    url: "https://doi.org/10.1109/IWQoS70441.2026.11661126",
  },
  {
    year: "2026",
    title: "See Where You Read: Reading Tracking via Eye Gaze Tracking and Large Language Model",
    venue: "ACM TIOT",
    authors: "Sikai Yang, Gang Yan, Wan Du",
    topic: { zh: "眼动追踪与人机交互", en: "Eye tracking and human-computer interaction" },
    url: "https://doi.org/10.1145/3803853",
  },
  {
    year: "2026",
    title: "When Geometry Becomes Unreliable: Robust Federated Aggregation via Bounded Influence",
    venue: "ACM CIKM 2026",
    authors: {
      zh: "Yitong Ma, Mandi Li, Gang Yan",
      en: "Yitong Ma, Mandi Li, Gang Yan",
    },
    topic: { zh: "鲁棒联邦学习", en: "Robust federated learning" },
  },
  {
    year: "2026",
    title: "Backdoor Poisoning Mitigation for Federated LoRA via Structural Adaptive Control",
    venue: "ACM CIKM 2026",
    authors: "Wenhan Hu, Zhe Wang, Gang Yan",
    topic: { zh: "联邦 LoRA 安全", en: "Federated LoRA security" },
  },
  {
    year: "2026",
    title: "Action-Aligned Frozen Credit: Storing Selected Feedback for Short-Session Contextual Bandits",
    venue: "ACM CIKM 2026",
    authors: "Gang Yan",
    topic: { zh: "上下文老虎机", en: "Contextual bandits" },
  },
  {
    year: "2026",
    title: "Teacher-Space Transfer and Prototype Anchoring for Modality-Heterogeneous Federated Cross-Modal Retrieval",
    venue: "ACM Multimedia 2026",
    authors: "Zhuoqun Zhang, Keqing Fan, Gang Yan",
    topic: { zh: "联邦跨模态检索", en: "Federated cross-modal retrieval" },
  },
  {
    year: "2026",
    title: "Identifiable Gated Residual Personalization for Federated Parameter-Efficient Fine-Tuning",
    venue: "ECCV 2026",
    authors: "Huimin Huang, Wenhan Hu, Gang Yan",
    topic: { zh: "联邦参数高效微调", en: "Federated parameter-efficient fine-tuning" },
    url: "https://github.com/ahuang0324/fedsdg",
  },
  {
    year: "2026",
    title: "Geometry-Aware Update Control for Robust Optimization",
    venue: "ACM KDD 2026",
    authors: "Yitong Ma, Mandi Li, Gang Yan",
    topic: { zh: "鲁棒优化", en: "Robust optimization" },
    url: "https://doi.org/10.1145/3770855.3817684",
  },
  {
    year: "2026",
    title: "ANCHOR: Aligned Non-contextual and Contextual Hybridization with On-condition Calibration for Per-Base Risk Prediction",
    venue: "ACM KDD 2026",
    authors: "Yitong Ma, Zilin Ma, Yujie Jia, Kun Bi, Gang Yan",
    topic: { zh: "DNA 存储与风险预测", en: "DNA storage and risk prediction" },
    url: "https://doi.org/10.1145/3770855.3818839",
  },
  {
    year: "2026",
    title: "Phy-CoSF: Physics-Guided Continuous Spectral Fields Reconstruction and Spectral Super-Resolution for Snapshot Compressive Imaging",
    venue: "ICML 2026",
    authors: "Wudi Chen, Zhiyuan Zha, Xin Yuan, Shigang Wang, Bihan Wen, Jiantao Zhou, Gang Yan, Zipei Fan, Ce Zhu",
    topic: { zh: "高光谱成像与光谱超分辨率", en: "Hyperspectral imaging and spectral super-resolution" },
    url: "https://openreview.net/forum?id=0OpwiqWPQJ",
  },
  {
    year: "2026",
    title: "MAGNet: Multi-Adjacency Graph Network for Spatiotemporal sEMG",
    venue: "EUSIPCO 2026",
    authors: "Yitong Ma, Peilin Liu, Junxian Li, Gang Yan",
    topic: { zh: "表面肌电与时空图学习", en: "Surface EMG and spatiotemporal graph learning" },
    url: "https://eurasip.org/Proceedings/Eusipco/Eusipco2026/pdfs/0001427.pdf",
  },
  {
    year: "2026",
    title: "WPGRec: Wavelet Packet Guided Graph Enhanced Sequential Recommendation",
    venue: "ACM SIGIR 2026",
    authors: "Peilin Liu, Zhiquan Ji, Gang Yan",
    topic: { zh: "序列推荐", en: "Sequential recommendation" },
    url: "https://doi.org/10.1145/3805712.3809907",
  },
  {
    year: "2026",
    title: "Self-Awareness before Action: Mitigating Logical Inertia via Proactive Cognitive Awareness",
    venue: "ACL 2026",
    authors: "Fulong Fan, Peilin Liu, Fengzhe Liu, Shuyan Yang, Gang Yan",
    topic: { zh: "大模型可信推理", en: "Trustworthy LLM reasoning" },
    url: "https://arxiv.org/abs/2604.20413",
  },
  {
    year: "2026",
    title: "MaRS: Memory-Adaptive Routing for Reliable Capacity Expansion and Knowledge Retention",
    venue: "ICLR 2026",
    authors: "Gang Yan",
    topic: { zh: "大模型容量扩展", en: "LLM capacity expansion" },
    url: "https://www.gyan23.com/",
  },
  {
    year: "2025",
    title: "FedRACE: A Hierarchical and Statistical Framework for Robust Federated Learning",
    venue: "NeurIPS 2025",
    authors: "Gang Yan, Sikai Yang, Wan Du",
    topic: { zh: "鲁棒联邦学习", en: "Robust federated learning" },
    url: "https://doi.org/10.52202/085713-2043",
  },
  {
    year: "2025",
    title: "KaRF: Weakly-Supervised Kolmogorov-Arnold Networks-based Radiance Fields for Local Color Editing",
    venue: "NeurIPS 2025",
    authors: "Wudi Chen, Zhiyuan Zha, Shigang Wang, Bihan Wen, Xin Yuan, Jiantao Zhou, Zipei Fan, Gang Yan, Ce Zhu",
    topic: { zh: "辐射场与图像编辑", en: "Radiance fields and image editing" },
    url: "https://doi.org/10.52202/085713-0709",
  },
  {
    year: "2025",
    title: "FedSTEP: Asynchronous and Staleness-Aware Personalization for Efficient Federated Learning",
    venue: "ACM CIKM 2025",
    authors: "Gang Yan, Jian Li, Wan Du",
    topic: { zh: "异步个性化联邦学习", en: "Asynchronous personalized federated learning" },
    url: "https://doi.org/10.1145/3746252.3761166",
  },
  {
    year: "2025",
    title: "FedDiAL: Adaptive Federated Learning with Hierarchical Discriminative Network for Large Pre-trained Models",
    venue: "ACM KDD 2025",
    authors: "Gang Yan, Wan Du",
    topic: { zh: "大模型联邦学习", en: "Federated learning for foundation models" },
    url: "https://doi.org/10.1145/3711896.3736955",
  },
  {
    year: "2025",
    title: "Triply Laplacian Scale Mixture Modeling for Seismic Data Noise Suppression",
    venue: "IEEE TGRS",
    authors: "Sirui Pan, Zhiyuan Zha, Shigang Wang, Yue Li, Zipei Fan, Gang Yan, Binh T. Nguyen, Bihan Wen, Ce Zhu",
    topic: { zh: "地震数据噪声抑制", en: "Seismic data noise suppression" },
    url: "https://doi.org/10.1109/TGRS.2025.3624030",
  },
  {
    year: "2025",
    title: "Joint tensor ring decomposition and unidirectional total variation for seismic data denoising",
    venue: "IEEE TGRS",
    authors: "Sirui Pan, Zhiyuan Zha, Shigang Wang, Bihan Wen, Zipei Fan, Gang Yan, Binh T. Nguyen, Yue Li",
    topic: { zh: "张量分解与地震数据去噪", en: "Tensor decomposition and seismic denoising" },
    url: "https://doi.org/10.1109/TGRS.2025.3621545",
  },
  {
    year: "2024",
    title: "DePRL: Achieving Linear Convergence Speedup in Personalized Decentralized Learning with Shared Representations",
    venue: "AAAI 2024",
    authors: "Guojun Xiong, Gang Yan, Shiqiang Wang, Jian Li",
    topic: { zh: "个性化去中心化学习", en: "Personalized decentralized learning" },
    url: "https://doi.org/10.1609/aaai.v38i14.29543",
  },
  {
    year: "2024",
    title: "Enhancing Model Poisoning Attacks to Byzantine-Robust Federated Learning via Critical Learning Periods",
    venue: "RAID 2024",
    authors: "Gang Yan, Hao Wang, Xu Yuan, Jian Li",
    topic: { zh: "联邦学习模型投毒", en: "Model poisoning in federated learning" },
    url: "https://doi.org/10.1145/3678890.3678915",
  },
  {
    year: "2024",
    title: "FedRoLA: Robust Federated Learning Against Model Poisoning via Layer-based Aggregation",
    venue: "ACM KDD 2024",
    authors: "Gang Yan, Hao Wang, Xu Yuan, Jian Li",
    topic: { zh: "分层鲁棒聚合", en: "Layer-based robust aggregation" },
    url: "https://doi.org/10.1145/3637528.3671906",
  },
  {
    year: "2024",
    title: "Straggler-Resilient Decentralized Learning via Adaptive Asynchronous Updates",
    venue: "ACM MobiHoc 2024",
    authors: {
      zh: "Guojun Xiong*, Gang Yan*（共同第一作者）, Shiqiang Wang, Jian Li",
      en: "Guojun Xiong*, Gang Yan* (co-first authors), Shiqiang Wang, Jian Li",
    },
    topic: { zh: "去中心化异步学习", en: "Decentralized asynchronous learning" },
    url: "https://doi.org/10.1145/3641512.3690036",
  },
  {
    year: "2023",
    title: "Reinforcement Learning for Dynamic Dimensioning of Cloud Caches: A Restless Bandit Approach",
    venue: "IEEE/ACM TON",
    authors: "Guojun Xiong, Shufan Wang, Gang Yan, Jian Li",
    topic: { zh: "云缓存动态容量配置", en: "Dynamic cloud-cache dimensioning" },
    url: "https://doi.org/10.1109/TNET.2023.3235480",
  },
  {
    year: "2023",
    title: "CriticalFL: A Critical Learning Periods Augmented Client Selection Framework for Efficient Federated Learning",
    venue: "ACM KDD 2023",
    authors: "Gang Yan, Hao Wang, Xu Yuan, Jian Li",
    topic: { zh: "高效联邦学习", en: "Efficient federated learning" },
    url: "https://doi.org/10.1145/3580305.3599293",
  },
  {
    year: "2023",
    title: "DeFL: Defending Against Model Poisoning Attacks in Federated Learning via Critical Learning Periods Awareness",
    venue: "AAAI 2023",
    authors: "Gang Yan, Hao Wang, Xu Yuan, Jian Li",
    topic: { zh: "联邦学习安全", en: "Federated learning security" },
    url: "https://doi.org/10.1609/aaai.v37i9.26271",
  },
  {
    year: "2022",
    title: "Reinforcement Learning for Dynamic Dimensioning of Cloud Caches: A Restless Bandit Approach",
    venue: "IEEE INFOCOM 2022",
    authors: "Guojun Xiong, Shufan Wang, Gang Yan, Jian Li",
    topic: { zh: "云缓存与强化学习", en: "Cloud caching and reinforcement learning" },
    url: "https://doi.org/10.1109/INFOCOM48880.2022.9796809",
  },
  {
    year: "2022",
    title: "Towards Latency Awareness for Content Delivery Network Caching",
    venue: "USENIX ATC 2022",
    authors: "Gang Yan, Jian Li",
    topic: { zh: "内容分发网络缓存", en: "Content delivery network caching" },
    url: "https://www.usenix.org/conference/atc22/presentation/yan-gang",
  },
  {
    year: "2022",
    title: "Seizing Critical Learning Periods in Federated Learning",
    venue: "AAAI 2022",
    authors: "Gang Yan, Hao Wang, Jian Li",
    topic: { zh: "联邦学习效率", en: "Federated learning efficiency" },
    url: "https://doi.org/10.1609/aaai.v36i8.20859",
  },
  {
    year: "2021",
    title: "Learning from Optimal Caching for Content Delivery",
    venue: "ACM CoNEXT 2021",
    authors: "Gang Yan, Jian Li, Don Towsley",
    topic: { zh: "学习型内容缓存", en: "Learning-based content caching" },
    url: "https://doi.org/10.1145/3485983.3494855",
  },
  {
    year: "2020",
    title: "RL-Bélády: A Unified Learning Framework for Content Caching",
    venue: "ACM Multimedia 2020",
    authors: "Gang Yan, Jian Li",
    topic: { zh: "强化学习与内容缓存", en: "Reinforcement learning for caching" },
    url: "https://doi.org/10.1145/3394171.3413524",
  },
];

const paperVenuePriorityRules = [
  { pattern: /\b(?:NeurIPS|ICLR|ICML)\b/i, rank: 0 },
  { pattern: /\bKDD\b/i, rank: 10 },
  { pattern: /\bECCV\b/i, rank: 11 },
  { pattern: /ACM Multimedia/i, rank: 13 },
  { pattern: /\bAAAI\b/i, rank: 14 },
  { pattern: /USENIX ATC/i, rank: 15 },
  { pattern: /\bINFOCOM\b/i, rank: 16 },
  { pattern: /IEEE\/ACM Transactions on Networking/i, rank: 18 },
  { pattern: /IEEE Transactions on Geoscience and Remote Sensing/i, rank: 19 },
  { pattern: /\bCIKM\b/i, rank: 20 },
  { pattern: /\bCoNEXT\b/i, rank: 21 },
  { pattern: /\bMobiHoc\b/i, rank: 22 },
  { pattern: /\bRAID\b/i, rank: 23 },
  { pattern: /\bIWQoS\b/i, rank: 30 },
  { pattern: /\bEUSIPCO\b/i, rank: 31 },
  { pattern: /\bACL\b/i, rank: 32 },
  { pattern: /\bSIGIR\b/i, rank: 33 },
  { pattern: /\bICTIR\b/i, rank: 34 },
  { pattern: /ACM Transactions on Internet of Things/i, rank: 40 },
  { pattern: /\barXiv\b/i, rank: 99 },
];

function getPaperSortText(value) {
  if (typeof value === "string") return value;
  return value?.en ?? value?.zh ?? "";
}

function getGangYanAuthorshipPriority(item) {
  const authors = getPaperSortText(item.authors);
  const normalizedAuthors = authors
    .replace(/\s*\([^)]*\)/g, "")
    .replace(/\*/g, "")
    .trim();
  const isFirstAuthor = /^Gang Yan(?:\s|,|;|$)/i.test(normalizedAuthors);
  const isLastAuthor = /(?:^|[,;]\s*)Gang Yan$/i.test(normalizedAuthors);
  const isCoFirstAuthor = /Gang Yan\*?\s*\(co-first authors\)/i.test(authors);
  const isVerifiedCorrespondingAuthor = /Gang Yan\s*\(corresponding author\)\s*$/i.test(authors);

  if (isFirstAuthor || isLastAuthor || isCoFirstAuthor || isVerifiedCorrespondingAuthor) return 0;
  return /\bGang Yan\b/i.test(authors) ? 1 : 2;
}

function getPaperVenuePriority(item) {
  const venue = getPaperSortText(item.venue);
  return paperVenuePriorityRules.find(({ pattern }) => pattern.test(venue))?.rank ?? 50;
}

function getPaperPublicationTypePriority(item) {
  const venue = getPaperSortText(item.venue);
  if (/\bTransactions?\b/i.test(venue)) return 1;
  return 0;
}

function comparePaperOutcomes(a, b) {
  const yearDifference = Number.parseInt(b.year, 10) - Number.parseInt(a.year, 10);
  if (yearDifference) return yearDifference;

  const publicationTypeDifference = getPaperPublicationTypePriority(a) - getPaperPublicationTypePriority(b);
  if (publicationTypeDifference) return publicationTypeDifference;

  const authorshipDifference = getGangYanAuthorshipPriority(a) - getGangYanAuthorshipPriority(b);
  if (authorshipDifference) return authorshipDifference;

  return getPaperVenuePriority(a) - getPaperVenuePriority(b);
}

const categoryOrder = ["academic", "daily"];
const galleryGrid = document.querySelector("#gallery-grid");
const galleryFilters = document.querySelector("#gallery-filters");
const galleryMore = document.querySelector("#gallery-more");
const galleryToolbarNote = document.querySelector("#gallery-toolbar-note");
const previewMedia = document.querySelector("#gallery-preview-media");
const previewCategory = document.querySelector("#gallery-preview-category");
const previewTitle = document.querySelector("#gallery-preview-title");
const previewDescription = document.querySelector("#gallery-preview-description");

const teamDirectory = document.querySelector("#team-directory");

const publicationsList = document.querySelector("#publications-list");
const publicationsMore = document.querySelector("#publications-more");
const newsList = document.querySelector("#news-list");
const newsMore = document.querySelector("#news-more");

const papersList = document.querySelector("#papers-list");
const papersMore = document.querySelector("#papers-more");

const langZhButton = document.querySelector("#lang-zh");
const langEnButton = document.querySelector("#lang-en");

const GALLERY_PAGE_SIZE = galleryItems.length;
const OUTCOME_PREVIEW_COUNT = 13;
const galleryState = {
  categoryKey: "all",
  visibleCount: GALLERY_PAGE_SIZE,
  activeId: galleryItems[0].id,
};
const updateState = {
  publications: 3,
  news: 3,
};
const updateItemExpandedState = {};
const updatePageSize = {
  publications: 3,
  news: 3,
};
const teamExpandedState = Object.fromEntries(
  teamGroups.map((group) => [group.key, false]),
);
const outcomeExpandedState = {
  papers: false,
};
let currentLanguage = getInitialLanguage();

function getInitialLanguage() {
  try {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored === "zh" || stored === "en") {
      return stored;
    }
  } catch {
    // ignore storage failures
  }

  return navigator.language && navigator.language.toLowerCase().startsWith("zh")
    ? "zh"
    : "en";
}

function getText(value) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[currentLanguage] || value.zh || value.en || "";
  }

  return value ?? "";
}

function getTranslation(path) {
  return path.split(".").reduce((value, key) => value?.[key], translations[currentLanguage]);
}

function interpolate(template, values) {
  return template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
}

function applyStaticTranslations() {
  document.title = getTranslation("meta.title");
  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", getTranslation("meta.description"));
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const value = getTranslation(key);

    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.getAttribute("data-i18n-aria-label");
    const value = getTranslation(key);

    if (typeof value === "string") {
      element.setAttribute("aria-label", value);
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.getAttribute("data-i18n-alt");
    const value = getTranslation(key);

    if (typeof value === "string") {
      element.setAttribute("alt", value);
    }
  });
}

function updateLanguageControls() {
  langZhButton.classList.toggle("is-active", currentLanguage === "zh");
  langEnButton.classList.toggle("is-active", currentLanguage === "en");
  langZhButton.setAttribute("aria-pressed", currentLanguage === "zh" ? "true" : "false");
  langEnButton.setAttribute("aria-pressed", currentLanguage === "en" ? "true" : "false");
}

function setLanguage(language, persist = true) {
  currentLanguage = language;

  if (persist) {
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // ignore storage failures
    }
  }

  applyStaticTranslations();
  updateLanguageControls();
  renderTeamDirectory();
  renderUpdates();
  renderGalleryFilters();
  renderGallery();
  renderOutcomes();
}

function getGalleryCategoryLabel(categoryKey) {
  return getTranslation(`gallery.categories.${categoryKey}`);
}

function getGalleryMeta(item) {
  return [getText(item.month), getGalleryCategoryLabel(item.categoryKey)]
    .filter(Boolean)
    .join(" · ");
}

function getGalleryImage(item, size = "large") {
  if (size === "thumb" && item.thumbnail) {
    return item.thumbnail;
  }

  if (item.image) {
    return item.image;
  }

  return createPhotoPlaceholder(item, size);
}

function createPhotoPlaceholder(item, size = "large") {
  const [accentA, accentB, accentC] = item.accent;
  const width = size === "thumb" ? 480 : 1280;
  const height = size === "thumb" ? 380 : 900;
  const cardRadius = size === "thumb" ? 22 : 30;
  const panelRadius = size === "thumb" ? 18 : 26;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
      <defs>
        <linearGradient id="bg" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="${accentA}" />
          <stop offset="100%" stop-color="${accentC}" />
        </linearGradient>
        <linearGradient id="soft" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="${accentB}" stop-opacity="0.95" />
          <stop offset="100%" stop-color="#f4f9ff" stop-opacity="0.72" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" rx="${cardRadius}" fill="url(#bg)" />
      <circle cx="${width * 0.88}" cy="${height * 0.16}" r="${height * 0.12}" fill="#ffffff" fill-opacity="0.08" />
      <circle cx="${width * 0.08}" cy="${height * 0.14}" r="${height * 0.06}" fill="#ffffff" fill-opacity="0.08" />
      <rect x="${width * 0.09}" y="${height * 0.14}" rx="${panelRadius}" ry="${panelRadius}" width="${width * 0.47}" height="${height * 0.38}" fill="url(#soft)" />
      <rect x="${width * 0.6}" y="${height * 0.22}" rx="${panelRadius}" ry="${panelRadius}" width="${width * 0.2}" height="${height * 0.42}" fill="#f9fcff" fill-opacity="0.72" />
      <rect x="${width * 0.15}" y="${height * 0.66}" rx="${panelRadius}" ry="${panelRadius}" width="${width * 0.52}" height="${height * 0.16}" fill="#f9fcff" fill-opacity="0.12" />
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getFilteredGalleryItems() {
  if (galleryState.categoryKey === "all") {
    return galleryItems;
  }

  return galleryItems.filter((item) => item.categoryKey === galleryState.categoryKey);
}

function setGalleryPreview(item) {
  previewMedia.innerHTML = "";
  const wrapper = document.createElement("div");
  wrapper.className = "protected-media protected-media-preview";
  const image = document.createElement("img");
  image.src = getGalleryImage(item, "large");
  image.alt = getText(item.title);
  image.draggable = false;
  image.decoding = "async";
  if (item.objectPosition) {
    image.style.objectPosition = item.objectPosition;
  }
  wrapper.appendChild(image);
  wrapper.insertAdjacentHTML(
    "beforeend",
    `<span class="media-watermark" aria-hidden="true">${getTranslation("guard.watermark")}</span>`,
  );
  previewMedia.appendChild(wrapper);
  previewCategory.textContent = getGalleryMeta(item);
  previewTitle.textContent = getText(item.title);
  previewDescription.textContent = getText(item.description);
}

function renderGalleryFilters() {
  galleryFilters.innerHTML = "";

  const categories = ["all", ...categoryOrder];
  categories.forEach((categoryKey) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-chip";
    button.textContent =
      categoryKey === "all" ? getTranslation("gallery.all") : getGalleryCategoryLabel(categoryKey);

    if (categoryKey === galleryState.categoryKey) {
      button.classList.add("is-active");
    }

    button.addEventListener("click", () => {
      galleryState.categoryKey = categoryKey;
      galleryState.visibleCount = GALLERY_PAGE_SIZE;
      const nextItems = getFilteredGalleryItems();
      galleryState.activeId = nextItems.length ? nextItems[0].id : null;
      renderGalleryFilters();
      renderGallery();
    });

    galleryFilters.appendChild(button);
  });
}

function renderGallery() {
  const filteredItems = getFilteredGalleryItems();
  const visibleItems = filteredItems.slice(0, galleryState.visibleCount);

  if (!filteredItems.some((item) => item.id === galleryState.activeId) && filteredItems.length) {
    galleryState.activeId = filteredItems[0].id;
  }

  galleryGrid.innerHTML = "";
  visibleItems.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "gallery-card";
    if (item.id === galleryState.activeId) {
      button.classList.add("is-active");
    }

    button.innerHTML = `
      <span class="protected-media gallery-card-media">
        <img src="${getGalleryImage(item, "thumb")}" alt="${getText(item.title)}" draggable="false" loading="lazy" decoding="async"${item.objectPosition ? ` style="object-position: ${item.objectPosition}"` : ""} />
        <span class="media-watermark" aria-hidden="true">${getTranslation("guard.watermark")}</span>
      </span>
      <div class="gallery-card-copy">
        <strong>${getText(item.title)}</strong>
        <span>${getGalleryMeta(item)}</span>
      </div>
    `;

    button.addEventListener("click", () => {
      galleryState.activeId = item.id;
      setGalleryPreview(item);
      renderGallery();
    });

    galleryGrid.appendChild(button);
  });

  if (filteredItems.length) {
    const activeItem =
      filteredItems.find((item) => item.id === galleryState.activeId) || filteredItems[0];
    galleryState.activeId = activeItem.id;
    setGalleryPreview(activeItem);
  }

  galleryToolbarNote.textContent = interpolate(getTranslation("gallery.showing"), {
    visible: visibleItems.length,
    total: filteredItems.length,
  });
  galleryMore.hidden = filteredItems.length <= visibleItems.length;
}

function getAvatarText(name) {
  return name.replace(/\s+/g, "").slice(0, 2);
}

function createMemberAvatar(member) {
  if (member.image) {
    const wrapper = document.createElement("span");
    wrapper.className = "protected-media team-member-avatar-protected";

    const image = document.createElement("img");
    image.className = "team-member-avatar-image";
    image.src = member.image;
    image.alt = getText(member.name);
    image.draggable = false;
    image.loading = "lazy";
    image.decoding = "async";
    if (member.imagePosition) {
      image.style.objectPosition = member.imagePosition;
    }

    wrapper.appendChild(image);
    return wrapper;
  }

  const avatar = document.createElement("div");
  avatar.className = "team-member-avatar";
  avatar.textContent = getAvatarText(getText(member.name));
  return avatar;
}

function renderTeamDirectory() {
  teamDirectory.innerHTML = "";

  teamGroups.forEach((group) => {
    const expanded = teamExpandedState[group.key];
    const visibleMembers = expanded
      ? group.members
      : group.members.slice(0, group.previewCount);

    const section = document.createElement("section");
    section.className = "team-group";

    const header = document.createElement("div");
    header.className = "team-group-header";
    header.innerHTML = `
      <div>
        <h3>${getText(group.label)}</h3>
      </div>
      <span class="team-group-meta">${group.members.length} ${getTranslation("team.stats.count")}</span>
    `;

    const grid = document.createElement("div");
    grid.className = "team-member-grid";

    visibleMembers.forEach((member) => {
      const card = document.createElement("article");
      card.className = "team-member-card";
      card.appendChild(createMemberAvatar(member));

      const copy = document.createElement("div");
      copy.className = "team-member-copy";

      const heading = document.createElement("h4");
      const homepage = getText(member.homepage);
      if (homepage) {
        const link = document.createElement("a");
        link.className = "team-member-name-link";
        link.href = homepage;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = getText(member.name);
        heading.appendChild(link);
      } else {
        heading.textContent = getText(member.name);
      }

      copy.appendChild(heading);

      const alternateName =
        currentLanguage === "zh" ? member.name.en : member.name.zh;
      if (alternateName && alternateName !== getText(member.name)) {
        const secondary = document.createElement("p");
        secondary.className = "team-member-subline";
        secondary.textContent = alternateName;
        copy.appendChild(secondary);
      }

      const focus = getText(member.focus);
      if (focus && focus !== pendingFocus[currentLanguage]) {
        const focusLine = document.createElement("p");
        focusLine.className = "team-member-focus";
        focusLine.textContent = focus;
        copy.appendChild(focusLine);
      }

      card.appendChild(copy);
      grid.appendChild(card);
    });

    section.appendChild(header);
    section.appendChild(grid);

    if (group.members.length > group.previewCount) {
      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "button button-secondary team-group-toggle";
      toggle.textContent = expanded
        ? interpolate(getTranslation("team.toggle.collapse"), { label: getText(group.label) })
        : interpolate(getTranslation("team.toggle.showAll"), {
            count: group.members.length,
            label: getText(group.label),
          });
      toggle.addEventListener("click", () => {
        teamExpandedState[group.key] = !teamExpandedState[group.key];
        renderTeamDirectory();
      });
      section.appendChild(toggle);
    }

    teamDirectory.appendChild(section);
  });
}

function renderUpdateColumn(container, button, items, key) {
  const visibleItems = items.slice(0, updateState[key]);
  container.innerHTML = "";

  visibleItems.forEach((item, index) => {
    const itemKey = `${key}-${index}`;
    const detailSections = getUpdateDetailSections(item);
    const expanded = Boolean(updateItemExpandedState[itemKey]);
    const hasMore = detailSections.length > 0;
    const article = document.createElement("article");
    article.className = "update-item";
    if (item.pinned) {
      article.classList.add("is-pinned");
    }
    if (expanded) {
      article.classList.add("is-expanded");
    }
    const metaRow = document.createElement("div");
    metaRow.className = "update-item-meta-row";

    if (item.pinned) {
      const pin = document.createElement("span");
      pin.className = "update-item-pin";
      pin.textContent = getTranslation("updates.item.pinned");
      metaRow.appendChild(pin);
    }

    const meta = document.createElement("span");
    meta.className = "update-item-meta";
    meta.textContent = getText(item.meta);
    metaRow.appendChild(meta);

    const title = document.createElement("h4");
    title.className = "update-item-title";
    if (item.url) {
      const link = document.createElement("a");
      link.href = item.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = getText(item.title);
      title.appendChild(link);
    } else {
      title.textContent = getText(item.title);
    }

    const description = document.createElement("p");
    description.className = "update-item-text";
    description.textContent = getUpdateSummaryText(item);

    article.append(metaRow, title, description);

    if (expanded && hasMore) {
      const detail = document.createElement("div");
      detail.className = "update-item-detail";

      detailSections.forEach((section) => {
        const sectionElement = document.createElement("section");
        sectionElement.className = "update-detail-section";

        if (section.title) {
          const heading = document.createElement("h5");
          heading.textContent = section.title;
          sectionElement.appendChild(heading);
        }

        (section.paragraphs ?? []).forEach((paragraph) => {
          const copy = document.createElement("p");
          copy.textContent = paragraph;
          sectionElement.appendChild(copy);
        });

        detail.appendChild(sectionElement);
      });

      article.appendChild(detail);
    }

    const actions = document.createElement("div");
    actions.className = "update-item-actions";

    if (hasMore) {
      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "update-item-toggle";
      toggle.textContent = expanded
        ? getTranslation("updates.item.less")
        : getTranslation("updates.item.more");
      toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
      toggle.addEventListener("click", () => {
        updateItemExpandedState[itemKey] = !expanded;
        renderUpdates();
      });
      actions.appendChild(toggle);
    }

    if (item.url) {
      const source = document.createElement("a");
      source.className = "update-item-source";
      source.href = item.url;
      source.target = "_blank";
      source.rel = "noopener noreferrer";
      source.textContent = `${getText(item.urlLabel ?? { zh: "查看来源", en: "View source" })} ↗`;
      actions.appendChild(source);
    }

    (item.resources ?? []).forEach((resource) => {
      const link = document.createElement("a");
      link.className = "update-item-source";
      link.href = resource.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = `${getText(resource.label)} ↗`;
      actions.appendChild(link);
    });

    if (actions.childElementCount) article.appendChild(actions);

    container.appendChild(article);
  });

  button.hidden = visibleItems.length >= items.length;
}

function renderUpdates() {
  renderUpdateColumn(publicationsList, publicationsMore, publications, "publications");
  renderUpdateColumn(newsList, newsMore, featuredNewsItems, "news");
}

function getUpdateSummaryText(item) {
  return getText(item.summary ?? item.text);
}

function getUpdateDetailSections(item) {
  const sections = item.detail?.[currentLanguage] ?? item.detail?.zh ?? [];
  return Array.isArray(sections) ? sections : [];
}

function renderOutcomes() {
  papersList.innerHTML = "";

  const orderedPapers = [...curatedPaperOutcomeItems].sort(comparePaperOutcomes);
  const visiblePapers = outcomeExpandedState.papers
    ? orderedPapers
    : orderedPapers.slice(0, OUTCOME_PREVIEW_COUNT);

  const papersByYear = new Map();
  visiblePapers.forEach((item) => {
    if (!papersByYear.has(item.year)) papersByYear.set(item.year, []);
    papersByYear.get(item.year).push(item);
  });

  papersByYear.forEach((items, year) => {
    const group = document.createElement("section");
    group.className = "paper-year-group";

    const yearHeading = document.createElement("h4");
    yearHeading.className = "paper-year";
    yearHeading.textContent = year;
    group.appendChild(yearHeading);

    const yearList = document.createElement("div");
    yearList.className = "paper-year-list";

    items.forEach((item) => {
      const article = document.createElement("article");
      article.className = "paper-item";

      const meta = document.createElement("div");
      meta.className = "paper-meta";
      const venue = document.createElement("p");
      venue.className = "paper-venue";
      venue.textContent = getText(item.venue);
      const topic = document.createElement("span");
      topic.className = "paper-topic";
      topic.textContent = getText(item.topic);
      meta.append(venue, topic);

      const copy = document.createElement("div");
      copy.className = "paper-copy";
      const title = document.createElement("h5");
      title.className = "paper-title";
      if (item.url) {
        const link = document.createElement("a");
        link.href = item.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = getText(item.title);
        link.setAttribute("aria-label", `${getText(item.title)}${getTranslation("outcomes.papers.newTab")}`);
        title.appendChild(link);
      } else {
        title.textContent = getText(item.title);
      }
      const authors = document.createElement("p");
      authors.className = "paper-authors";
      authors.textContent = getText(item.authors);
      copy.append(title, authors);

      article.append(meta, copy);
      yearList.appendChild(article);
    });

    group.appendChild(yearList);
    papersList.appendChild(group);
  });

  papersMore.hidden = curatedPaperOutcomeItems.length <= OUTCOME_PREVIEW_COUNT;
  papersMore.textContent = outcomeExpandedState.papers
    ? getTranslation("outcomes.collapse")
    : getTranslation("outcomes.more");
}

function isEditableTarget(target) {
  return Boolean(
    target instanceof HTMLElement &&
      (target.closest("input, textarea, select") || target.isContentEditable),
  );
}

function installLightProtection() {
  document.querySelectorAll(".protected-media img").forEach((image) => {
    image.setAttribute("draggable", "false");
  });

  const isProtectedMediaTarget = (target) =>
    target instanceof Element && Boolean(target.closest(".protected-media"));

  document.addEventListener("contextmenu", (event) => {
    if (isProtectedMediaTarget(event.target)) event.preventDefault();
  });

  document.addEventListener("dragstart", (event) => {
    if (isProtectedMediaTarget(event.target)) event.preventDefault();
  });

  document.addEventListener("selectstart", (event) => {
    if (isProtectedMediaTarget(event.target)) event.preventDefault();
  });

  const showPrintNotice = () => {
    window.alert(getTranslation("guard.printNotice"));
  };

  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "p") {
      event.preventDefault();
      showPrintNotice();
    }
  });

  window.print = showPrintNotice;
}

async function installGoatCounterDisplay() {
  const block = document.querySelector("#goatcounter-display");
  const value = document.querySelector("#goatcounter-value");

  if (!block || !value) return;

  try {
    const response = await fetch("https://gyan.goatcounter.com/counter/TOTAL.json", {
      headers: { Accept: "application/json" },
    });

    if (!response.ok) throw new Error(`GoatCounter returned ${response.status}`);

    const data = await response.json();
    if (typeof data.count !== "string" && typeof data.count !== "number") {
      throw new Error("GoatCounter response does not contain a count");
    }

    value.textContent = String(data.count);
    block.classList.remove("is-unavailable");
  } catch {
    value.textContent = "—";
    block.classList.add("is-unavailable");
  }
}

galleryMore.addEventListener("click", () => {
  galleryState.visibleCount += GALLERY_PAGE_SIZE;
  renderGallery();
});

publicationsMore.addEventListener("click", () => {
  updateState.publications += updatePageSize.publications;
  renderUpdates();
});

newsMore.addEventListener("click", () => {
  updateState.news += updatePageSize.news;
  renderUpdates();
});

papersMore.addEventListener("click", () => {
  outcomeExpandedState.papers = !outcomeExpandedState.papers;
  renderOutcomes();
});

langZhButton.addEventListener("click", () => setLanguage("zh"));
langEnButton.addEventListener("click", () => setLanguage("en"));

installLightProtection();
installGoatCounterDisplay();
setLanguage(currentLanguage, false);

// Keep content visible without JavaScript; motion is progressive enhancement.
function installPageMotion() {
  const header = document.querySelector(".topbar");
  const links = [...document.querySelectorAll('.nav a[href^="#"]')];
  const sections = links.map((link) => document.querySelector(link.getAttribute("href")));
  let framePending = false;

  function updateReadingPosition() {
    framePending = false;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
    header.style.setProperty("--reading-progress", progress);
    header.classList.toggle("is-scrolled", window.scrollY > 16);
    let activeIndex = -1;
    const headerHeight = header.getBoundingClientRect().height;
    document.documentElement.style.setProperty("--header-offset", `${Math.ceil(headerHeight + 24)}px`);
    const offset = headerHeight + 48;
    sections.forEach((section, index) => {
      if (section && section.getBoundingClientRect().top <= offset) activeIndex = index;
    });
    if (progress >= 0.995 && maxScroll > 0) activeIndex = sections.length - 1;
    links.forEach((link, index) => {
      if (index === activeIndex) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }

  function scheduleUpdate() {
    if (!framePending) {
      framePending = true;
      window.requestAnimationFrame(updateReadingPosition);
    }
  }

  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  if ("ResizeObserver" in window) new ResizeObserver(scheduleUpdate).observe(document.body);
  updateReadingPosition();

  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (!("IntersectionObserver" in window) || motionPreference.matches) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      if (!motionPreference.matches) entry.target.classList.add("is-entering");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08 });
  document.querySelectorAll(".section-heading, .pillar-card, .updates-card, .team-card-featured, .gallery-preview, .outcomes-panel, .contact-card")
    .forEach((element) => observer.observe(element));
  document.addEventListener("animationend", (event) => {
    if (event.animationName === "enter-content") event.target.classList.remove("is-entering");
  });
}

installPageMotion();
