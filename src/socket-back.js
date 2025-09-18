import io from "./server.js";

const documents = [
    {
        nome: "JavaScript",
        texto: ""
    },
    {
        nome: "teste",
        texto: ""
    }
];

io.on("connection", (socket) => {
    console.log("um cliente se conectou ID: " + socket.id);

    socket.on("documentselect", (nome, updateValue) => {
        socket.join(nome);

        const document = findDocument(nome);

        if (document) {
            updateValue(document.texto);
        }
    });

    socket.on("texteditor", (text, nome) => {
        const document = findDocument(nome);

        if (document) {
            document.texto = text;
            socket.to(nome).emit("texteditorclient", text);
        }
    });
});

function findDocument(nome) {
    const document = documents.find(document => document.nome == nome);

    return document;
}