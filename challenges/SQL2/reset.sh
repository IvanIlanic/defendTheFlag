#!/bin/bash
rm -f app/lab.db
docker compose down
docker compose up --build -d
