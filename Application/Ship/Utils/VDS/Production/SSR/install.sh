#! /bin/bash

sudo apt-get install git nginx nodejs npm cron --yes

sudo systemctl stop nginx.service

temporary=$(mktemp --directory)

git clone "https://github.com/emptyhopes/frontend.git" "$temporary/frontend"

cd "$temporary/frontend"; npm install; npm run production:ssr:default

sudo rm --recursive --force "/var/www/build"

sudo mkdir --parents "/var/www/build/static"
sudo mkdir --parents "/var/www/build/node_modules"

sudo cp --recursive "$temporary/frontend/Build/static" "/var/www/build"
sudo cp --recursive "$temporary/frontend/node_modules" "/var/www/build"
sudo cp --recursive "$temporary/frontend/Application/Ship/Utils/VDS/Production/SSR/start.sh" "/var/www/build"

sudo rm --recursive --force "$temporary"

crontab -e