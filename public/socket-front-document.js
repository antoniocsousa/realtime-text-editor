import { updateValue, reloadDocument } from "./document.js";

const socket = io();

function documentSelect(nome) {
    socket.emit("documentselect", nome, (text) => {
        updateValue(text);
    });
}

function deleteDocument(nome) {
    socket.emit("deletedocument", nome);
}

function emitText(text, nome) {
    socket.emit("texteditor", text, nome);
}

socket.on("texteditorclient", (text) => {
    updateValue(text);
});

socket.on("successdelete", (nome) => {
    reloadDocument(nome);
});

export {
    emitText,
    documentSelect,
    deleteDocument
}