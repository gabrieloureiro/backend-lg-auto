import express from 'express'

import banksRouter from './banks.routes'

const Routes = express.Router()

Routes.use('/banks', banksRouter)

export default Routes
