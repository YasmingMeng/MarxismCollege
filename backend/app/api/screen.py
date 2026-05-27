from fastapi import APIRouter

from backend.app.schemas.screen import ScreenContent
from backend.app.services.screen_content import get_screen_content

router = APIRouter(tags=["screen"])


@router.get("/screen-content", response_model=ScreenContent)
def read_screen_content() -> ScreenContent:
    return get_screen_content()
