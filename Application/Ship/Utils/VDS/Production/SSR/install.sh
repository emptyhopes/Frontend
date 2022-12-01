#! /bin/bash

sudo apt-get update --yes && sudo apt full-upgrade --yes

sudo apt-get install nodejs npm --yes

temporary=$(mktemp --directory)

git clone "https://github.com/emptyhopes/frontend.git" "$temporary/frontend"

cd "$temporary/frontend"; npm install; npm run production:ssr

sudo rm --recursive --force "/var/www/build"
sudo mkdir --parents "/var/www/build"
# sudo mkdir --parents "/var/www/build/node_modules"

sudo cp --recursive $temporary/frontend/Build/* "/var/www/build"
# sudo cp --recursive $temporary/frontend/node_modules/* "/var/www/build/node_modules"

sudo rm --recursive --force "$temporary"

node $(find /var/www/build -name server.*.js)