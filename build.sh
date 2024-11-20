#!/bin/sh

# Install dependencies
yarn

# Run linter
yarn lint

# Run tests
yarn test --watch=false

# Build the application
yarn build