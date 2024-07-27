# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Install system dependencies
# RUN apt-get update && apt-get install -y \
#     build-essential \
#     libffi-dev \
#     libssl-dev \
#     && apt-get clean \
#     && rm -rf /var/lib/apt/lists/*

# Set environment variables
# ENV PYTHONDONTWRITEBYTECODE=1
# ENV PYTHONUNBUFFERED=1

# Set the working directory in the container
WORKDIR /app

COPY requirements.txt /app/

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

# Copy the current directory contents into the container at /app
COPY . /app/
# COPY .env /app/.env

# Set environment variables for Django
ENV DJANGO_SETTINGS_MODULE=rateme.settings
# ENV DATABASE_URL=postgres://user:password@db:5432/mydatabase
# ENV SECRET_KEY='django-insecure-d_*prs*jl^53f3(3g0&5#bo8qex9tdw4br#l)=*4$%xm&7^rl%'
# ENV DEBUG=True

# Make port 8000 available to the world outside this container
EXPOSE 8000

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "rateme.wsgi:application"]