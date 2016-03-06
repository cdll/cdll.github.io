#!/bin/bash
echo "--- Push changes on develop branch ---"
git checkout dev
git push
echo "--- Update master branch ---"
git checkout master
git pull
echo "--- Merge changes to master branch (using 'git rebase') ---"
git rebase develop
git push
echo "--- Checkout develop branch ---"
git checkout dev
echo "--- If everything is fine, your master is now the newest. ---"
