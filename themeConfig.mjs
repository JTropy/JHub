// 主题配置
export const themeConfig = {
  // 站点信息
  siteMeta: {
    // 站点标题
    title: "京华",
    // 站点描述
    description: "凡此过往，皆为序章。",
    // 站点logo
    logo: "/images/logo/logo.svg",
    // 站点地址
    site: "https://knotens.org",
    // 语言
    lang: "zh-CN",
    // 作者
    author: {
      name: "京华",
      cover: "/images/logo/logo.svg",
      email: "X@knotens.org",
      link: "https://github.com/JTropy",
    },
  },
  // 备案信息
  icp: "",
  // 萌备案信息（申请通过后填写 number）
  moeIcp: {
    number: "20269494",
  },
  // 建站日期
  since: "2026-03-19",
  // 每页文章数据
  postSize: 8,
  // inject
  inject: {
    // 头部
    // https://vitepress.dev/zh/reference/site-config#head
    header: [
      // favicon
      ["link", { rel: "icon", href: "/images/logo/logo.svg" }],
      // RSS
      [
        "link",
        {
          rel: "alternate",
          type: "application/rss+xml",
          title: "RSS",
          href: "https://knotens.org/rss.xml",
        },
      ],
      // 预载 CDN
      [
        "link",
        {
          crossorigin: "",
          rel: "preconnect",
          href: "https://s1.hdslb.com",
        },
      ],
      [
        "link",
        {
          crossorigin: "",
          rel: "preconnect",
          href: "https://mirrors.sustech.edu.cn",
        },
      ],
      // HarmonyOS font
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://s1.hdslb.com/bfs/static/jinkela/long/font/regular.css",
        },
      ],
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/lxgw-wenkai-screen-webfont/1.7.0/style.css",
        },
      ],
      // iconfont
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://cdn2.codesign.qq.com/icons/g5ZpEgx3z4VO6j2/latest/iconfont.css",
        },
      ],
      // Embed code
      ["link", { rel: "preconnect", href: "https://use.sevencdn.com" }],
      ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
      [
        "link",
        {
          crossorigin: "anonymous",
          href: "https://use.sevencdn.com/css2?family=Fira+Code:wght@300..700&display=swap",
          rel: "stylesheet",
        },
      ],
      // 预载 DocSearch
      [
        "link",
        {
          href: "https://X5EBEZB53I-dsn.algolia.net",
          rel: "preconnect",
          crossorigin: "",
        },
      ],
    ],
  },
  // 导航栏菜单
  nav: [
    {
      text: "文库",
      items: [
        { text: "文章列表", link: "/pages/archives", icon: "article" },
        { text: "全部分类", link: "/pages/categories", icon: "folder" },
        { text: "全部标签", link: "/pages/tags", icon: "hashtag" },
      ],
    },
    {
      text: "专栏",
      items: [
        { text: "技术分享", link: "/pages/categories/技术分享", icon: "technical" },
        { text: "我的项目", link: "/pages/project", icon: "code" },
      ],
    },
    {
      text: "友链",
      items: [
        { text: "友情链接", link: "/pages/link", icon: "people" },
      ],
    },
    {
      text: "我的",
      items: [
        { text: "关于本站", link: "/pages/about", icon: "contacts" },
      ],
    },
  ],
  // 导航栏菜单 - 左侧
  navMore: [
    {
      name: "博客",
      list: [
        {
          icon: "/images/logo/logo.webp",
          name: "主站",
          url: "/",
        },
        {
          icon: "/images/logo/logo.webp",
          name: "博客镜像站",
          url: "https://knotens.org/",
        },
      ],
    },
    // {
    //   name: "服务",
    //   list: [
    //     {
    //       icon: "https://pic.efefee.cn/uploads/2024/04/08/6613465358077.png",
    //       name: "起始页",
    //       url: "https://nav.imsyy.top/",
    //     },
    //     {
    //       icon: "https://pic.efefee.cn/uploads/2024/04/08/661346d418ad7.png",
    //       name: "今日热榜",
    //       url: "https://hot.imsyy.top/",
    //     },
    //     {
    //       icon: "https://pic.efefee.cn/uploads/2024/04/08/66134722586fa.png",
    //       name: "站点监测",
    //       url: "https://status.imsyy.top/",
    //     },
    //   ],
    // },
    // {
    //   name: "项目",
    //   list: [
    //     {
    //       icon: "/images/logo/logo.webp",
    //       name: "Curve",
    //       url: "https://github.com/imsyy/vitepress-theme-curve",
    //     },
    //     {
    //       icon: "https://pic.efefee.cn/uploads/2024/04/07/66124f5fc63c8.png",
    //       name: "SPlayer",
    //       url: "https://github.com/imsyy/SPlayer",
    //     },
    //     {
    //       icon: "https://pic.efefee.cn/uploads/2024/04/08/6613465358077.png",
    //       name: "Snavigation",
    //       url: "https://github.com/imsyy/SPlayer",
    //     },
    //     {
    //       icon: "/images/logo/logo.webp",
    //       name: "Home",
    //       url: "https://github.com/imsyy/home",
    //     },
    //     {
    //       icon: "https://pic.efefee.cn/uploads/2024/04/08/661346d418ad7.png",
    //       name: "DailyHotApi",
    //       url: "https://github.com/imsyy/DailyHotApi",
    //     },
    //     {
    //       icon: "https://pic.efefee.cn/uploads/2024/04/08/66134722586fa.png",
    //       name: "site-status",
    //       url: "https://github.com/imsyy/site-status",
    //     },
    //   ],
    // },
  ],
  // 封面配置
  cover: {
    // 是否开启双栏布局
    twoColumns: false,
    // 是否开启封面显示
    showCover: {
      // 是否开启封面显示
      enable: true,
      // 封面布局方式: left | right | both
      coverLayout: 'both',
    }
  },
  // 页脚信息
  footer: {
    // Not By AI 徽章
    notByAi: {
      enable: true,
      href: "https://notbyai.fyi/hi/not-by-ai",
      img: "/images/badges/written-by-human-not-by-ai-white.svg",
      alt: "Written By Human, Not By AI",
    },
    // 社交链接（请确保为偶数个）
    social: [
      {
        icon: "email",
        link: "X@knotens.org",
      },
      {
        icon: "github",
        link: "https://github.com/JTropy",
      },
      {
        icon: "bilibili",
        link: "https://space.bilibili.com/3691006933338814",
      },
      {
        icon: "qq",
        link: "https://res.abeim.cn/api/qq/?qq=3234557749",
      },
    ],
    // sitemap
    sitemap: [
      {
        text: "博客",
        items: [
          { text: "近期文章", link: "/" },
          { text: "全部分类", link: "/pages/categories" },
          { text: "全部标签", link: "/pages/tags" },
          { text: "文章归档", link: "/pages/archives", newTab: true },
        ],
      },

      {
        text: "专栏",
        items: [
          { text: "技术分享", link: "/pages/categories/技术分享" },
          { text: "我的项目", link: "/pages/project" },
        ],
      },
      {
        text: "项目",
        items: [
          { text: "Hexagon", link: "https://github.com/JTropy/Hexagon", newTab: true },
        ],
      },
      {
        text: "页面",
        items: [
          { text: "关于本站", link: "/pages/about" },
          { text: "隐私政策", link: "/pages/privacy" },
          { text: "版权协议", link: "/pages/cc" },
        ],
      },

    ],
  },
  // 评论
  comment: {
    enable: false,
    // 评论系统选择
    // artalk / twikoo
    type: "artalk",
    // artalk
    // https://artalk.js.org/
    artalk: {
      site: "",
      server: "",
    },
    // twikoo
    // https://twikoo.js.org/
    twikoo: {
      // 必填，若不想使用 CDN，可以使用 pnpm add twikoo 安装并引入
      js: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/twikoo/1.6.39/twikoo.all.min.js",
      envId: "",
      // 环境地域，默认为 ap-shanghai，腾讯云环境填 ap-shanghai 或 ap-guangzhou；Vercel 环境不填
      region: "ap-shanghai",
      lang: "zh-CN",
    },
  },
  // 侧边栏
  aside: {
    // 站点简介
    hello: {
      enable: true,
      text: "个人文章存档，内容不限：<br><strong>技术</strong>是饭碗，<br><strong>人文</strong>是爱好，<br><strong>政治</strong>是忍不住。",
    },
    // 目录
    toc: {
      enable: true,
    },
    // 标签
    tags: {
      enable: true,
    },
    // 倒计时
    countDown: {
      enable: true,
      // 倒计时日期
      data: {
        name: "新年",
        date: "2027-01-01",
      },
    },
    // 站点数据
    siteData: {
      enable: true,
    },
  },
  // 友链
  friends: {
    // 友链朋友圈
    circleOfFriends: "",
    // 动态友链
    dynamicLink: {
      server: "",
      app_token: "",
      table_id: "",
    },
  },
  // 音乐播放器
  // https://github.com/imsyy/Meting-API
  music: {
    enable: false,
    // url
    url: "https://api-meting.example.com",
    // id
    id: 9379831714,
    // netease / tencent / kugou
    server: "netease",
    // playlist / album / song
    type: "playlist",
  },
  // 搜索
  // https://www.algolia.com/
  search: {
    enable: false,
    appId: "",
    apiKey: "",
  },
  // 打赏
  rewardData: {
    enable: false,
    // 微信二维码
    wechat: "http://img.knotens.org/i/2026/05/11/6a01235e7cf78.jpg",
    // 支付宝二维码
    alipay: "http://img.knotens.org/i/2026/05/11/6a01235e7cf78.jpg",
  },
  // 图片灯箱
  fancybox: {
    enable: true,
    js: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/fancyapps-ui/5.0.36/fancybox/fancybox.umd.min.js",
    css: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/fancyapps-ui/5.0.36/fancybox/fancybox.min.css",
  },
  // 外链中转
  jumpRedirect: {
    enable: true,
    // 排除类名
    exclude: [
      "cf-friends-link",
      "upyun",
      "icp",
      "author",
      "rss",
      "cc",
      "power",
      "social-link",
      "link-text",
      "travellings",
      "post-link",
      "report",
      "more-link",
      "skills-item",
      "right-menu-link",
      "link-card",
      "not-by-ai",
    ],
  },
  // 站点统计
  tongji: {
    // 51la 统计 ID，获取地址：https://www.51.la/
    // 登录后在“应用列表”找到对应站点，点击“引用设置” -> “数据引用” -> “数据挂件”中获取类似 "Kxxxx" 的 ID
    "51la": "",
  },
};
