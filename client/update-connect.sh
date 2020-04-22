#!/bin/bash
echo "updating local @blockstack/connect..."
cd ../../ux/packages/connect
echo "building custom @blockstack/connect..."
yarn build
cd ../../../Corona-tracker/client
echo "syncing custom @blockstack/connect with CoronaTracker..."
yarn add file:///Users/carter/Documents/covid-19/ux/packages/connect
yarn install && yarn run start
