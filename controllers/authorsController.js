import pool from "../connectionDB.js";

/**
 * GET /authors
 */
export const getAuthors = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, name FROM authors ORDER BY id ASC",
    );

    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({
      message: "Hamma avtor olishda hatolik",
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
      return res.status(400).json({
        message: "Поле name shart",
      });
    }

    const result = await pool.query(
      "INSERT INTO authors (name) VALUES ($1) RETURNING id, name",
      [name.trim()],
    );

    res.status(201).json({
      message: "Avtor muafaqiyatli koshildi",
      author: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      message: "Avtor создать kilishda hatolik",
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

    const result = await pool.query(
      "DELETE FROM authors WHERE id = $1 RETURNING id",
      [id],
    );

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "Avtor topilmadi",
      });
    }

    res.status(200).json({
      message: "Avtor ochirild",
    });
  } catch (error) {
    res.status(500).json({
      message: "Avtor ochirishda hatolik ",
      error: error.message,
    });
  }
};
