import express from "express";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
import http from "http";
import { Server } from "socket.io";
import "./config/dbConnect.js";

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../public")));

const HTTPServer = http.createServer(app);

HTTPServer.listen(parseInt(port), () => {
    console.log("Server is running on port " + port);
});

const io = new Server(HTTPServer);

export default io;