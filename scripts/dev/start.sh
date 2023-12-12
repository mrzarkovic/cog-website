#!/bin/bash

echo -e "Starting \e[92mCog Website ...\e[97m"
(cd ../.. && docker-compose -f docker-compose.yml -f docker-compose.dev.yml pull)
(cd ../.. && docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d)
