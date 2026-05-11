<template>
  <div class="about">
    <h1 class="title">关于本站</h1>
    
    <div class="about-content" style="grid-template-columns: 1fr 1.2fr">
      <!-- 介绍 -->
      <div class="about-item hello">
        <span class="text1">JTropy</span>
        <span class="text2 title2">我是 京太</span>
        <span class="text3">
          喜欢“折腾”的实用主义者，关注技术与人文的交叉领域。<br/>
          热爱开源、摄影与深度思考s，试图通过技术构建一个更有趣的世界。<br/>
          
        </span>
      </div>
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

    <!-- 偏好 - 第二行 -->
    <div class="about-content" style="grid-template-columns: 1fr 1.2fr">
      <div
        class="about-item like image"
        style="
          --color: #0c0e20;
          background-image: url(/images/about/interest_humanity.png);
        "
      >
        <div class="image-content">
          <span class="tip">座右铭</span>
          <span class="title2">怕什么真理无穷，<br/>进一寸有一寸的欢喜</span>
          <div class="image-desc" style="text-align: right; width: 100%;">
            <span class="left">—— 胡适《拟中国科学社社歌》</span>
          </div>
        </div>
      </div>
      <div
        class="about-item like image music-card"
        style="
          --color: #7b3c25;
          background-image: url(/images/about/interest_music.png);
        "
        @mouseenter="isMemoryActive = true"
        @mouseleave="isMemoryActive = false"
      >
        <div class="image-content">
          <span class="tip">音乐偏好</span>
          <span class="title2">说唱、古风DJ、Funk<br/>流行乐、华语</span>
          <div class="image-desc">
            <span class="left">鼠标停留有彩蛋…</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 测评分析 - 第一行 -->
    <div class="about-content" style="grid-template-columns: 1fr 1.2fr">
      <div class="about-item personality-card mbti" style="--color: #4298b4">
        <span class="tip">MBTI 认知功能</span>
        <span class="title2">INTJ 建筑师</span>
        <div class="result-img-wrapper" @click="previewUrl = '/images/about/mbti.png'">
          <img src="/images/about/mbti.png" alt="MBTI" class="result-img" />
        </div>
      </div>
      <div class="about-item personality-card cn-values" style="--color: #e91e63">
        <span class="tip">政治坐标</span>
        <span class="title2">社会自由主义</span>
        <div class="result-img-wrapper" @click="previewUrl = '/images/about/political.png'">
          <img src="/images/about/political.png" alt="CN Values" class="result-img" />
        </div>
      </div>
    </div>

    <!-- 测评分析 - 第二行 -->
    <div class="about-content" style="grid-template-columns: 1fr 1.2fr">
      <div class="about-item personality-card enneagram" style="--color: #3f51b5">
        <span class="tip">九型人格</span>
        <span class="title2">5w6 观察者</span>
        <div class="result-img-wrapper" @click="previewUrl = '/images/about/enneagram.png'">
          <img src="/images/about/enneagram.png" alt="Enneagram" class="result-img" />
        </div>
      </div>
      <div class="about-item personality-card attachment" style="--color: #00bcd4">
        <span class="tip">依恋类型</span>
        <span class="title2">回避型依恋</span>
        <div class="result-img-wrapper" @click="previewUrl = '/images/about/attachment.png'">
          <img src="/images/about/attachment.png" alt="Attachment" class="result-img" />
        </div>
      </div>
    </div>

    <!-- 记忆彩蛋全屏遮罩 -->
    <Teleport to="body">
      <Transition name="memory-fade">
        <div v-if="isMemoryActive" class="full-memory-overlay">
          <div class="memory-image-container">
            <img src="/images/about/memory.png" alt="Memory" class="memory-img" />
          </div>
          <div class="memory-vignette"></div>
        </div>
      </Transition>
    </Teleport>

    <!-- 图片预览遮罩 -->
    <Transition name="fade">
      <div v-if="previewUrl" class="image-preview-mask" @click="previewUrl = ''">
        <div class="preview-content">
          <img :src="previewUrl" alt="Preview" />
          <div class="close-btn"><i class="iconfont icon-close"></i></div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { useData } from "vitepress";
import { onMounted, ref } from "vue";

