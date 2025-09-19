import io from "./server.js";
import { findDocument, updateDocument, getDocuments } from "./services/docsServices.js";

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

    socket.on("texteditor", async (text, nome) => {
        const update = await updateDocument(nome, text);

        if (update.modifiedCount) {
            socket.to(nome).emit("texteditorclient", text);
        }
    });
});
