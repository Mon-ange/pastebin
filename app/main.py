from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from . import models, database, config, router

models.Base.metadata.create_all(bind=database.engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=config.CORS_ALLOW_ORIGIN,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router.router)

# TODO trim db
