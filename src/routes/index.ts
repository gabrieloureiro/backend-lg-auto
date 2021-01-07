import express from 'express'

import adminsRouter from './admins.routes'
import sessionsRouter from './sessions.routes'
import banksRouter from './banks.routes'
import bankAccountsRouter from './bankAccounts.routes'

const Routes = express.Router()

Routes.use('/admins', adminsRouter)
Routes.use('/sessions', sessionsRouter)
Routes.use('/banks', banksRouter)
Routes.use('/bankAccounts', bankAccountsRouter)

export default Routes
