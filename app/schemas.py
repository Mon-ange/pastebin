from pydantic import BaseModel


class PasteCreate(BaseModel):
    poster: str
    language: str
    content: str
    lifetime: int
    is_public: bool


class PasteGet(BaseModel):
    poster: str
    language: str
    content: str
    paste_time: int
    expire_time: int
    is_public: bool

    class Config:
        orm_mode = True
