import express from "express";
import { getBooks, putBooks, searchByCategory } from "../controllers/client.js"

const router = express.Router();
router.get("/books", getBooks);
router.post("/books", putBooks);
router.get("/books/search", searchByCategory);

export default router;