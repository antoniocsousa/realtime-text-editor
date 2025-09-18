import io from "./server.js";

io.on("connection", (socket) => {
    console.log("um cliente se conectou ID: " + socket.id);

    socket.on("texteditor", (text) => {
        socket.broadcast.emit("texteditorclient", text);
    });
});