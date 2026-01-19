import { DataTypes } from 'sequelize'
import sequelize from '../connectionDB.js'

const User = sequelize.define(
	'User',
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING(150),
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		role: {
			type: DataTypes.STRING(50),
			defaultValue: 'user',
		},
	},
	{
		tableName: 'users',
		timestamps: true,
		createdAt: 'created_at',
		updatedAt: false,
	},
)

export default User
