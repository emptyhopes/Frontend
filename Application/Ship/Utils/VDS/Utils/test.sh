#! /bin/bash

hostname="gartmann-art.ru"

curl --location -I http://$hostname.ru
curl --location -I http://en.$hostname.ru
curl --location -I http://ru.$hostname.ru

curl --location -I http://www.$hostname.ru
curl --location -I http://www.en.$hostname.ru
curl --location -I http://www.ru.$hostname.ru

curl --location -I https://$hostname.ru
curl --location -I https://en.$hostname.ru
curl --location -I https://ru.$hostname.ru

curl --location -I https://www.$hostname.ru
curl --location -I https://www.en.$hostname.ru
curl --location -I https://www.ru.$hostname.ru