#!/bin/bash

# Set path for publishing
echo -e "@cdek-ui-kit:registry=https://gitlab.cdek.ru/api/v4/projects/2094/packages/npm/\n//gitlab.cdek.ru/api/v4/projects/2094/packages/npm/:_authToken=${GITLAB_AUTH_TOKEN}">.npmrc

# Build and publish unprefixed version
echo "Start building and publishing unprefixed version"
yarn build
npm publish

# Remove after publishing
rm -rf dist

# Change version in package.json, add prefix to it
CURRENT_VERSION=$(node -p "require('./package.json').version")
NEW_VERSION="$CURRENT_VERSION"-prefixed
echo "Change version from $CURRENT_VERSION to $NEW_VERSION"
npm version --no-git-tag-version $NEW_VERSION

# Build and publish prefixed version
echo "Start building and publishing prefixed version"
yarn build-with-prefix
npm publish

# Remove changes in package.json
git restore package.json
