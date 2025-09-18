import { emitText, documentSelect } from "./socket-front-document.js";

const parameters = new URLSearchParams(window.location.search);
const documentName = parameters.get("nome");

const textEditor = document.getElementById("document");
const documentTitle = document.getElementById("document-title");

documentTitle.value = documentName || "Documento sem título";

documentSelect(documentName);

textEditor.addEventListener("keyup", () => {
    emitText(textEditor.value, documentName);
})

function updateValue(text) {
    textEditor.value = text;
}

export {
    updateValue
}