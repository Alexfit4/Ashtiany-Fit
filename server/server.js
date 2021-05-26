import express from "express";
const app = express()
const port = 3001

import cors from "cors";

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors()); // ! DO NOT MOVE! Important for front end. 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
  });
app.listen(port, () => console.log(`Example app listening on port port!`))