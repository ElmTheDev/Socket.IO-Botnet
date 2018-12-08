# Socket.io Botnet
## (NOTICE) THIS WAS MADE ONLY FOR EDUCATIONAL TO SHOW HOW SOCKET.IO COULD BE USED AS BOTNET FOR RESEARCH PURPOSES

# How to use

1. Install module 'socket.io' on server you want to host server on and run it using 'node index.js' 
2. On your client machine install 'socket.io-client' module, change URL of socket.io server on first line and run 'node control.js'. You will be prompted to input password you configured in index.js
3. On your bot machine install 'socket.io-client' and 'child_process' modules, change URL of socket.io server on first line and authKey to key you set in index.js! After that you can run the bot. It will connect to your server and you can control it 


# Commands
  - help - Display all commands
  - botcount - Display count of connected bots
  - platform - Shows you how much bots are running each platform
  - eval <command> - Evaluates JavaScript code
  - exec <command> - Execues shell command

# Modules Used:
  # Server
    - socket.io
  
  # Client
    - socket.io-client
    - child_process
  
# Ports Used:
  - 7035 (Operator connecting port)
  - 7305 (Bot connecting port)
  
# What is botnet capable of doing?
Currently it's capable of evaluating any JavaScript code through 'eval' command and executing any shell command using 'exec'

# TODO
  - HTML Bot
  - HTML Operator

# Disclaimer
This repository is for academic purposes, the use of this software is your responsibility.
