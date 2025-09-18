import { updateValue } from "./document.js";

const socket = io();

function documentSelect(nome) {
    socket.emit("documentselect", nome, (text) => {
        updateValue(text);
    });
}

function emitText(text, nome) {
    socket.emit("texteditor", text, nome);
}

socket.on("texteditorclient", (text) => {
    updateValue(text);
});

export {
    emitText,
    documentSelect
}