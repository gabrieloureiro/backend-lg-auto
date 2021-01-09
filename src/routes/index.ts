import express from 'express'

import adminsRouter from './admins.routes'
import sessionsRouter from './sessions.routes'
import banksRouter from './banks.routes'
import clientsRouter from './clients.routes'
import suppliersRouter from './suppliers.routes'
import clientsBankAccountsRouter from './clientsBankAccounts.routes'
import suppliersBankAccountsRouter from './suppliersBankAccounts.routes'

const Routes = express.Router()

Routes.use('/admins', adminsRouter)
Routes.use('/sessions', sessionsRouter)
Routes.use('/banks', banksRouter)
Routes.use('/clients', clientsRouter)
Routes.use('/suppliers', suppliersRouter)
Routes.use('/clientsBankAccounts', clientsBankAccountsRouter)
Routes.use('/suppliersBankAccounts', suppliersBankAccountsRouter)

export default Routes
