from pydantic import BaseModel
from datetime import datetime
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
    paste_time: datetime
    expire_time: datetime
    is_public: bool

    @classmethod
    def from_db_model(cls, paste: models.Paste):
        return cls(
            token=paste.token,
            poster=paste.poster,
            language=paste.language,
            content=paste.content,
            paste_time=paste.paste_time,
            expire_time=paste.expire_time,
            is_public=paste.is_public
        )
