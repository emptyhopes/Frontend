#! /bin/bash

sudo apt-get install git nodejs npm nginx --yes

sudo systemctl stop nginx.service

temporary=$(mktemp --directory)

git clone "https://github.com/emptyhopes/frontend.git" "$temporary/frontend"

cd "$temporary/frontend"; npm install; npm run production:ssr:default

sudo rm --recursive --force "/var/www/build"

sudo mkdir --parents "/var/www/build/static"
sudo mkdir --parents "/var/www/build/node_modules"

sudo cp --recursive "$temporary/frontend/Build/static" "/var/www/build"
sudo cp --recursive "$temporary/frontend/node_modules" "/var/www/build"

sudo rm --recursive --force "$temporary"

# node $(find "/var/www/build/static/server" -name "server.*.js")