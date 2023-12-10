#!/bin/bash

nodemon_directory="./backend"

cd "$nodemon_directory" && nodemon &

sleep 5

cd ..

npm run start-linux