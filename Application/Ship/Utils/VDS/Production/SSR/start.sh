#! /bin/bash

if [[ -f "$(pwd)/Variables.sh" ]]; then
   source "$(pwd)/Variables.sh"
else
   echo "File variables not found."
   exit 1
fi

source ~/.nvm/nvm.sh

node $(find "/var/www/$hostname/static/server" -name "server.*.js")