import { Router } from 'express'
import { getRepository } from 'typeorm'

import SupplierBankAccount from '@models/SupplierBankAccount'
import CreateSupplierBankAccountService from '@services/CreateSupplierBankAccountService'

import ensureAuthenticated from "@middlewares/ensureAuthenticated"

const suppliersBankAccountsRouter = Router()

suppliersBankAccountsRouter.use(ensureAuthenticated)

suppliersBankAccountsRouter.get('/', async (request, response) => {
  const suppliersBankAccountsRepository = getRepository(SupplierBankAccount)

  const suppliersBankAccounts = await suppliersBankAccountsRepository.find()

  return response.json(suppliersBankAccounts)
})

suppliersBankAccountsRouter.post('/', async (request, response) => {

  try {
    const { id_bank, id_supplier, agency_number, operation, account_number, type } = request.body

    const createBankAccount = new CreateSupplierBankAccountService()

    const bankAccount = await createBankAccount.execute({
      id_bank,
      id_supplier,
      agency_number,
      operation,
      account_number,
      type
    })

    return response.json(bankAccount)

  } catch (err) {
    return response.status(400).json({ error: err.message })
  }

})

export default suppliersBankAccountsRouter
