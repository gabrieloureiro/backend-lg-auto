const dbConfig = require('@config/database')
const Sequelize = require('sequelize')

const connection = new Sequelize(dbConfig)

export default connection
