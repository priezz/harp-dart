#!/bin/bash

sourceDir=$(pwd)
tempDir=/tmp/harp
compileDir=$tempDir/fortuna-al.com
localRepo=GitHub
branch=gh-pages

mkdir -p $tempDir

rm -rf $compileDir
cd $tempDir

git clone --origin $localRepo --branch $branch ssh://git@github.com/priezz/fortuna-al.com.git
cd $compileDir
rm -rf *

cd $sourceDir
npm run build-resources
npm run compile

cd $compileDir
git add -A
git commit -a -m "$(date)"
git push
