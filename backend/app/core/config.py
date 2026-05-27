from pydantic import BaseModel


class Settings(BaseModel):
    project_name: str = "马克思学院大屏后端服务"
    cors_origins: list[str] = ["http://localhost:5173", "http://127.0.0.1:5173"]


settings = Settings()
