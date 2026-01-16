import dotenv from 'dotenv'
import { Pool } from 'pg'
dotenv.config()

export const pool = new Pool({
	connectionString: process.env.DB_CONNECTION,
	ssl: {
		rejectUnauthorized: true,
	},
})

pool
	.connect()
	.then(() => console.log('DB Ulandik'))
	.catch(err => console.error(err))
