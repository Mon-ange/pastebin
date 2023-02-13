import datetime

from fastapi import FastAPI, Depends, Request
from sqlalchemy.orm import Session
from fastapi_pagination import Params
from fastapi_pagination.ext.sqlalchemy import paginate

from . import schemas, crud, models, database, config

models.Base.metadata.create_all(bind=database.engine)

app = FastAPI()


@app.post("/paste")
def add_paste(paste_create: schemas.PasteCreate,
              request: Request,
              db: Session = Depends(crud.get_db)):
    paste_time = datetime.datetime.now()
    expire_time = paste_time + datetime.timedelta(seconds=paste_create.lifetime)
    # TODO: how to get user ip behind reverse proxy
    paste = models.Paste(
        ip=request.client.host,
        poster=paste_create.poster,
        language=paste_create.language,
        content=paste_create.content,
        paste_time=paste_time,
        expire_time=expire_time,
        is_public=paste_create.is_public
    )
    crud.create_paste(db, paste)
    return {"token": paste.token}


@app.get("/paste/{token}")
def get_paste(token: str, db: Session = Depends(crud.get_db)):
    paste = crud.get_paste_by_token(db, token)
    if paste is None:
        return {"message": "game over"}
    return schemas.PasteGet.from_db_model(paste)


@app.get("/page/{page_num}")
def get_page(page_num: int, db: Session = Depends(crud.get_db)):
    page = paginate(db.query(models.Paste), Params(page=page_num, size=config.PAGE_LIMIT))
    page.items = [schemas.PasteGet.from_db_model(i) for i in page.items]
    return page
