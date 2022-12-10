#! /bin/bash

hostname=""

curl --location -I http://$hostname
curl --location -I http://en.$hostname
curl --location -I http://ru.$hostname

curl --location -I http://www.$hostname
curl --location -I http://www.en.$hostname
curl --location -I http://www.$hostname

curl --location -I https://$hostname
curl --location -I https://en.$hostname
curl --location -I https://ru.$hostname

curl --location -I https://www.$hostname
curl --location -I https://www.en.$hostname
curl --location -I https://www.$hostname