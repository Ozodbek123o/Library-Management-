import {pool} from '../db_connection.js';

export const getAllCategories = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM categories')
    res.json(result.rows)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const createCategory = async (req, res) => {
  try {
    const newCategory = req.body

    const result = await pool.query(
      `INSERT INTO categories 
      (name)
      VALUES ($1, $2)
      RETURNING *`,
      [newCategory.name, newCategory.created_at]
    )

    res.status(201).json({
      message: 'Category qo‘shildi',
      data: result.rows[0],
    })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const deleteCategory = async (req, res) => {
  try {
    const id = Number(req.params.id)

    const result = await pool.query(
      'DELETE FROM categories WHERE id = $1 RETURNING *',
      [id]
    )

    res.json({
      message: 'Muvaffaqiyatli o‘chirildi',
      data: result.rows[0],
    })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}
S