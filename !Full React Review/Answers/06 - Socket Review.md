## Sockets

1. What are sockets?

- Sockets are used to connect multiple users to a server in real time. Used for chat features, multiplayer games, anytime you need to send data between users in real time.

2. How do you implement sockets?

- Install/import socket.io and socket.io-client.
- Initialize the server.
- Someone on the site will trigger an event, like a chat message.
- It will send that event to the server along with some data.
- The server then emits that event to other users.
- The users' page updates with the new information.