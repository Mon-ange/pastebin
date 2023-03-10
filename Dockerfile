FROM python:3.10.10-alpine
COPY . /pastebin
WORKDIR /pastebin
RUN pip install -r requirements.txt
EXPOSE 80
CMD uvicorn app.main:app --host 0.0.0.0 --port 80
