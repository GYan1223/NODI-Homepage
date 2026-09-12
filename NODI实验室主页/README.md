# NODI Lab Homepage

NODI Lab 的中英文静态主页。网站不依赖构建工具、后端服务或第三方字体，可直接部署到 GitHub Pages。

## 仓库结构

当前 Git 仓库的根目录位于本文件夹的上一层。仓库首页应能直接看到：

```text
.github/workflows/deploy-pages.yml
NODI实验室主页/
```

部署工作流会把当前文件夹作为网站根目录上传，因此 GitHub Pages 地址不会包含额外的源码目录层级。

## 目录结构

```text
.
├── index.html
├── styles.css
├── script.js
├── .nojekyll
├── .gitignore
└── assets/images/
    ├── hero-jlu-dingxin-clean.jpg
    ├── nodi-logo.png
    ├── nodi-wechat-qr.jpg
    ├── gallery/
    └── people/
```

页面只引用相对路径，因此既可部署到用户或组织主页，也可部署到 `https://<account>.github.io/<repository>/` 形式的项目主页。

## GitHub Pages 部署

1. 在上一级目录执行 Git 提交，并推送到 GitHub 的 `main` 分支。
2. 确认仓库根目录包含 `.github/workflows/deploy-pages.yml`。
3. 打开仓库的 **Settings → Pages**。
4. 在 **Build and deployment** 中将 **Source** 设为 **GitHub Actions**。
5. 推送后查看 **Actions** 页面中的 `Deploy NODI Lab website to GitHub Pages`。部署完成后，工作流会给出网站地址。

工作流采用 GitHub 官方 Pages Actions，不需要安装 Node.js 依赖或执行构建命令。`.nojekyll` 同时保证改用分支直接发布时不会经过 Jekyll 处理。

## 本地预览

不要直接双击 `index.html` 检查最终效果。请在本目录启动静态服务器：

```bash
python3 -m http.server 8765
```

然后访问 `http://127.0.0.1:8765/`。

## 内容维护

- `index.html`：页面结构、静态元数据和基础中文内容。
- `styles.css`：排版、颜色、响应式布局、动效和打印样式。
- `script.js`：中英文文案、成员、活动、新闻、招生公告和论文列表。
- `assets/images/people/`：经过缩放并清除元数据的成员照片。
- `assets/images/gallery/`：经过压缩并清除元数据的活动照片。

新增图片时应使用小写英文文件名和连字符，避免空格、冒号及仅大小写不同的文件名。提交前应清除 EXIF/GPS 元数据，并控制图片尺寸；成员头像最长边建议不超过 720px，活动照片最长边建议不超过 1800px。

## 图片与打印保护

活动照片带有 `NODI Lab` 水印，并禁用了常见的右键菜单、拖拽和选择操作。页面还会拦截常见的 `Ctrl/Cmd + P` 快捷键；通过浏览器菜单进入打印时，打印预览和输出只显示禁止打印提示。

这些前端措施只能降低直接复制和打印的便利性，无法阻止截图、开发者工具访问或绕过浏览器样式。需要公开展示的图片仍应使用适当分辨率并保留水印。

## 上线前检查

- `index.html` 必须位于工作流指定的 `NODI实验室主页/` 目录。
- GitHub Pages 的 Source 必须选择 **GitHub Actions**。
- 所有本地图片、CSS 和 JavaScript 请求应返回 200。
- 中英文切换、导航锚点、详情展开、成员展开和活动筛选应可用。
- 桌面端与移动端均不应出现横向滚动条。
- 不要提交 `.DS_Store`、原始成员照片或带 EXIF/GPS 信息的工作素材；这些文件已由 `.gitignore` 排除。

## 浏览器支持

建议使用近期版本的 Chrome、Edge、Safari 或 Firefox。页面在不支持部分视觉特性的浏览器中仍可阅读，动效也会遵循系统的“减少动态效果”设置。
