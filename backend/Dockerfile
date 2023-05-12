FROM python:3.11

ENV PYTHONDONTWRITEBYCODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /code

RUN apt-get update

RUN pip install --upgrade pip

COPY requirements.txt /code/backend/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /code/backend/requirements.txt

COPY .. .
