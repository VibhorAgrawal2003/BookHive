import Book from "../models/book.js";

export const getBooks = async (_req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: `Unable to fetch book details from the database.` });
  }
}

export const putBooks = async (req, res) => {
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
    res.status(500).json({ message: "Server error while adding book: " + err.message });
  }
}

export const searchByCategory = async (req, res) => {
  try {
    const { searchCategory } = req.query;
    const allowedCategories = ["Fiction", "Non-Fiction", "Educational"];

    if (!allowedCategories.includes(searchCategory)) {
      res.status(400).json({ message: "Bad request from client: " + err.message });
    }
    else {
      const books = await Book.find({ "category": searchCategory });
      res.status(200).json(books);
    }

  } catch (err) {
    res.status(500).json({ message: "Server error while searching by category: " + err.message });
  }
}

export const searchByQuery = async (req, res) => {
  try {
    const { searchQuery } = req.query;
    const books = await Book.find({ title: { $regex: searchQuery, $options: "i" }});
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: "Server error while searching by query: " + err.message })
  }
}