const socket = io();

const textEditor = document.getElementById("document");

textEditor.addEventListener("keyup", () => {
    socket.emit("texteditor", textEditor.value);
})

socket.on("texteditorclient", (text) => {
    textEditor.value = text;
});