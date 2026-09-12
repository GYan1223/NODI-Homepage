# NODI Lab Website

NODI 实验室中英文静态主页。网站源码位于 [`NODI实验室主页/`](./NODI实验室主页/)，仓库根目录中的 GitHub Actions 工作流会检查并发布该目录。

## 部署到 GitHub Pages

1. 将本仓库推送到 GitHub，默认分支保持为 `main`。
2. 在仓库 **Settings → Pages → Build and deployment** 中将 Source 设为 **GitHub Actions**。
3. 推送 `main` 后，`.github/workflows/deploy-pages.yml` 会检查 JavaScript、本地资源路径和打印保护，再发布 `NODI实验室主页/`。

本地预览和内容维护说明见 [`NODI实验室主页/README.md`](./NODI实验室主页/README.md)。

## 提交前检查

```bash
cd NODI实验室主页
node --check script.js
node scripts/check-site.mjs
python3 -m http.server 8765
```

浏览器打开 `http://127.0.0.1:8765/`。不要直接双击 `index.html`，否则部分浏览器行为与 GitHub Pages 环境不同。
