const dbConfig = require('@config/database')
const Sequelize = require('sequelize')

const Bank = require('@models/Bank')

const connection = new Sequelize(dbConfig)

Bank.init(connection)

export default connection
