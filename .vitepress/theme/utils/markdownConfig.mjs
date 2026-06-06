import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";
import markdownItAttrs from "markdown-it-attrs";
import container from "markdown-it-container";

// markdown-it
const markdownConfig = (md, themeConfig) => {
  // 插件
  md.use(markdownItAttrs);
  md.use(tabsMarkdownPlugin);
  // timeline
  md.use(container, "timeline", {
    validate: (params) => params.trim().match(/^timeline\s+(.*)$/),
    render: (tokens, idx) => {
      const m = tokens[idx].info.trim().match(/^timeline\s+(.*)$/);
      if (tokens[idx].nesting === 1) {
        return `<div class="timeline">
                    <span class="timeline-title">${md.utils.escapeHtml(m[1])}</span>
                    <div class="timeline-content">`;
      } else {
        return "</div></div>\n";
      }
    },
  });
  // radio
  md.use(container, "radio", {
    render: (tokens, idx, _options, env) => {
      const token = tokens[idx];
      const check = token.info.trim().slice("radio".length).trim();
      if (token.nesting === 1) {
        const isChecked = md.renderInline(check, {
          references: env.references,
        });
        return `<div class="radio">
          <div class="radio-point ${isChecked}" />`;
      } else {
        return "</div>";
      }
    },
  });
  // button
  md.use(container, "button", {
    render: (tokens, idx, _options) => {
      const token = tokens[idx];
      const check = token.info.trim().slice("button".length).trim();
      if (token.nesting === 1) {
        return `<button class="button ${check}">`;
      } else {
        return "</button>";
      }
    },
  });
  // card
  md.use(container, "card", {
    render: (tokens, idx, _options) => {
      const token = tokens[idx];
      if (token.nesting === 1) {
        return `<div class="card">`;
      } else {
        return "</div>";
      }
    },
  });
  // 表格
  md.renderer.rules.table_open = () => {
    return '<div class="table-container"><table>';
  };
  md.renderer.rules.table_close = () => {
    return "</table></div>";
  };
  // 图片
  md.renderer.rules.image = (tokens, idx) => {
    const token = tokens[idx];
    const src = md.utils.escapeHtml(token.attrGet("src") || "");
    const alt = md.utils.escapeHtml(token.content || "");
    if (!themeConfig.fancybox.enable) {
      return `<img src="${src}" alt="${alt}" loading="lazy">`;
    }
    return `<a class="img-fancybox" href="${src}" data-fancybox="gallery" data-caption="${alt}">
                <img class="post-img" src="${src}" alt="${alt}" loading="lazy" />
                <span class="post-img-tip">${alt}</span>
              </a>`;
  };
  
  // Obsidian 原生 callout (`> [!type] title\n> body`) → ad-type fenced block
  // 在 normalize 之前做源码级替换，让下游 fence 渲染统一处理
  md.core.ruler.before("normalize", "obsidian_callout", (state) => {
    state.src = state.src.replace(
      /^> \[!([A-Za-z]+)\][^\S\n]*([^\n]*)\n((?:>[^\n]*(?:\n|$))*)/gm,
      (_match, type, title, body) => {
        const cleanBody = body
          .split("\n")
          .map((line) => line.replace(/^> ?/, ""))
          .join("\n")
          .replace(/\n+$/, "");
        const titlePart = title.trim() ? ` ${title.trim()}` : "";
        return `\`\`\`ad-${type.toLowerCase()}${titlePart}\n${cleanBody}\n\`\`\`\n`;
      },
    );
  });

  // Obsidian wikilink: [[标题]] / [[标题|显示]] / [[标题#小节]] / [[#小节]]
  // 所有文章都在 /posts/ 下，且「文件名 = 标题」，故 [[标题]] → /posts/标题。
  // 用 inline 规则（而非源码级替换）以自动跳过行内代码与代码块，避免误伤代码示例。
  md.inline.ruler.before("link", "obsidian_wikilink", (state, silent) => {
    const start = state.pos;
    const src = state.src;
    // 必须以 [[ 开头
    if (src.charCodeAt(start) !== 0x5b /* [ */ || src.charCodeAt(start + 1) !== 0x5b) {
      return false;
    }
    // 嵌入语法 ![[...]] 不在博客侧处理，交回其它规则
    if (start > 0 && src.charCodeAt(start - 1) === 0x21 /* ! */) {
      return false;
    }
    // 找到结束的 ]]
    const closeIdx = src.indexOf("]]", start + 2);
    if (closeIdx < 0) return false;
    const inner = src.slice(start + 2, closeIdx);
    // 拒绝跨行或内含 [（避免吞掉非 wikilink 的方括号结构）
    if (!inner || inner.includes("\n") || inner.includes("[")) return false;

    // 拆出别名：标题|显示文本
    const pipeIdx = inner.indexOf("|");
    const targetRaw = (pipeIdx === -1 ? inner : inner.slice(0, pipeIdx)).trim();
    const displayRaw = pipeIdx === -1 ? "" : inner.slice(pipeIdx + 1).trim();

    // 拆出锚点：标题#小节
    const hashIdx = targetRaw.indexOf("#");
    const page = (hashIdx === -1 ? targetRaw : targetRaw.slice(0, hashIdx)).trim();
    const heading = hashIdx === -1 ? "" : targetRaw.slice(hashIdx + 1).trim();

    // 组装 href：有页面则指向 /posts/页面，纯锚点则同页跳转
    let href = "";
    if (page) href += `/posts/${encodeURIComponent(page)}`;
    if (heading) href += `#${encodeURIComponent(heading)}`;
    if (!href) return false;

    if (silent) return true;

    const display = displayRaw || (page ? targetRaw : heading);
    const open = state.push("link_open", "a", 1);
    open.attrSet("href", href);
    open.attrSet("class", "wikilink");
    const text = state.push("text", "", 0);
    text.content = display;
    state.push("link_close", "a", -1);

    state.pos = closeIdx + 2;
    return true;
  });

  // Obsidian admonition: fenced code block `ad-xxx [title]` → custom-block
  // className 决定基础视觉（info/tip/warning/danger/success/example/question/quote），
  // 同时附带 ad-<type> 修饰类供后续微调
  const admonitionTypes = {
    note: { className: "info", defaultTitle: "笔记" },
    info: { className: "info", defaultTitle: "信息" },
    summary: { className: "info", defaultTitle: "摘要" },
    abstract: { className: "info", defaultTitle: "概述" },
    tip: { className: "tip", defaultTitle: "提示" },
    hint: { className: "tip", defaultTitle: "提示" },
    success: { className: "success", defaultTitle: "成功" },
    example: { className: "example", defaultTitle: "示例" },
    question: { className: "question", defaultTitle: "问题" },
    faq: { className: "question", defaultTitle: "FAQ" },
    quote: { className: "quote", defaultTitle: "引用" },
    warning: { className: "warning", defaultTitle: "警告" },
    important: { className: "warning", defaultTitle: "重要" },
    caution: { className: "warning", defaultTitle: "注意" },
    danger: { className: "danger", defaultTitle: "危险" },
    error: { className: "danger", defaultTitle: "错误" },
  };

  const fence = md.renderer.rules.fence;
  md.renderer.rules.fence = (...args) => {
    const [tokens, idx] = args;
    const token = tokens[idx];
    const info = token.info.trim();

    if (info.startsWith("ad-")) {
      const rest = info.substring(3);
      const spaceIdx = rest.indexOf(" ");
      const type = (spaceIdx === -1 ? rest : rest.substring(0, spaceIdx)).toLowerCase();
      const customTitle = spaceIdx === -1 ? "" : rest.substring(spaceIdx + 1).trim();

      const entry = admonitionTypes[type] || { className: "info", defaultTitle: type.toUpperCase() };
      const title = customTitle || entry.defaultTitle;

      return `<div class="${entry.className} custom-block ad-${type}">
            <p class="custom-block-title">${md.utils.escapeHtml(title)}</p>
            <div class="custom-block-content">
              ${md.render(token.content)}
            </div>
    </div>`;
    }
    return fence(...args);
  };
};

export default markdownConfig;
