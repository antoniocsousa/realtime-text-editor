import express from "express";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../public")));

app.listen(parseInt(port), () => {
    console.log("Server is running on port " + port);
});