#!/bin/bash

echo "Building Web Starter Kit Project.";
cd ./webapp/;
gulp;

cd ../;

echo "Deleting files in ./www";
rm -rf ./www/*;

echo "Copying files from ./webapp/dist to ./www";
cp -r ./webapp/dist/* ./www/;
