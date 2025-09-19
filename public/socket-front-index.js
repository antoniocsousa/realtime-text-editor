import { setDocument } from "./index.js";

const socket = io();

socket.emit("get_documents", (documents) => {
    documents.forEach(document => {
        setDocument(document.nome);
    });
});
