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
    <div class="about-content" style="grid-template-columns: 1fr">
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
    </div>
    <!-- 测评分析 - 第一行 -->
    <div class="about-content" style="grid-template-columns: 1.5fr 1fr">
      <div class="about-item personality-card mbti" style="--color: #4298b4">
        <span class="tip">MBTI 认知功能</span>
        <span class="title2">ISTJ 观察者</span>
        <div class="result-img-wrapper">
          <img src="http://img.knotens.org/i/2026/05/11/6a01aeece9c1e.png" alt="MBTI" class="result-img" />
        </div>
      </div>
      <div class="about-item personality-card cn-values" style="--color: #e91e63">
        <span class="tip">政治坐标</span>
        <span class="title2">社会自由主义</span>
        <div class="result-img-wrapper">
          <img src="http://img.knotens.org/i/2026/05/11/6a01aef80487e.png" alt="CN Values" class="result-img" />
        </div>
      </div>
    </div>

    <!-- 测评分析 - 第二行 -->
    <div class="about-content" style="grid-template-columns: 1fr 1.5fr">
      <div class="about-item personality-card enneagram" style="--color: #3f51b5">
        <span class="tip">九型人格</span>
        <span class="title2">5w6 观察者</span>
        <div class="result-img-wrapper">
          <img src="http://img.knotens.org/i/2026/05/11/6a01b0b582ca6.png" alt="Enneagram" class="result-img" />
        </div>
      </div>
      <div class="about-item personality-card attachment" style="--color: #00bcd4">
        <span class="tip">依恋类型</span>
        <span class="title2">回避型 / 冷漠型</span>
        <div class="result-img-wrapper">
          <img src="http://img.knotens.org/i/2026/05/11/6a01b04e9afaf.png" alt="Attachment" class="result-img" />
        </div>
      </div>
    </div>

    <!-- 座右铭 -->
    <div class="about-content" style="grid-template-columns: 1fr">
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


  </div>
</template>

<script setup>
import { useData } from "vitepress";
import { onMounted } from "vue";

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

onMounted(() => {
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
      &.personality-card {
        min-height: 280px;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
        .result-img-wrapper {
          position: absolute;
          right: -30px;
          bottom: -20px;
          width: 70%;
          height: 180px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 12px 32px -8px rgba(0, 0, 0, 0.5);
          transform: rotate(-8deg) translateY(20px);
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          background-color: rgba(0, 0, 0, 0.2);
          .result-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s ease;
          }
        }
        &:hover {
          background-color: var(--color);
          transform: translateY(-5px);
          .tip,
          .title2 {
            color: #fff;
            opacity: 1;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          }
          .result-img-wrapper {
            transform: rotate(0deg) translateY(-10px) scale(1.05);
            right: 20px;
            bottom: 20px;
            width: 80%;
            height: 200px;
            z-index: 10;
            box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.6);
            .result-img {
              transform: scale(1.1);
            }
          }
        }
        &.enneagram {
          .result-img-wrapper {
            width: 60%;
            .result-img {
              object-fit: contain;
              background: #fff;
            }
          }
        }
        @media (max-width: 768px) {
          min-height: 240px;
          .result-img-wrapper {
            width: 60%;
            height: 140px;
            right: -10px;
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
          transition: transform 0.5s ease;
          @media (max-width: 768px) {
            position: static;
          }
        }
        &:hover {
          .career-img {
            transform: scale(1.05) translateY(-5px);
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
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px -10px var(--main-border-shadow);
          &::after {
            opacity: 0.8;
            box-shadow: inset 0 -120px 200px 10px var(--color);
          }
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
          transition: all 0.5s ease;
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
