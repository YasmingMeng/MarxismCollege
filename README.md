# 马克思学院大屏展示项目

## 项目定位

用于搭建马克思主义学院文化展示大屏。当前版本采用前后端分层架构：前端使用 React + Tailwind CSS，后端使用 Python FastAPI，先完成主界面框架、深蓝正红视觉主题、数字人展示空间和三个主题场景入口。

## 目录结构

```text
.
├── backend
│   ├── app
│   │   ├── api
│   │   ├── core
│   │   ├── schemas
│   │   ├── services
│   │   └── main.py
│   └── requirements.txt
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── styles
│   ├── index.html
│   ├── tailwind.config.js
│   └── vite.config.js
├── package.json
└── assets
```

## 安装依赖

前端：

```bash
npm install
```

后端：

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r backend/requirements.txt
```

## 运行方式

后端接口：

```bash
npm run api
```

前端页面：

```bash
npm run dev
```

浏览器访问：

```text
http://localhost:5173
```

后端健康检查：

```text
http://localhost:8000/health
```

## 后续扩展

- 数字人接入：替换 `frontend/src/components/DigitalHumanPanel.jsx` 中的展示舞台。
- 场景内容接入：扩展 `backend/app/services/screen_content.py` 或接入数据库。
- 页面路由接入：在 `frontend/src/pages` 中扩展三类场景页面。
- 后台管理接入：新增后端管理接口，再由前端管理页维护展示内容。
