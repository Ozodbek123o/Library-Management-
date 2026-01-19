import express from 'express'
import sequelize from './connectionDB.js'
import User from './models/User.js'

const app = express()
app.use(express.json())

await sequelize.authenticate()
console.log('DB connected')

await sequelize.sync()

app.get('/users', async (req, res) => {
	const users = await User.findAll()
	res.json(users)
})

app.post('/users', async (req, res) => {
	const user = await User.create(req.body)
	res.status(201).json(user)
})

app.get('/users/:id', async (req, res) => {
	const user = await User.findByPk(req.params.id)
	res.json(user)
})

app.delete('/users/:id', async (req, res) => {
	await User.destroy({ where: { id: req.params.id } })
	res.json({ message: 'User deleted' })
})

app.listen(7777, () => {
	console.log('Server ishlayapti: http://localhost:7777')
})
