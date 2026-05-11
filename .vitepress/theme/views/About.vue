<template>
  <div class="about">
    <h1 class="title">关于本站</h1>
    <div class="about-content" style="grid-template-columns: 3fr 2fr">
      <!-- 介绍 -->
      <div class="about-item hello">
        <span class="text1">来了就坐，不必客气。</span>
        <span class="text2 title2">我是 京太</span>
        <span class="text3">写代码，也写人间观察笔记。</span>
      </div>
      <!-- 追求 -->
      <div class="about-item pursuit">
        <span class="tip">追求</span>
        <span class="title2">在秩序中</span>
        <span class="title2">寻找自由，</span>
        <span class="title2">在代码里安放灵魂</span>
      </div>
    </div>
    <div class="about-content" style="grid-template-columns: 2fr 3fr">
      <!-- 技能 -->
      <div class="about-item skills">
        <span class="tip">技能</span>
        <span class="title2">工具是手的延伸</span>
        <div class="skills-list">
          <a
            v-for="(item, index) in skillsData"
            :key="index"
            :style="{ '--color': item.color }"
            :href="item.link"
            class="skills-item"
            target="_blank"
          >
            <div class="skills-logo">
              <i :class="`iconfont icon-${item.icon}`"></i>
            </div>
            <span class="skills-name">{{ item.name }}</span>
          </a>
        </div>
      </div>
      <!-- 生涯 -->
      <div class="about-item career">
        <span class="tip">生涯</span>
        <span class="title2">
          <i>不断拆解，不断重建</i>
        </span>
        <div class="list">
          <span class="list-item" style="--color: #357ef5">ZZRVTC · 计算机应用技术</span>
          <span class="list-item" style="--color: #eb372a">FE · 前端开发工程师</span>
        </div>
        <img
          class="career-img"
          src="/images/about/career.png"
          alt="career"
        />
      </div>
    </div>
    <div class="about-content" style="grid-template-columns: 3fr 2fr">
      <!-- 性格 -->
      <div class="about-item character" style="--color: #4298b4">
        <span class="tip">性格</span>
        <span class="title2">观察者</span>
        <span class="title2" style="color: var(--color)">冷静，但不冷漠</span>
        <span class="more">
          对世界保持
          <a href="https://www.16personalities.com/ch/" target="_blank">好奇</a>
          ，对人性保持
          <a href="https://www.16personalities.com/ch/istj-%E4%BA%BA%E6%A0%BC" target="_blank">
            警惕
          </a>
        </span>
        <img
          src="http://img.knotens.org/i/2026/05/11/6a01591982c56.png"
          alt="male"
          class="male"
        />
      </div>
      <!-- 座右铭 -->
      <div class="about-item">
        <span class="tip">座右铭</span>
        <span class="title1" style="margin-top: 20px">怕什么真理无穷，</span>
        <span class="title2">进一寸有一寸的欢喜。</span>
      </div>
    </div>
    <div class="about-content" style="grid-template-columns: 1fr 1fr">
      <div
        class="about-item like image"
        style="
          --color: #0c0e20;
          background-image: url(/images/about/interest_humanity.png);
        "
      >
        <div class="image-content">
          <span class="tip">关注偏好</span>
          <span class="title2">人性与权力</span>
          <div class="image-desc">
            <span class="left">政治、历史、社会与技术的交叉地带</span>
          </div>
        </div>
      </div>
      <div
        class="about-item like image"
        style="
          --color: #7b3c25;
          background-image: url(/images/about/interest_music.png);
        "
      >
        <div class="image-content">
          <span class="tip">音乐偏好</span>
          <span class="title2">欧美、华语流行、纯音乐、ACG</span>
          <div class="image-desc">
            <span class="left">旋律是思想的另一种语言</span>
          </div>
        </div>
      </div>
    </div>
    <div class="about-content" style="grid-template-columns: 2fr 3fr">
      <!-- 数据 -->
      <div
        class="about-item static image"
        style="
          --color: #0f1114;
          background-image: url(/images/about/statistics.png);
        "
      >
        <div class="image-content">
          <span class="tip">数据</span>
          <span class="title2">访问统计</span>
          <div class="static-data">
            <div v-for="(item, key, index) in statisticsData" :key="index" class="static-item">
              <span class="static-name">{{ key }}</span>
              <span class="static-num">{{ item }}</span>
            </div>
          </div>
          <div class="image-desc opacity">
            <span class="left">
              统计信息来自 <a href="https://v6.51.la/" target="_blank">51la</a>
            </span>
          </div>
        </div>
      </div>
      <!-- 信息 -->
      <div class="about-item child">
        <div
          class="about-item map image"
          style="background-image: url(/images/about/map.png)"
        >
          <span class="position">我现在住在 <strong>中国，河南省</strong></span>
        </div>
        <div class="about-item info">
          <div class="info-item">
            <span class="info-name">生于</span>
            <span class="info-num" style="--color: #43a6c6">2001</span>
          </div>
          <div class="info-item">
            <span class="info-name">现在职业</span>
            <span class="info-num" style="--color: #dfac46">前端开发工程师</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 心路历程 -->
    <div class="about-content" style="display: flex">
      <div class="about-item">
        <span class="tip">心路历程</span>
        <span class="title2">为什么记录？</span>
        <p class="text">
          阅读是世界上杠杆最高的活动之一——投入一个工作天的时间，就能接触到最聪明的人已经研究透彻的东西。这个站点，就是我把<strong>阅读的杠杆</strong>落地的场所。
        </p>
        <p class="text">
          这里不追求流量，不讨好算法。写技术，也写对世界的观察。符号和立场在吵架，但人类在相爱——我选择<strong>站在两者之间</strong>，记录、思考、拆解。
        </p>
        <p class="text">
          做对的事情，再把事情做对。如果某篇文章恰好撞上了你的某段思考，那说明我们<strong>在各自的路上奔跑时遇见了</strong>。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getStatistics } from "@/api";

