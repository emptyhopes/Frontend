#! /bin/bash

sudo apt-get update --yes && sudo apt full-upgrade --yes

sudo apt-get install nodejs npm --yes

temporary=$(mktemp --directory)

git clone "https://github.com/emptyhopes/frontend.git" "$temporary/frontend"

cd "$temporary/frontend"; npm install; npm run production:ssr:default

sudo rm --recursive --force "/var/www/build"

sudo cp --recursive $temporary/frontend/Build "/var/www/build"
sudo cp --recursive $temporary/frontend/node_modules "/var/www/build"

sudo rm --recursive --force "$temporary"

node $(find /var/www/build/static/server -name server.*.js)