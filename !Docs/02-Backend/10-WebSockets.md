# What are Web Sockets?

Simply put, a socket is a form of connection that is opened between a client and a server to allow continuous updates. To think about it another way, if we take an example like a chat room, think of it like this:

1. User calls in to the 'server' to ask for data, then leaves the line open.
2. Other users do the same, and tell the server any new data they have. Only the server can hear that new data.
3. Any time the server gets new data, it immediately tells everyone who is currently connected.
4. When the user navigates away form the site, they hang up.

# How are they implemented?

Because it is done with a connection from client to server and vice-versa, it requires code on both ends to work. Basically you need to do the following:

1. Set up the server to allow for socket connections (simplest to do with the `socket.io` package which we will cover shortly).
2. Set up handler functions to handle whatever incoming socket events you decide. The event names for these are chosen by you, so think of them like variables.
3. Set up the front-end to automatically connect to the server's socket.
4. Set the front-end to send and handle socket events and the code needed to do so.

From there you can use functions to send out events, or listen for certain events to happen. Let's take a further look in the next lesson.
