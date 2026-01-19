import express from 'express'
import authorsRoute from './routes/authorsRoute.js'
import booksRoute from './routes/booksRoute.js'
import borrowRoute from './routes/borrowRoute.js'
import categoriesRoute from './routes/categoriesRoute.js'
import usersRoute from './routes/usersRoute.js'

const app = express()
app.use(express.json())

app.use('/users', usersRoute)
app.use('/authors', authorsRoute)
app.use('/categories', categoriesRoute)
app.use('/books', booksRoute)
app.use('/borrow', borrowRoute)

export default app
