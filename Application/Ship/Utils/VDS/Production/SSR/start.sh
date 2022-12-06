#! /bin/bash

hostname="localhost"

node $(find "/var/www/$hostname/static/server" -name "server.*.js")