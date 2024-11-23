import express from "express"
import { booksController } from "./books.controller";

const router = express.Router();


router.post("/" , booksController.createBookData)
router.get("/" , booksController.getBooksData);
router.get("/:productId" , booksController.getSingleBookData)
router.put("/:productId" , booksController.updateBookData)
router.delete("/:productId" , booksController.deleteBookData)

export const booksRoutes = router