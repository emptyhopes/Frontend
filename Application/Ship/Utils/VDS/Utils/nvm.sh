#! /bin/bash

temporary=$(mktemp --directory)

curl --silent --location https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh >"$temporary/install.sh"

bash "$temporary/install.sh"

source ~/.nvm/nvm.sh

nvm install node
