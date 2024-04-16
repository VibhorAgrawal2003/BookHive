import express from "express";
import { getBooks, putBooks, searchByCategory, searchByQuery } from "../controllers/client.js"

const router = express.Router();
router.get("/books", getBooks);
router.post("/books", putBooks);
router.get("/books/category", searchByCategory);
router.get("/books/search", searchByQuery);

export default router;