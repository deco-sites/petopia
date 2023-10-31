#!/bin/bash

# Start the socket server
deno run --allow-net --allow-read services/socket.ts &

# Wait for the socket server to start (adjust the port if necessary)
wait-for-localhost --port 7000  

# Run the server
deno task bundle && deno run -A  --watch=tailwind.css,sections/,functions/,loaders/,actions/,workflows/,accounts/,.env dev.ts
