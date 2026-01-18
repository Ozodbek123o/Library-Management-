import { Router } from "express";
import {
  getAuthors,
  createAuthor,
  deleteAuthor,
} from "../controllers/authorsController.js";

const router = Router();

router.get("/", getAuthors);
router.post("/", createAuthor);
router.delete("/:id", deleteAuthor);

export default router;
