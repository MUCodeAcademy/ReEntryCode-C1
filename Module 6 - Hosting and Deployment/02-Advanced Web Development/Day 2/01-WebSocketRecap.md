# Web Sockets Review

Web sockets are a way for users to get real-time updates from other others. They work as a series of events. An event might be triggered by the user on the front end, which is sent to the server, which is then sent to other clients connected to the server.

Front end:

```js
function sendMessage(message) {
    socket.emit("message", message);
};
```

Back end:

```js
io.on("connection", (socket) => {
    console.log("New client connected");

    socket.on("message", (message) => {
        io.emit("message", message);
    });

    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
})
```