#!/usr/bin/env sh

# abort on errors
# set -e

# build
# npm run generate

# copy built files to remote server using rsrync, delete files that does'nt exists in source copied from
# rsync --archive --verbose --delete --chmod=a+rwx ./dist/ root@beta.ooba.kg:/var/www/ooba-job
