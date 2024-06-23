#!/bin/bash

# array of directories to optimize
directories=(/public /src)

# loop through directories
for directory in "${directories[@]}"
do
  optimizt $directory
done