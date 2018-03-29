#!/bin/bash

echo "Cloning REPO"
rm -rf QRL/
git clone --depth 1 https://github.com/theQRL/QRL 

cd QRL
echo "Building documentation"
python3 setup.py docs