const { theme } = useData();

// 技能数据
const skillsData = [
  {
    name: "JavaScript",
    color: "#f1e05abd",
    icon: "javascript",
    link: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript",
  },
  {
    name: "HTML5",
    color: "#e34f26",
    icon: "html5",
    link: "https://developer.mozilla.org/zh-CN/docs/Web/HTML",
  },
  {
    name: "CSS3",
    color: "#563d7c",
    icon: "css3",
    link: "https://developer.mozilla.org/zh-CN/docs/Web/CSS",
  },
  {
    name: "Vue",
    color: "#41b883",
    icon: "vue",
    link: "https://cn.vuejs.org/",
  },
  {
    name: "React",
    color: "#149ECA",
    icon: "react",
    link: "https://zh-hans.reactjs.org/",
  },
  {
    name: "Node.js",
    color: "#026E00",
    icon: "nodejs",
    link: "https://nodejs.org/",
  },
  {
    name: "Python",
    color: "#3776AB",
    icon: "python",
    link: "https://www.python.org/",
  },
  {
    name: "Docker",
    color: "#2496f2",
    icon: "docker",
    link: "https://www.docker.com/",
  },
  {
    name: "Git",
    color: "#F05032",
    icon: "git",
    link: "https://git-scm.com/",
  },
  {
    name: "Photoshop",
    color: "#31A8FF",
    icon: "photoshop",
    link: "https://www.adobe.com/cn/lead/creativecloud/business.html",
  },
  {
    name: "ChatGPT",
    color: "#4AA181",
    icon: "chatgpt",
    link: "https://chat.openai.com/",
  },
];

// 站点统计数据
const statisticsData = ref({
  最近活跃: "100",
  今日人数: "500",
  今日访问: "10,000",
  昨日人数: "486",
  昨日访问: "9,952",
  本月访问: "325,014",
  总访问量: "6,252,348",
});

// 获取站点统计数据
const getStatisticsData = async () => {
  // try {
  //   if (theme.value.tongji?.["51la"]) {
  //     const result = await getStatistics(theme.value.tongji["51la"]);
  //     statisticsData.value = result;
  //   }
  // } catch (error) {
  //   console.error("获取统计数据失败：", error);
  // }
};

onMounted(() => {
  getStatisticsData();
});
</script>

