#!/bin/bash

set nodemon_directory="./backend"

cd %nodemon_directory% && start /B npx nodemon index.js &

timeout /t 5

cd ..

npm run start-windows