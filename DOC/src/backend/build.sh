#!/usr/bin/env bash
set -o errexit

pip install -r requirements.txt

python manage.py collectstatic --no-input
python manage.py migrate

# Opcional: Rodar o script de setup inicial automaticamente no deploy
# python setup_initial.py