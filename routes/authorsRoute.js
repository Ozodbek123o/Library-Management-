import { Router } from "express";
import {
  getAuthors,
  createAuthor,
  deleteAuthor,
  updateAuthor,
} from "../controllers/authorsController.js";

const router = Router();

router.get("/", getAuthors);
router.post("/", createAuthor);
router.delete("/:id", deleteAuthor);
router.put("/:id", updateAuthor);

export default router;
