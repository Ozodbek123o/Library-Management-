import { DataTypes } from 'sequelize'
import sequelize from '../connectionDB.js'

const User = sequelize.define('User', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	fullname: {
		type: DataTypes.STRING,
		allowNull: false,
	},
})

export default User
