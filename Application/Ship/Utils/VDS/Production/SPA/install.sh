#! /bin/bash

temporary=$(mktemp --directory)

git clone "https://github.com/emptyhopes/frontend.git" "$temporary/frontend"

if [[ -f "$temporary/frontend/Config/Variables.sh" ]]; then
   source "$temporary/frontend/Config/Variables.sh"
else
   echo "File variables not found."
   exit 1
fi

source ~/.nvm/nvm.sh

cd "$temporary/frontend"; npm install; npm run production:spa:default

sudo rm --recursive --force "/var/www/$hostname"
sudo rm --recursive --force "/var/www/html"
sudo rm --force "/etc/nginx/sites-available/default"
sudo rm --force "/etc/nginx/sites-enabled/default"
sudo rm --force "/etc/nginx/sites-available/$hostname.conf"
sudo rm --force "/etc/nginx/sites-enabled/$hostname.conf"

sudo mkdir --parents "/var/www/$hostname/static"
sudo mkdir --parents "/etc/nginx/sites-available"
sudo mkdir --parents "/etc/nginx/sites-enabled"

sudo cp --recursive "$temporary/frontend/Build/static" "/var/www/$hostname"
sudo cp "$temporary/frontend/Application/Ship/Utils/Nginx/Default/Production/SPA/nginx.conf" "/etc/nginx/nginx.conf"
sudo cp "$temporary/frontend/Application/Ship/Utils/Nginx/Default/Production/SPA/sites-available/$hostname.conf" "/etc/nginx/sites-available/$hostname.conf"

sudo ln --symbolic "/etc/nginx/sites-available/$hostname.conf" "/etc/nginx/sites-enabled/$hostname.conf"

sudo rm --recursive --force "$temporary"

sudo nginx -t

sudo systemctl start nginx.service
sudo systemctl restart nginx.service