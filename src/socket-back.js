import io from "./server.js";
import { findDocument, updateDocument, getDocuments, createDocument, deleteDocument } from "./services/docsServices.js";

io.on("connection", (socket) => {
    socket.on("get_documents", async (returnDocuments) => {
        const documents = await getDocuments();

        returnDocuments(documents);
    });

    socket.on("documentselect", async (nome, updateValue) => {
        socket.join(nome);

        const document = await findDocument(nome);

        if (document) {
            updateValue(document.texto);
        }
    });

    socket.on("createdocument", async (value) => {
        const existDocument = (await findDocument(value)) !== null;

        if (existDocument) {
            socket.emit("existdocument", value);
        } else {
            const result = await createDocument(value);
            console.log(result);
        }
    });

    socket.on("texteditor", async (text, nome) => {
        const update = await updateDocument(nome, text);

        if (update.modifiedCount) {
            socket.to(nome).emit("texteditorclient", text);
        }
    });

    socket.on("deletedocument", async (nome) => {
        const result = await deleteDocument(nome);
        console.log(result);

        if (result.deletedCount) {
            io.emit("successdelete", nome);
        }
    });
});