const { theme } = useData();
const previewUrl = ref("");
const isMemoryActive = ref(false);

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
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  .title {
    font-size: 2.4rem;
    text-align: center;
    border: none;
    margin-bottom: 30px;
  }

  .about-content {
    display: grid;
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

      .title2 {
        font-size: 36px;
        font-weight: bold;
        margin-right: 2rem;
      }

      &.hello {
        justify-content: center;
        padding: 2rem 2.5rem;
        color: #fff;
        background-image: linear-gradient(120deg, #5b27ff 0%, #00d4ff 100%);
        background-size: 200% 200%;
        animation: gradientFlow 6s ease infinite;
        
        .text1 {
          font-size: 1rem;
          opacity: 0.8;
          margin-bottom: 0.5rem;
        }

        .text2 {
          font-size: 2.5rem;
          margin-bottom: 1.2rem;
          line-height: 1.2;
        }

        .text3 {
          font-size: 1.1rem;
          line-height: 1.8;
          opacity: 0.95;
          letter-spacing: 0.5px;
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
            box-shadow: 0 4px 8px -2px var(--main-border-shadow);
            transition: all 0.3s;
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
            }
            &:hover {
              background-color: var(--main-card-background);
              transform: translateY(-2px);
            }
          }
        }
      }

      &.personality-card {
        min-height: 280px;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
        .result-img-wrapper {
          position: absolute;
          right: -10px;
          bottom: -5px;
          width: 85%;
          height: 210px;
          border-radius: 4px;
          overflow: hidden;
          transform: rotate(-2deg) translateY(5px);
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5));
          .result-img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: right bottom;
          }
        }
        &:hover {
          background-color: var(--color);
          transform: translateY(-5px);
          .tip, .title2 {
            color: #fff;
            opacity: 1;
          }
          .result-img-wrapper {
            transform: rotate(0deg) translateY(-5px) scale(1.02);
            right: 10px;
            bottom: 10px;
            width: 90%;
            z-index: 10;
          }
        }
      }

      &.image {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        transition: all 0.5s ease;
        &::after {
          content: "";
          position: absolute;
          width: 100%; height: 100%;
          top: 0; left: 0;
          background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.4) 100%);
          box-shadow: inset 0 -70px 204px 10px var(--color);
          z-index: 0;
          transition: all 0.5s ease;
        }

        &.music-card {
          cursor: help;
          .image-content {
            transition: all 0.5s ease;
          }

          &:hover {
            .image-content {
              filter: blur(4px) brightness(0.8);
              transform: scale(0.98);
            }
          }
        }

        .image-content {
          position: relative;
          z-index: 2;
          color: #fff;
          height: 100%;
          display: flex;
          flex-direction: column;
          .title2 { margin-top: auto; }
        }
        &:hover {
          transform: translateY(-8px);
          &::after { opacity: 0.8; }
        }
      }
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr !important;
    }
  }
}

@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.image-preview-mask {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: zoom-out;
  padding: 40px;

  .preview-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      border-radius: 8px;
      box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
      animation: zoomIn 0.3s ease;
    }
    .close-btn {
      position: absolute;
      top: -40px; right: -40px;
      color: #fff;
      font-size: 30px;
      cursor: pointer;
    }
  }
}

@keyframes zoomIn {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

// 记忆彩蛋样式
.full-memory-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  z-index: 9998;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(0px);
  pointer-events: none;
  animation: overlayBlur 8s forwards cubic-bezier(0.4, 0, 0.2, 1);

  .memory-image-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    .memory-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0;
      filter: blur(20px) scale(1.2);
      animation: imageReveal 10s forwards cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  .memory-vignette {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    box-shadow: inset 0 0 200px rgba(0, 0, 0, 0.9);
    pointer-events: none;
  }
}

@keyframes overlayBlur {
  from { backdrop-filter: blur(0px); background-color: rgba(0, 0, 0, 0); }
  to { backdrop-filter: blur(15px); background-color: rgba(0, 0, 0, 0.7); }
}

@keyframes imageReveal {
  0% { opacity: 0; filter: blur(20px) scale(1.15); }
  30% { opacity: 0.4; }
  100% { opacity: 1; filter: blur(0px) scale(1); }
}

.memory-fade-enter-active, .memory-fade-leave-active {
  transition: opacity 1s ease;
}
.memory-fade-enter-from, .memory-fade-leave-to {
  opacity: 0;
}
</style>
