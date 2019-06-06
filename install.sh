#!/bin/bash

rm -rf common/node_modules
rm -rf backend/node_modules
rm -rf frontend/node_modules

cd common
npm i

cd ../backend
npm i

cd ../frontend
npm i

cd ..
