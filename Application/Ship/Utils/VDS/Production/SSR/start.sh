#! /bin/bash

hostname="gartmann-art.ru"

source ~/.nvm/nvm.sh

node $(find "/var/www/$hostname/static/server" -name "server.*.js")