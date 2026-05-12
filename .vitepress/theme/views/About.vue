<template>
  <div class="about">
    <h1 class="title">关于本站</h1>

    <div class="about-content">
      <!-- 介绍 -->
      <div class="about-item hello">
        <span class="text1">JTropy</span>
        <span class="text2 title2">我是 京太</span>
        <span class="text3">
          实用主义者，关注技术与人文的交叉领域<br />
          喜欢“折腾”，对“掌控感”有高需求<br />
          Win+Linux+Mac三持使用中
        </span>
      </div>

      <!-- 技能 -->
      <div class="about-item skills">
        <span class="tip">技能</span>
        <span class="title2">工具是手的延伸</span>
        <div class="skills-list">
          <a
            v-for="item in skillsData"
            :key="item.name"
            :style="{ '--accent': item.color }"
            :href="item.link"
            class="skills-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="skills-logo">
              <i :class="`iconfont icon-${item.icon}`" aria-hidden="true"></i>
            </div>
            <span class="skills-name">{{ item.name }}</span>
          </a>
        </div>
      </div>
    </div>

    <!-- 偏好 -->
    <div class="about-content">
      <div class="about-item like image motto-card">
        <div class="image-content">
          <span class="tip">座右铭</span>
          <span class="title2">怕什么真理无穷，<br />进一寸有一寸的欢喜</span>
          <div class="image-desc">
            <span class="left">—— 胡适《拟中国科学社社歌》</span>
          </div>
        </div>
      </div>
      <div
        class="about-item like image music-card"
        @mouseenter="handleMusicEnter"
        @mouseleave="handleMusicLeave"
      >
        <div class="image-content">
          <span class="tip">音乐偏好</span>
          <span class="title2">说唱、古风DJ、Funk<br />流行乐、华语</span>
          <div class="image-desc">
            <span class="left">鼠标悬停有彩蛋…</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 测评分析 -->
    <div class="about-content assessment-grid">
      <article
        v-for="item in assessmentCards"
        :key="item.title"
        class="about-item personality-card"
        :class="item.className"
        :style="{ '--color': item.color }"
        role="button"
        tabindex="0"
        :aria-label="`查看${item.title}测评图片`"
        @click="openPreview(item)"
        @keydown.enter.prevent="openPreview(item)"
        @keydown.space.prevent="openPreview(item)"
      >
        <span class="tip">{{ item.tip }}</span>
        <span class="title2">{{ item.title }}</span>
        <div class="result-img-wrapper" aria-hidden="true">
          <img :src="item.src" :alt="item.alt" class="result-img" loading="lazy" />
        </div>
      </article>
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
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="previewImage" class="image-preview-mask" @click.self="closePreview">
          <figure class="preview-content" @click.stop>
            <button class="close-btn" type="button" aria-label="关闭图片预览" @click="closePreview">
              <i class="iconfont icon-close" aria-hidden="true"></i>
            </button>
            <img :src="previewImage.src" :alt="previewImage.alt" class="preview-image" />
            <figcaption>{{ previewImage.tip }}</figcaption>
          </figure>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { onBeforeUnmount, ref, watch } from "vue";

defineOptions({
  name: "AboutView",
});

const previewImage = ref(null);
const isMemoryActive = ref(false);
let memoryTimer = null;
let originalBodyOverflow = "";

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
    color: "#149eca",
    icon: "react",
    link: "https://zh-hans.reactjs.org/",
  },
  {
    name: "Node.js",
    color: "#026e00",
    icon: "nodejs",
    link: "https://nodejs.org/",
  },
  {
    name: "Python",
    color: "#3776ab",
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
    color: "#f05032",
    icon: "git",
    link: "https://git-scm.com/",
  },
  {
    name: "Photoshop",
    color: "#31a8ff",
    icon: "photoshop",
    link: "https://www.adobe.com/cn/lead/creativecloud/business.html",
  },
  {
    name: "ChatGPT",
    color: "#4aa181",
    icon: "chatgpt",
    link: "https://chat.openai.com/",
  },
];

