import dotenv from 'dotenv'
import { Sequelize } from 'sequelize'

dotenv.config()

const sequelize = new Sequelize(process.env.DB_CONNECTION, {
	dialect: 'postgres',
	protocol: 'postgres',
	logging: false,
	dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false,
		},
	},
})

export default sequelize
