import { Docs } from "../models/docs.js";

function findDocument(nome) {
    const document = Docs.findOne({
        nome: nome
    });

    return document;
}

function updateDocument(nome, texto) {
    const update = Docs.updateOne({nome: nome}, {
        $set: {
            texto: texto
        }
    });

    return update;
}

function getDocuments() {
    const documents = Docs.find();

    return documents;
}

function createDocument(nome) {
    const document = Docs.insertOne({nome: nome, texto: ""});

    return document;
}

function deleteDocument(nome) {
    const result = Docs.deleteOne({nome: nome});

    return result;
}

export {
    findDocument,
    updateDocument,
    getDocuments,
    createDocument,
    deleteDocument
}