const assessmentCards = [
  {
    tip: "MBTI 认知功能",
    title: "INTJ 建筑师",
    color: "#4298b4",
    className: "mbti",
    src: "/images/about/mbti.png",
    alt: "MBTI 认知功能测评结果",
  },
  {
    tip: "政治坐标",
    title: "社会自由主义",
    color: "#e91e63",
    className: "cn-values",
    src: "/images/about/political.png",
    alt: "政治坐标测评结果",
  },
  {
    tip: "九型人格",
    title: "5w6 观察者",
    color: "#3f51b5",
    className: "enneagram",
    src: "/images/about/enneagram.png",
    alt: "九型人格测评结果",
  },
  {
    tip: "依恋类型",
    title: "回避型依恋",
    color: "#00bcd4",
    className: "attachment",
    src: "/images/about/attachment.png",
    alt: "依恋类型测评结果",
  },
];

const openPreview = (item) => {
  previewImage.value = item;
};

const closePreview = () => {
  previewImage.value = null;
};

const handlePreviewKeydown = (event) => {
  if (event.key === "Escape") closePreview();
};

const stopMemoryPeek = () => {
  if (memoryTimer) {
    clearTimeout(memoryTimer);
    memoryTimer = null;
  }
  isMemoryActive.value = false;
};

const handleMusicEnter = () => {
  if (memoryTimer || isMemoryActive.value) return;
  memoryTimer = setTimeout(() => {
    isMemoryActive.value = true;
    memoryTimer = null;
  }, 2500);
};

const handleMusicLeave = () => {
  stopMemoryPeek();
};

watch(
  () => Boolean(previewImage.value),
  (isOpen) => {
    if (typeof document === "undefined" || typeof window === "undefined") return;

    if (isOpen) {
      originalBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handlePreviewKeydown);
      return;
    }

    document.body.style.overflow = originalBodyOverflow;
    window.removeEventListener("keydown", handlePreviewKeydown);
  },
);

onBeforeUnmount(() => {
  stopMemoryPeek();
  if (typeof document !== "undefined") document.body.style.overflow = originalBodyOverflow;
  if (typeof window !== "undefined") {
    window.removeEventListener("keydown", handlePreviewKeydown);
  }
});
</script>

