#!/bin/bash

# Set path for publishing
echo -e "@cdek-ui-kit:registry=https://gitlab.cdek.ru/api/v4/projects/2094/packages/npm/\n//gitlab.cdek.ru/api/v4/projects/2094/packages/npm/:_authToken=${GITLAB_AUTH_TOKEN}">.npmrc

# Change version in package.json, add prefix to it
CURRENT_VERSION=$(node -p "require('./package.json').version")
NEW_VERSION="$CURRENT_VERSION"-"$STYLE_PREFIX"
echo "Change version from $CURRENT_VERSION to $NEW_VERSION"
npm version --no-git-tag-version $NEW_VERSION

# Build and publish prefixed version
echo "Start building and publishing prefixed version"
VITE_STYLE_PREFIX=$STYLE_PREFIX yarn build
npm publish