from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Text, DateTime

from . import config
from .database import Base


class Paste(Base):
    __tablename__ = "paste"

    id = Column(Integer, primary_key=True)  # 主键
    token = Column(String(config.TOKEN_LENGTH), unique=True, index=True)
    ip = Column(Text)  # 来源ip
    poster = Column(Text)  # poster
    language = Column(Text)  # 语言
    content = Column(Text)  # 内容
    paste_time = Column(DateTime)  # 发布时间
    expire_time = Column(DateTime)  # 过期时间
    is_public = Column(Boolean)  # 是否公开
