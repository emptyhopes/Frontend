#! /bin/bash

hostname="localhost"
temporary=$(mktemp --directory)

git clone "https://github.com/emptyhopes/frontend.git" "$temporary/frontend"

cd "$temporary/frontend"; npm install; npm run development

sudo rm --recursive --force "/var/www/$hostname"
sudo rm --force "/etc/nginx/sites-available/$hostname.conf"
sudo rm --force "/etc/nginx/sites-enabled/$hostname.conf"

sudo mkdir --parents --force "/var/www/$hostname/static"
sudo mkdir --parents --force "/etc/nginx/sites-available"
sudo mkdir --parents --force "/etc/nginx/sites-enabled"

sudo cp --recursive "$temporary/frontend/Build/static" "/var/www/$hostname"
sudo cp "$temporary/frontend/Application/Ship/Utils/Nginx/Development/nginx.conf" "/etc/nginx/nginx.conf"
sudo cp "$temporary/frontend/Application/Ship/Utils/Nginx/Development/sites-available/localhost.conf" "/etc/nginx/sites-available/$hostname.conf"

sudo ln --symbolic "/etc/nginx/sites-available/$hostname.conf" "/etc/nginx/sites-enabled/$hostname.conf"

sudo rm --recursive --force "$temporary"

sudo nginx -t

sudo systemctl start nginx.service
sudo systemctl restart nginx.service