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

export {
    findDocument,
    updateDocument,
    getDocuments
}