import { setDocument, reloadIndex } from "./index.js";

const socket = io();

socket.emit("get_documents", (documents) => {
    documents.forEach(document => {
        setDocument(document.nome);
    });
});

function createDocument(value) {
    socket.emit("createdocument", value);
}

socket.on("successdelete", (nome) => {
    reloadIndex();
});

export {
    createDocument
}
