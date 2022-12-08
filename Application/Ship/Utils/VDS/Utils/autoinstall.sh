#! /bin/bash

# Update and upgrade system
sudo apt-get update --yes && sudo apt-get upgrade --yes

# Remove not use packages
sudo apt-get autoremove --yes

# Install packages
sudo apt-get install git nginx certbot python3-certbot-nginx --yes

# SWAP

sudo fallocate -l 2048M /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile

sudo cp /etc/fstab /etc/fstab.back

echo "/swapfile none swap sw 0 0" | sudo tee -a /etc/fstab

# NVM ( node@latest and npm@latest )

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash

source ~/.nvm/nvm.sh

nvm install node

npm install --global npm@latest

# Install letsencrypt SSL certificate

sudo certbot
