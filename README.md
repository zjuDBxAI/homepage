# ZJU Database Lab Homepage - Vue 3 + Vite 版本

## 项目说明

这是浙江大学数据库实验室官网的 Vue 3 + Vite 单页应用版本，采用现代化的前端技术栈构建。

## 项目结构

```
homepage/
├── src/                      # Vue 源代码目录
│   ├── main.js              # 应用入口文件，配置路由
│   ├── App.vue              # 根组件
│   ├── components/          # 页面组件模块
│   │   ├── Header.vue       # 头部导航组件
│   │   ├── Footer.vue       # 页脚组件
│   │   ├── BannerSection.vue       # 首页横幅组件
│   │   ├── NewsSection.vue         # 新闻展示组件
│   │   ├── PublicationsSection.vue # 论文展示组件
│   │   ├── TeamSection.vue         # 团队成员组件
│   │   ├── ProjectsSection.vue     # 项目展示组件
│   │   ├── IncubatingSection.vue   # 孵化项目组件
│   │   └── ContactSection.vue      # 联系方式组件
│   ├── views/               # 页面视图组件
│   │   ├── Home.vue         # 首页，整合各个section组件
│   │   └── NewsDetail.vue   # 新闻详情页
│   ├── composables/         # 组合式函数
│   │   └── useLanguage.js   # 语言切换逻辑（中英文）
│   └── data/                # 数据文件
│       ├── newsData.js      # 新闻数据
│       ├── publicationsData.js  # 论文数据
│       ├── teamData.js      # 团队成员数据
│       └── projectsData.js  # 项目数据
├── public/                  # 静态资源目录
│   └── assets/              # 样式、图片、字体等资源
│       ├── css/             # 样式文件
│       ├── img/             # 图片资源
│       └── fonts/           # 字体文件
├── index.html               # HTML 入口文件
├── vite.config.js           # Vite 配置文件
├── package.json             # 项目依赖配置
├── start-dev.bat            # Windows 开发启动脚本
├── build-prod.bat           # Windows 生产构建脚本
├── update_publications.py   # Python版论文数据更新脚本
└── update-publications.js   # JavaScript版论文数据更新脚本

```

## 技术栈

- **Vue 3**: 采用 Composition API 构建
- **Vue Router 4**: 单页应用路由管理
- **Vite 4**: 现代化的前端构建工具，提供极速的开发体验
- **Bootstrap**: UI 框架和响应式布局
- **jQuery**: 插件支持（轮播、弹窗等交互效果）

## 主要功能

### 1. 单页应用架构

- 基于 Vue Router 的单页应用设计
- 页面路由：首页 (`/`)、新闻详情页 (`/news/:id`) 和医疗与药学智能体研究页 (`/research/medical-agents`)
- 首页医疗人工智能板块的 `Learn More` 入口链接到研究页，展示围术期智能体、药学毒性预测与归因智能体及相关成果。
- 平滑的页面切换体验

### 2. 语言切换

- 全局中英文双语支持
- 使用 Composition API 实现语言状态管理
- 语言设置保存在 localStorage，自动记忆用户偏好
- 所有组件共享统一语言状态

### 3. 响应式设计

- 移动端和桌面端自适应布局
- 针对移动端优化的样式和交互

### 4. 模块化组件

- 首页由多个独立的 section 组件组成
- 新闻、论文、团队、项目等模块化管理
- 组件复用性强，易于维护

## 开发指南

### 安装依赖

```bash
npm install
```

### 启动开发服务器

**使用 npm 命令:**

```bash
npm run dev
```

**或使用 Windows 批处理脚本:**

```cmd
start-dev.bat
```

开发服务器将在 `http://localhost:3000` 启动，并自动在浏览器中打开。

### 构建生产版本

**使用 npm 命令:**

```bash
npm run build
```

**或使用 Windows 批处理脚本:**

```cmd
build-prod.bat
```

构建结果将输出到 `dist` 目录，可直接部署到 Web 服务器。

### 预览生产版本

```bash
npm run preview
```

在本地预览生产构建的结果。

## 数据更新

### 更新论文数据

项目提供了两种更新论文数据的脚本：

**Python 版本:**

```bash
python update_publications.py
```

**JavaScript 版本:**

```bash
node update-publications.js
```

这些脚本会自动从指定数据源获取最新的论文信息并更新到 [src/data/publicationsData.js](src/data/publicationsData.js) 文件。

### 更新其他数据

- **新闻数据**: 编辑 [src/data/newsData.js](src/data/newsData.js)
- **团队成员**: 编辑 [src/data/teamData.js](src/data/teamData.js)
- **项目信息**: 编辑 [src/data/projectsData.js](src/data/projectsData.js)

## 项目特色

### 页面导航体验优化

- 新闻详情页进入时自动滚动到页面顶部，提供更好的阅读体验
- 使用 `router-link` 实现无刷新页面切换

### 静态资源处理

- 所有静态资源（CSS、图片、字体）放在 `public/assets` 目录
- 资源使用绝对路径引用，确保在任何路由下都能正确加载
- Vite 自动处理资源优化和缓存

### Vite 配置说明

项目的 Vite 配置 ([vite.config.js](vite.config.js)) 包含以下特性：

- **路径别名**:
  - `@` 指向 `src` 目录
  - `@assets` 指向 `public/assets` 目录
- **开发服务器**: 默认端口 3000，自动打开浏览器
- **构建优化**: 自动代码分割，将 Vue 和 Vue Router 提取为独立 chunk
- **SPA 模式**: 单页应用配置

## 开发注意事项

1. **路由链接**: 使用 `<router-link to="/path">` 替代 `<a href>` 进行站内导航
2. **资源路径**: 静态资源使用 `/assets/...` 绝对路径引用
3. **语言切换**: 通过 `useLanguage` composable 获取和修改语言状态
4. **数据管理**: 所有数据集中在 `src/data/` 目录管理，便于维护更新

## 浏览器兼容性

- 现代浏览器（Chrome、Firefox、Safari、Edge 最新版本）
- 不支持 IE 11 及更早版本

## 部署说明

1. 执行 `npm run build` 生成生产版本
2. 将 `dist` 目录下的所有文件上传到 Web 服务器
3. 配置服务器将所有路由重定向到 `index.html`（用于 SPA 路由支持）

### Nginx 配置示例

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 性能优化

- ✅ Vite 提供的极速热更新
- ✅ 自动代码分割和懒加载
- ✅ CSS 和 JavaScript 压缩
- ✅ 资源哈希命名，优化缓存策略
- ✅ 移动端响应式优化

## 联系方式

如有问题，请联系：<xiezl@zju.edu.cn>