<style lang="scss" scoped>
.about {
  --about-gap: 20px;
  padding: clamp(14px, 3vw, 24px);
  max-width: 1200px;
  margin: 0 auto;

  .title {
    font-size: clamp(2rem, 5vw, 2.8rem);
    text-align: center;
    border: none;
    margin-bottom: 30px;
    letter-spacing: 0;
  }

  .about-content {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
    gap: var(--about-gap);
    margin-bottom: var(--about-gap);

    &.assessment-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .about-item {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
      min-width: 0;
      padding: 1.2rem 2rem;
      border-radius: 12px;
      background-color: var(--main-card-background);
      border: 1px solid var(--main-card-border);
      box-shadow: 0 8px 12px -4px var(--main-border-shadow);
      overflow: hidden;
      isolation: isolate;

      .tip {
        position: relative;
        z-index: 2;
        font-size: 14px;
        opacity: 0.78;
        margin-bottom: 12px;
      }

      .title2 {
        position: relative;
        z-index: 2;
        font-size: clamp(1.7rem, 3.4vw, 2.25rem);
        font-weight: 700;
        line-height: 1.24;
        margin-right: 2rem;
        letter-spacing: 0;
      }

      &.hello {
        justify-content: center;
        padding: 2rem 2.5rem;
        color: #fff;
        background:
          linear-gradient(120deg, rgba(13, 18, 38, 0.1), rgba(255, 255, 255, 0.16)),
          linear-gradient(120deg, #5b27ff 0%, #0089ff 52%, #00d4ff 100%);
        background-size: 200% 200%;
        animation: gradientFlow 6s ease infinite;

        .text1 {
          font-size: 1rem;
          opacity: 0.82;
          margin-bottom: 0.5rem;
        }

        .text2 {
          font-size: clamp(2rem, 5vw, 2.6rem);
          margin-bottom: 1.2rem;
          line-height: 1.2;
        }

        .text3 {
          font-size: 1.08rem;
          line-height: 1.8;
          opacity: 0.95;
          letter-spacing: 0;
        }
      }

      &.skills {
        .skills-list {
          margin-top: 12px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;

          .skills-item {
            display: inline-flex;
            align-items: center;
            min-height: 48px;
            padding: 8px 13px 8px 8px;
            border-radius: 999px;
            background-color: var(--main-site-background);
            border: 1px solid var(--main-card-border);
            box-shadow: 0 4px 8px -2px var(--main-border-shadow);
            transition:
              transform 0.3s,
              background-color 0.3s,
              border-color 0.3s,
              box-shadow 0.3s;

            .skills-logo {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 32px;
              height: 32px;
              margin-right: 8px;
              border-radius: 50%;
              background-color: var(--accent);

              .iconfont {
                color: #fff;
              }
            }

            .skills-name {
              font-weight: 700;
              white-space: nowrap;
            }

            &:hover {
              background-color: var(--main-card-background);
              border-color: var(--accent);
              box-shadow: 0 10px 20px -12px var(--accent);
              transform: translateY(-2px);
            }
          }
        }
      }

      &.personality-card {
        min-height: clamp(260px, 28vw, 310px);
        cursor: zoom-in;
        transition:
          transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
          background-color 0.4s,
          border-color 0.4s;

        &::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          background:
            linear-gradient(
              135deg,
              color-mix(in srgb, var(--color) 16%, transparent),
              transparent 45%
            ),
            linear-gradient(
              180deg,
              transparent 48%,
              color-mix(in srgb, var(--color) 10%, transparent)
            );
          opacity: 0.78;
          transition: opacity 0.4s;
        }

        .result-img-wrapper {
          position: absolute;
          right: -8px;
          bottom: -6px;
          z-index: 1;
          width: min(86%, 480px);
          height: 214px;
          border-radius: 8px;
          overflow: hidden;
          pointer-events: none;
          transform: rotate(-2deg) translateY(5px);
          transition:
            right 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275),
            bottom 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275),
            width 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275),
            transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          filter: drop-shadow(0 16px 22px rgba(0, 0, 0, 0.42));

          .result-img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: right bottom;
          }
        }

        &:hover,
        &:focus-visible {
          background-color: var(--color);
          border-color: color-mix(in srgb, var(--color) 76%, white);
          transform: translateY(-5px);
          outline: none;

          &::before {
            opacity: 0.16;
          }

          .tip,
          .title2 {
            color: #fff;
            opacity: 1;
          }

          .result-img-wrapper {
            right: 12px;
            bottom: 12px;
            width: min(92%, 520px);
            transform: rotate(0deg) translateY(-5px) scale(1.02);
          }
        }
      }

      &.image {
        min-height: 260px;
        transition:
          transform 0.5s ease,
          filter 0.5s ease;

        &::before,
        &::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          transition: opacity 0.5s ease;
        }

        &::before {
          opacity: 0.18;
          background:
            repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.22) 0 1px, transparent 1px 24px),
            repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.16) 0 1px, transparent 1px 24px);
        }

        &::after {
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.44) 100%);
        }

        &.motto-card {
          background:
            linear-gradient(135deg, #172033 0%, #224a56 48%, #755d3a 100%);
        }

        &.music-card {
          cursor: help;
          background:
            linear-gradient(135deg, #1a1024 0%, #7b3c25 52%, #c09a45 100%);

          .image-content {
            transition:
              filter 0.5s ease,
              transform 0.5s ease;
          }

          &:hover {
            .image-content {
              filter: blur(4px) brightness(0.84);
              transform: scale(0.98);
            }
          }
        }

        .image-content {
          position: relative;
          z-index: 2;
          color: #fff;
          height: 100%;
          min-height: 216px;
          display: flex;
          flex-direction: column;

          .title2 {
            margin-top: auto;
          }
        }

        .image-desc {
          width: 100%;
          text-align: right;
          margin-top: 16px;
          opacity: 0.86;
        }

        &:hover {
          transform: translateY(-8px);

          &::after {
            opacity: 0.78;
          }
        }
      }
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;

      &.assessment-grid {
        grid-template-columns: 1fr;
      }

      .about-item {
        padding: 1.1rem 1.25rem;

        .title2 {
          margin-right: 0;
        }

        &.personality-card {
          min-height: 245px;

          .result-img-wrapper {
            width: 94%;
            height: 170px;
            right: -18px;
          }
        }
      }
    }
  }
}

