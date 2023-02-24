# AMAZON IVS LAMBDA

## Description

This lambda function accepts api requests to create channels in the XInc's AWS IVS to provision livestream channels for each clients.

## Installation

```bash
yarn
```

## Dev mode

Leverages [ts-node](https://www.npmjs.com/package/ts-node) to run the app.

```bash
yarn dev
```

## Production

Directly running `yarn start` executes the build command in the background as a `prestart` hook.

```bash
# build
yarn build

# start
yarn start
```
