from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

from . import config

if config.SQLALCHEMY_DATABASE_URL.startswith("sqlite://"):
    engine = create_engine(
        config.SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
    )
else:
    engine = create_engine(
        config.SQLALCHEMY_DATABASE_URL
    )
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
