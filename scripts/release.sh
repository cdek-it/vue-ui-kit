#!/bin/bash

# Set path for publishing
echo -e "@cdek-ui-kit:registry=https://gitlab.cdek.ru/api/v4/projects/2094/packages/npm/\n//gitlab.cdek.ru/api/v4/projects/2094/packages/npm/:_authToken=${GITLAB_AUTH_TOKEN}">.npmrc

# Build and publish unprefixed version
yarn build
npm publish

# Remove after publishing
rm -rf dist
