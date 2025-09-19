import "./socket-front-index.js"

const documentList = document.getElementById("document-list");

function setDocument(nome) {
    documentList.innerHTML += `<li><a href="document.html?nome=${nome}" class="document-card">${nome}</a></li>`;
}

export {
    setDocument
}