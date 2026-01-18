import pool from "../connectionDB.js";

/**
 * hamma avtor kabul kilish
 */
export const getAllAuthors = async () => {
  const result = await pool.query(
    "SELECT id, name FROM authors ORDER BY id ASC",
  );
  return result.rows;
};

/**
 * Создать yengi avtori
 * @param {string} name
 */
export const createAuthorModel = async (name) => {
  const result = await pool.query(
    "INSERT INTO authors (name) VALUES ($1) RETURNING id, name",
    [name.trim()],
  );
  return result.rows[0];
};

/**
 * Avtor id boicha ochirish
 * @param {number} id
 */
export const deleteAuthorModel = async (id) => {
  const result = await pool.query(
    "DELETE FROM authors WHERE id = $1 RETURNING id",
    [id],
  );
  return result.rowCount;
};

/**
 * Avtor обновить kilish
 * @param {number} id
 * @param {string} name
 */
export const updateAuthorModel = async (id, name) => {
  const result = await pool.query(
    "UPDATE authors SET name = $1 WHERE id = $2 RETURNING id, name",
    [name.trim(), id],
  );
  return result.rows[0]; // undefined agar topilmasa
};
