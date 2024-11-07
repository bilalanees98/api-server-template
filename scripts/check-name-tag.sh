#!/bin/bash

# Check if NAME is set
if [ -z "$NAME" ]; then
  echo "Error: NAME is not set. Usage: NAME=<name> npm run <any-script>"
  exit 1
fi

# Run the command passed to the script
"$@"