<style lang="scss" scoped>
.about {
  .title {
    font-size: 2.4rem;
    text-align: center;
    border: none;
  }
  .about-content {
    display: grid;
    grid-template-columns: auto auto;
    gap: 20px;
    margin-bottom: 20px;
    .about-item {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 1.2rem 2rem;
      border-radius: 12px;
      background-color: var(--main-card-background);
      border: 1px solid var(--main-card-border);
      box-shadow: 0 8px 12px -4px var(--main-border-shadow);
      overflow: hidden;
      .tip {
        font-size: 14px;
        opacity: 0.8;
        margin-bottom: 12px;
      }
      .title1 {
        font-size: 36px;
        font-weight: bold;
        opacity: 0.6;
      }
      .title2 {
        font-size: 36px;
        font-weight: bold;
        margin-right: 4rem;
      }
      .text {
        font-size: 18px;
        margin: 0.6rem 0;
      }
      &.child {
        background-color: transparent;
        border: none;
        box-shadow: none;
        padding: 0;
        gap: 20px;
        .about-item {
          height: 100%;
        }
      }
      &.hello {
        justify-content: center;
        padding: 2rem;
        color: #fff;
        background-image: linear-gradient(120deg, #5b27ff 0%, #00d4ff 100%);
        background-size: 200% 200%;
        animation: gradientFlow 6s ease infinite;
        .title2 {
          line-height: 2;
        }
      }
      &.pursuit {
        .title2 {
          line-height: 1.2;
          &:last-child {
            display: inline-block;
            background-size: 100% 100%;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-repeat: no-repeat;
            background-image: linear-gradient(45deg, #fa7671 50%, #f45f7f);
          }
        }
      }
      &.character {
        min-height: 220px;
        cursor: pointer;
        .more {
          margin-top: auto;
          font-size: 14px;
          color: var(--main-color-gray);
          a {
            color: var(--main-color-gray);
            &:hover {
              color: var(--color);
            }
          }
        }
        .male {
          position: absolute;
          top: 0;
          right: -10px;
          height: 100%;
          width: auto;
          transition: transform 0.5s;
          transform-origin: top center;
          @media (max-width: 768px) {
            height: 80%;
          }
        }
        &:hover {
          .male {
            transform: scale(1.2);
          }
        }
      }
      &.skills {
        .skills-list {
          margin-top: 12px;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          .skills-item {
            display: flex;
            align-items: center;
            margin-right: 10px;
            margin-top: 10px;
            padding: 8px 12px 8px 8px;
            border-radius: 40px;
            background-color: var(--main-site-background);
            border: 1px solid var(--main-card-border);
            box-shadow: 0 8px 12px -4px var(--main-border-shadow);
            transition: background-color 0.3s;
            cursor: pointer;
            .skills-logo {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 32px;
              height: 32px;
              margin-right: 8px;
              border-radius: 50%;
              background-color: var(--color);
              .iconfont {
                color: #fff;
              }
            }
            .skills-name {
              font-weight: bold;
              transition: color 0.3s;
            }
            &:hover {
              background-color: var(--main-card-background);
            }
          }
        }
      }
      &.career {
        .title2 {
          letter-spacing: 0.2rem;
          font-size: 40px;
        }
        .list {
          margin-top: 12px;
          display: flex;
          flex-direction: column;
          .list-item {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 12px;
            color: var(--main-font-second-color);
            &::before {
              content: "";
              display: block;
              width: 16px;
              height: 16px;
              background-color: var(--color);
              border-radius: 50%;
              margin-right: 8px;
            }
          }
        }
        .career-img {
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 100%;
          @media (max-width: 768px) {
            position: static;
          }
        }
      }
      &.game {
        min-height: 300px;
        @media (max-width: 768px) {
          min-height: 240px;
        }
      }
      &.like {
        min-height: 400px;
        @media (max-width: 768px) {
          min-height: 300px;
        }
      }
      &.image {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.5s ease;
        &:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px -8px var(--main-border-shadow);
        }
        .image-content {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          z-index: 2;
          color: #fff;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
          .image-desc {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            margin-top: auto;
            &.opacity {
              font-size: 14px;
              color: #eee;
              opacity: 0.8;
              a {
                color: #eee;
                &:hover {
                  color: var(--main-color);
                }
              }
            }
          }
        }
        &::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.4) 100%);
          box-shadow: inset 0 -70px 204px 10px var(--color);
          z-index: 0;
        }
      }
      &.static {
        .static-data {
          display: grid;
          gap: 12px;
          grid-template-columns: 1fr 1fr;
          margin: 20px 0;
          .static-item {
            display: flex;
            flex-direction: column;
            .static-name {
              font-size: 15px;
              opacity: 0.9;
            }
            .static-num {
              font-size: 34px;
              font-weight: bold;
              background: linear-gradient(to bottom, #fff, #ccc);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
        }
      }
      &.map {
        min-height: 200px;
        background-size: cover;
        background-position: center;
        transition: background-position 2s ease-in-out, transform 0.5s ease;
        cursor: pointer;
        @media (max-width: 768px) {
          pointer-events: none;
        }
        .position {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          padding: 15px;
          color: #fff;
          background: rgba(99, 99, 82, 0.8);
          backdrop-filter: blur(10px);
          font-size: 18px;
          transition: all 0.5s ease;
          z-index: 2;
          strong {
            margin-left: 5px;
            color: #ffeb3b;
          }
        }
        &:hover {
          background-position: center 20%;
          .position {
            background: rgba(99, 99, 82, 0.95);
            padding-bottom: 25px;
          }
        }
      }
      &.info {
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        .info-item {
          display: flex;
          flex-direction: column;
          margin-right: 32px;
          .info-name {
            font-size: 14px;
            margin-bottom: 8px;
            color: var(--main-font-second-color);
          }
          .info-num {
            font-size: 34px;
            font-weight: bold;
            color: var(--color);
          }
        }
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
