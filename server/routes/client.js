import express from "express";
import { getBooks } from "../controllers/client.js"

const router = express.Router();
router.get("/books", getBooks);

export default router;