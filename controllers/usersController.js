import { pool } from '../connectionDB.js' // DB pool

export const getUsers = async (req, res) => {
	try {
		const result = await pool.query('SELECT * FROM users') // users jadvali
		res.json(result.rows)
	} catch (err) {
		console.error(err)
		res.status(500).json({ error: 'Server xatoligi' })
	}
}

export const addUser = async (req, res) => {
	const { name, email } = req.body
	try {
		const result = await pool.query(
			'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
			[name, email]
		)
		res.status(201).json(result.rows[0])
	} catch (err) {
		console.error(err)
		res.status(500).json({ error: 'Server xatoligi' })
	}
}

export const updateUser = async (req, res) => {
	const { id } = req.params
	const { name, email } = req.body
	try {
		const result = await pool.query(
			'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
			[name, email, id]
		)
		if (result.rows.length === 0) {
			return res.status(404).json({ error: 'Foydalanuvchi topilmadi' })
		}
		res.json(result.rows[0])
	} catch (err) {
		console.error(err)
		res.status(500).json({ error: 'Server xatoligi' })
	}
}

export const deleteUser = async (req, res) => {
	const { id } = req.params
	try {
		const result = await pool.query(
			'DELETE FROM users WHERE id = $1 RETURNING *',
			[id]
		)
		if (result.rows.length === 0) {
			return res.status(404).json({ error: 'Foydalanuvchi topilmadi' })
		}
		res.json({ message: "Foydalanuvchi o'chirildi", user: result.rows[0] })
	} catch (err) {
		console.error(err)
		res.status(500).json({ error: 'Server xatoligi' })
	}
}