@keyframes gradientFlow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.image-preview-mask {
  position: fixed;
  inset: 0;
  width: 100vw;
  width: 100dvw;
  height: 100vh;
  height: 100dvh;
  z-index: 9999;
  display: grid;
  place-items: center;
  padding: clamp(14px, 3vw, 32px);
  background-color: rgba(4, 7, 14, 0.84);
  backdrop-filter: blur(14px) saturate(1.2);
  cursor: zoom-out;

  .preview-content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: min(100%, calc(100dvw - 28px));
    max-height: calc(100dvh - 28px);
    margin: 0;
    cursor: default;
  }

  .preview-image {
    display: block;
    width: auto;
    height: auto;
    max-width: min(100%, calc(100dvw - 48px));
    max-height: calc(100dvh - 96px);
    object-fit: contain;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.06);
    box-shadow: 0 24px 80px rgba(0, 0, 0, 0.48);
    animation: zoomIn 0.3s ease;
  }

  figcaption {
    margin-top: 12px;
    color: rgba(255, 255, 255, 0.82);
    font-size: 14px;
    line-height: 1.4;
    text-align: center;
  }

  .close-btn {
    position: absolute;
    top: -16px;
    right: -16px;
    z-index: 2;
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    padding: 0;
    border: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: 50%;
    color: #fff;
    background: rgba(20, 23, 31, 0.74);
    backdrop-filter: blur(10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.32);
    cursor: pointer;
    transition:
      transform 0.25s,
      background-color 0.25s;

    &:hover,
    &:focus-visible {
      background: rgba(255, 255, 255, 0.16);
      transform: scale(1.06);
      outline: none;
    }
  }

  @media (max-width: 768px) {
    padding: 12px;

    .preview-content {
      width: 100%;
      max-height: calc(100dvh - 24px);
    }

    .preview-image {
      max-width: calc(100dvw - 24px);
      max-height: calc(100dvh - 88px);
    }

    .close-btn {
      top: 8px;
      right: 8px;
    }
  }
}

@keyframes zoomIn {
  from {
    transform: scale(0.96);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// 记忆彩蛋样式
.full-memory-overlay {
  position: fixed;
  inset: 0;
  width: 100vw;
  width: 100dvw;
  height: 100vh;
  height: 100dvh;
  z-index: 9998;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(0);
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
      max-width: 90%;
      max-height: 85%;
      object-fit: contain;
      opacity: 0;
      filter: blur(20px) scale(1.1);
      animation: imageReveal 10s forwards cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
      border-radius: 4px;
    }
  }

  .memory-vignette {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 200px rgba(0, 0, 0, 0.9);
    pointer-events: none;
  }
}

@keyframes overlayBlur {
  from {
    backdrop-filter: blur(0);
    background-color: rgba(0, 0, 0, 0);
  }
  to {
    backdrop-filter: blur(15px);
    background-color: rgba(0, 0, 0, 0.7);
  }
}

@keyframes imageReveal {
  0% {
    opacity: 0;
    filter: blur(20px) scale(1.15);
  }
  30% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
    filter: blur(0) scale(1);
  }
}

.memory-fade-enter-active,
.memory-fade-leave-active {
  transition: opacity 1s ease;
}

.memory-fade-enter-from,
.memory-fade-leave-to {
  opacity: 0;
}
</style>
