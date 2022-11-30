#! /bin/bash

sudo apt-get update --yes && sudo apt full-upgrade --yes

sudo apt-get install nginx nodejs npm --yes

temporary=$(mktemp --directory)

git clone "https://github.com/emptyhopes/frontend.git" "$temporary/frontend"

cd "$temporary/frontend"; npm install; npm run production:spa

sudo rm --recursive --force "/var/www/build"
sudo rm --recursive --force "/etc/nginx/sites-available"
sudo rm --recursive --force "/etc/nginx/sites-enabled"

sudo mkdir --parents "/var/www/build"

sudo mkdir --parents "/etc/nginx"
sudo mkdir --parents "/etc/nginx/sites-available"
sudo mkdir --parents "/etc/nginx/sites-enabled"

sudo cp --recursive $temporary/frontend/Build/* "/var/www/build"
sudo cp "$temporary/frontend/Application/Ship/Utils/Nginx/nginx.conf" "/etc/nginx/nginx.conf"
sudo cp "$temporary/frontend/Application/Ship/Utils/Nginx/sites-available/localhost.conf" "/etc/nginx/sites-available/localhost.conf"

sudo ln --symbolic "/etc/nginx/sites-available/localhost.conf" "/etc/nginx/sites-enabled/localhost.conf"

sudo rm --recursive --force "$temporary"

sudo nginx -t
sudo systemctl restart nginx