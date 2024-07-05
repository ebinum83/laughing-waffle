#!/usr/bin/env bash

# Check if ganache is installed
if ! command -v ganache &> /dev/null
then
    echo "Ganache is not installed. Installing..."
    npm i -g ganache
fi

# Start ganache with mnemonic
echo "Starting ganache..."
echo ""
ganache -m "mnemonic"
