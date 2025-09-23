import "./socket-front-index.js"
import { createDocument } from "./socket-front-index.js";

const documentList = document.getElementById("document-list");

const documentForm = document.getElementById("document-form");
const input = document.getElementById("input-form");

documentForm.addEventListener("submit", () => {
    const value = input.value;
    createDocument(value);
})

function setDocument(nome) {
    documentList.innerHTML += `<li><a href="document.html?nome=${nome}" class="document-card">${nome}</a></li>`;
}

function reloadIndex() {
    window.location.href = "/";
}

export {
    setDocument,
    reloadIndex
}