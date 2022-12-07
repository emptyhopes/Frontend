#! /bin/bash

sudo apt-get update --yes && sudo apt-get upgrade --yes
sudo apt-get autoremove --yes

sudo apt-get install git nginx certbot python3-certbot-nginx --yes