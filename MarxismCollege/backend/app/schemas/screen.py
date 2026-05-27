from pydantic import BaseModel


class StatItem(BaseModel):
    label: str
    value: str


class CollegeProfile(BaseModel):
    title: str
    subtitle: str
    stats: list[StatItem]


class DigitalHuman(BaseModel):
    role: str
    title: str
    summary: str
    tags: list[str]


class Scenario(BaseModel):
    id: str
    title: str
    eyebrow: str
    description: str
    panel_title: str
    panel_summary: str
    keywords: list[str]


class ScreenContent(BaseModel):
    college_profile: CollegeProfile
    digital_human: DigitalHuman
    scenarios: list[Scenario]
    ticker_items: list[str]
