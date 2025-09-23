import { emitText, documentSelect, deleteDocument } from "./socket-front-document.js";

const parameters = new URLSearchParams(window.location.search);
const documentName = parameters.get("nome");

const textEditor = document.getElementById("document");
const documentTitle = document.getElementById("document-title");
const deleteButton = document.getElementById("delete-btn")

documentTitle.value = documentName || "Documento sem título";

documentSelect(documentName);

textEditor.addEventListener("keyup", () => {
    emitText(textEditor.value, documentName);
});

function updateValue(text) {
    textEditor.value = text;
}

deleteButton.addEventListener("click", () => {
    deleteDocument(documentName);
});

function reloadDocument(nome) {
    if (nome === documentName) {
        alert(`Documento ${nome} foi deletado`);
        window.location.href = "/";
    }
}

export {
    updateValue,
    reloadDocument
}