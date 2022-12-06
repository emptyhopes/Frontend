#! /bin/bash

sudo apt-get install git nginx nodejs npm cron --yes

sudo systemctl stop nginx.service

hostname="localhost"
temporary=$(mktemp --directory)

git clone "https://github.com/emptyhopes/frontend.git" "$temporary/frontend"

cd "$temporary/frontend"; npm install; npm run production:ssr:default

sudo rm --recursive --force "/var/www/$hostname"

sudo mkdir --parents "/var/www/$hostname/static"
sudo mkdir --parents "/var/www/$hostname/node_modules"

sudo cp --recursive "$temporary/frontend/Build/static" "/var/www/$hostname"
sudo cp --recursive "$temporary/frontend/node_modules" "/var/www/$hostname"
sudo cp --recursive "$temporary/frontend/Application/Ship/Utils/VDS/Production/SSR/start.sh" "/var/www/$hostname"

sudo rm --recursive --force "$temporary"

crontab -e