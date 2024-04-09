import express from "express";
import { getBooks, putBooks } from "../controllers/client.js"

const router = express.Router();
router.get("/books", getBooks);
router.post("/books", putBooks);

export default router;