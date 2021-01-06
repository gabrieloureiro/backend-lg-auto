import express from 'express'

import banksRouter from './banks.routes'
import bankAccountsRouter from './bankAccounts.routes'

const Routes = express.Router()

Routes.use('/banks', banksRouter)
Routes.use('/bankAccounts', bankAccountsRouter)

export default Routes
