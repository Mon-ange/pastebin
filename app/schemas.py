from pydantic import BaseModel

from . import models


class PasteCreate(BaseModel):
    poster: str
    language: str
    content: str
    lifetime: int
    is_public: bool


class PasteGet(BaseModel):
    token: str
    poster: str
    language: str
    content: str
    paste_time: float
    expire_time: float
    is_public: bool

    @classmethod
    def from_db_model(cls, paste: models.Paste):
        return cls(
            token=paste.token,
            poster=paste.poster,
            language=paste.language,
            content=paste.content,
            paste_time=paste.paste_time.timestamp(),
            expire_time=paste.expire_time.timestamp(),
            is_public=paste.is_public
        )
