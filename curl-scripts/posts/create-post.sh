#!/bin/bash

API="http://localhost:4741"
URL_PATH="/new-post"

curl "${API}${URL_PATH}/" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "post": {
      "content": "'"${CONTENT}"'"
    }
  }'

echo
