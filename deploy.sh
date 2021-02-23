#!/usr/bin/env sh

# Make sure that the script returns error
set -e

# Generate static files
npm run blog:build

# Go to the generated folder
cd blog/.vuepress/dist

# If it is published to a custom domain name
echo 'tuzov.su' > CNAME

git init
git add -A
git commit -m 'deploy'

# If posted to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# If posted to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:80maker/80maker.github.io.git master:gh-pages

cd -