import User from '../models/User.js'

export const getAllUsers = async (req, res) => {
	const users = await User.findAll()
	res.json(users)
}

export const createUser = async (req, res) => {
	const user = await User.create(req.body)
	res.status(201).json(user)
}

export const getUserById = async (req, res) => {
	const user = await User.findByPk(req.params.id)
	res.json(user)
}

export const deleteUser = async (req, res) => {
	await User.destroy({ where: { id: req.params.id } })
	res.json({ message: 'User deleted' })
}
