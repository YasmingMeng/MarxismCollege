from backend.app.schemas.screen import ScreenContent


def get_screen_content() -> ScreenContent:
    return ScreenContent(
        college_profile={
            "title": "马克思主义学院文化展示大屏",
            "subtitle": "理论铸魂 · 红色传承 · 实践育人",
            "stats": [
                {"label": "理论课程体系", "value": "6"},
                {"label": "红色实践基地", "value": "12"},
                {"label": "主题育人场景", "value": "3"},
            ],
        },
        digital_human={
            "role": "思政讲解数字人",
            "title": "欢迎走进马克思主义学院",
            "summary": "这里将承载学院介绍、专业背景、红色文化讲解与互动问答。后续可接入数字人视频流、语音播报、动作驱动和知识库服务。",
            "tags": ["学院概览", "专业导览", "红色讲解"],
        },
        scenarios=[
            {
                "id": "culture",
                "title": "学院文化",
                "eyebrow": "College Culture",
                "description": "展示学院发展脉络、师资力量、课程建设与育人成果。",
                "panel_title": "学院文化导览",
                "panel_summary": "聚焦学院历史沿革、学科建设、教学成果和师生风貌，形成可持续扩展的文化展示入口。",
                "keywords": ["学院沿革", "师资队伍", "育人成果"],
            },
            {
                "id": "major",
                "title": "专业背景",
                "eyebrow": "Discipline Context",
                "description": "呈现马克思主义理论学科体系、课程矩阵与研究方向。",
                "panel_title": "专业背景导览",
                "panel_summary": "围绕马克思主义基本原理、中国化时代化理论成果、思想政治教育等方向进行结构化展示。",
                "keywords": ["理论体系", "课程矩阵", "研究方向"],
            },
            {
                "id": "red",
                "title": "红色文化",
                "eyebrow": "Red Heritage",
                "description": "整合红色资源、革命精神谱系、实践研学与沉浸式教育内容。",
                "panel_title": "红色文化导览",
                "panel_summary": "连接红色地标、革命故事、精神谱系和实践活动，构建具有感染力的红色文化传播场景。",
                "keywords": ["红色资源", "革命精神", "实践研学"],
            },
        ],
        ticker_items=[
            "以理论学习筑牢信仰之基",
            "以红色资源激活育人场景",
            "以数字技术拓展思政表达",
            "以实践教学连接时代现场",
        ],
    )
