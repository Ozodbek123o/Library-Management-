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

app.listen(7777, () => {
	console.log('Server ishlayapti: http://localhost:7777')
})
