#!/bin/bash

initPath=$(pwd)
imagesPath=web/assets/images/books
echo $initPath
mkdir -p $imagesPath
cd $imagesPath
convert ../_books/* -format jpg -thumbnail 73x99 -enhance -quality 90 -antialias -set filename:f '%t_small' '%[filename:f].jpg';
convert ../_books/* -format jpg -thumbnail 146x198 -enhance -quality 90 -antialias -set filename:f '%t_medium' '%[filename:f].jpg';
convert ../_books/* -format jpg -thumbnail 227x307 -enhance -quality 90 -antialias -set filename:f '%t_large' '%[filename:f].jpg';
cd $initPath