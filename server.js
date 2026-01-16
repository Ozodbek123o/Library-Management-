import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`Server ishlayapti: http://localhost:${PORT}`)
})
