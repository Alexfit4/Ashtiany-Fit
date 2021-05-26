import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import postRoutes from "./routes/clients.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors()); // ! DO NOT MOVE! Important for front end.
app.use(express.json());
app.use("/clients", postRoutes);

app.use(express.urlencoded({ extended: true }));

app.use(function (req, res) {
	res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

const CONNECTION_URL =
	"mongodb+srv://Alexfit4:1234@cluster0.f3gzd.mongodb.net/AshtianyFit?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
	.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() =>
		app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
	)
	.catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
