import {
  getAllAuthors,
  createAuthorModel,
  deleteAuthorModel,
  updateAuthorModel,
} from "../models/authorsModel.js";

/**
 * GET /authors
 */
export const getAuthors = async (req, res) => {
  try {
    const authors = await getAllAuthors();
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({
      message: "Avtor olishda hatolik",
      error: error.message,
    });
  }
};

/**
 * POST /authors
 */
export const createAuthor = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name || name.trim() === "") {
      return res.status(400).json({ message: "Поле name shart!" });
    }

    const author = await createAuthorModel(name);
    res.status(201).json({ message: "Avtor создан", author });
  } catch (error) {
    res.status(500).json({
      message: "Hatolik avtor olishda",
      error: error.message,
    });
  }
};

/**
 * DELETE /authors/:id
 */
export const deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCount = await deleteAuthorModel(id);
    if (deletedCount === 0) {
      return res.status(404).json({ message: "Avtor topilmad" });
    }

    res.status(200).json({ message: "Avtor ochirild" });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Avtor qabul kivolishda hatolik ",
        error: error.message,
      });
  }
};

/**
 * PUT /authors/:id
 */
export const updateAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name || name.trim() === "") {
      return res.status(400).json({ message: "Поле name shart!" });
    }

    const updatedAuthor = await updateAuthorModel(id, name);
    if (!updatedAuthor) {
      return res.status(404).json({ message: "Avtor topilmad" });
    }

    res.status(200).json({ message: "Avtor обнавлен", author: updatedAuthor });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Avtor обновить kilishda hatolik",
        error: error.message,
      });
  }
};
