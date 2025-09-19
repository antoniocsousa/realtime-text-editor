import mongoose from "mongoose";

const docSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    texto: {type: String}
});

const Docs = mongoose.model("docs", docSchema);

export { Docs };