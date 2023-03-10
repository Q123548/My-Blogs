import{_ as e,p as n,q as s,a1 as a}from"./framework-efe98465.js";const i={},l=a(`<h1 id="vuepress" tabindex="-1"><a class="header-anchor" href="#vuepress" aria-hidden="true">#</a> Vuepress</h1><h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h2><p>VuePress 遵循 “约定优于配置” 的原则，推荐的目录结构如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├── docs
│   ├── .vuepress (可选的)//用于存放全局的配置、组件、静态资源等。
│   │   ├── components (可选的)//该目录中的 Vue 组件将会被自动注册为全局组件。
│   │   ├── theme (可选的)//用于存放本地主题。
│   │   │   └── Layout.vue
│   │   ├── public (可选的) //静态资源目录。
│   │   ├── styles (可选的)//用于存放样式相关的文件。
│   │   │   ├── index.styl//将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
│   │   │   └── palette.styl// 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
│   │   ├── templates (可选的, 谨慎配置)//存储 HTML 模板文件。
│   │   │   ├── dev.html//用于开发环境的 HTML 模板文件。
│   │   │   └── ssr.html//构建时基于 Vue SSR 的 HTML 模板文件。
│   │   ├── config.js (可选的)//配置文件的入口文件，也可以是 YML 或 toml。
│   │   └── enhanceApp.js (可选的)// 客户端应用的增强。
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基本配置" tabindex="-1"><a class="header-anchor" href="#基本配置" aria-hidden="true">#</a> 基本配置</h2><h3 id="生成配置文件" tabindex="-1"><a class="header-anchor" href="#生成配置文件" aria-hidden="true">#</a> 生成配置文件</h3><p>首先在你的文档目录下创建一个 .vuepress 目录，所有 VuePress 相关的文件都将会被放在这里。</p><p>. ├─ docs │ ├─ README.md │ └─ .vuepress │ └─ config.js └─ package.json</p><p>一个 VuePress 网站必要的配置文件是 .vuepress/config.js，它应该导出一个 JavaScript 对象：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Hello VuePress&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;Just playing around&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="默认路由配置" tabindex="-1"><a class="header-anchor" href="#默认路由配置" aria-hidden="true">#</a> 默认路由配置</h3><p>对于上述的目录结构，默认页面路由地址如下：</p><p>文件的相对路径 页面路由地址 /README.md ---/ /guide/README.md ---/guide/ /config.md ---/config.html</p><h3 id="主题配置" tabindex="-1"><a class="header-anchor" href="#主题配置" aria-hidden="true">#</a> 主题配置</h3><p>在 VuePress 中，目前自带了一个默认的主题（正是你现在所看到的），它是为技术文档而设计的。同时，默认主题提供了一些选项，让你可以去</p><ol><li>首页（homepage）</li><li>侧边栏（sidebar）</li><li>自定义导航栏（navbar）</li></ol><h4 id="首页" tabindex="-1"><a class="header-anchor" href="#首页" aria-hidden="true">#</a> 首页</h4><p>默认的主题提供了一个首页（Homepage）的布局 (用于 这个网站的主页)。想要使用它，需要在你的根级 README.md 的 YAML front matter 指定 home: true。</p><p>YAML front matter：是指md正文开始之前的配置项 以---开始和结束 例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
home: true
heroImage: /hero.png
heroText: Hero 标题
tagline: Hero 副标题
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="导航栏" tabindex="-1"><a class="header-anchor" href="#导航栏" aria-hidden="true">#</a> 导航栏</h4><ol><li>导航栏 Logo 你可以通过 themeConfig.logo 增加导航栏 Logo ，Logo 可以被放置在公共文件目录：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&#39;/assets/img/logo.png&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>禁用导航栏</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
navbar: false
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="侧边栏" tabindex="-1"><a class="header-anchor" href="#侧边栏" aria-hidden="true">#</a> 侧边栏</h4><ol><li>自动生成侧栏 如果你希望自动生成一个仅仅包含了当前页面标题（headers）链接的侧边栏，你可以通过 YAML front matter 来实现：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
sidebar: auto
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>全区配置自动侧边栏</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token string">&#39;auto&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30),d=[l];function r(t,c){return n(),s("div",null,d)}const p=e(i,[["render",r],["__file","VuePress.html.vue"]]);export{p as default};
