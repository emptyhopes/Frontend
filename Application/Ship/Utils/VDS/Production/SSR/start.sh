#! /bin/bash

if [[ -f "$(dirname $(readlink -f "$0"))/Variables.sh" ]]; then
   source "$(dirname $(readlink -f "$0"))/Variables.sh"
else
   echo "File variables not found."
   exit 1
fi

source ~/.nvm/nvm.sh

node $(find "/var/www/$hostname/static/server" -name "server.*.js")