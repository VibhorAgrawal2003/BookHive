import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import morgan from "morgan";

// Routes
import clientRoutes from "./routes/client.js";

// Data imports
import Book from "./models/book.js";
import { dataBook } from "./data/index.js";

// Configuration
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use("/client", clientRoutes);

// CRUD
app.get("/books", async (_req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: `Unable to fetch book details from the database.` });
  }
});

app.post("/books", async (req, res) => {
  try {
    const { title, author, category, description, imageUrl, downloadUrl } = req.body;

    const newBook = new Book({
      title,
      author,
      category,
      description,
      imageUrl,
      downloadUrl
    });

    await newBook.save();
    res.status(201).json({ message: "Book added successfully", book: newBook });

  } catch (err) {
    console.error("Error adding book:", err);
    res.status(500).json({ message: "Unable to add book" });
  }

});

// Database
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    // Add all the data once
    // Book.insertMany(dataBook);

  })
  .catch((error) => {
    console.log(`${error} : Unable to connect to the database.`);
  });
