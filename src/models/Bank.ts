import { Sequelize } from 'sequelize/types'

const { Model, DataTypes } = require('sequelize')

class Bank extends Model {
  static init(sequelize: Sequelize) {
    super.init({
      number: DataTypes.INTEGER,
      name: DataTypes.STRING
    }, {
      sequelize
    })
  }
}

module.exports = Bank
