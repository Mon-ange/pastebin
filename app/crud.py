import datetime
import string
from sqlalchemy.orm import Session
import random

from . import database, models, config


def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()


def token_generate():
    return ''.join([random.choice(string.ascii_letters + string.digits)
                    for _ in range(config.TOKEN_LENGTH)])


def token_loop(db: Session):
    while True:
        token = token_generate()
        if db.query(models.Paste).filter(models.Paste.token == token).first() is None:
            return token


def create_paste(db: Session, paste: models.Paste):
    paste.token = token_loop(db)
    db.add(paste)
    db.commit()
    return paste.id


def get_paste_by_token(db: Session, token: str):
    return db.query(models.Paste).filter(models.Paste.token == token).first()


# def get_pastes_by_pagenum(db:Session, pagenum:int):
#     return paginate(db.query(models.Paste))


