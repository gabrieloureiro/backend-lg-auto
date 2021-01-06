import { Router } from 'express'
import { getRepository } from 'typeorm'

import BankAccount from '@models/BankAccount'
import CreateBankAccountService from '@services/CreateBankAccountService'

const bankAccountsRouter = Router()

bankAccountsRouter.get('/', async (request, response) => {
  const bankAccountsRepository = getRepository(BankAccount)

  const bankAccounts = await bankAccountsRepository.find()

  return response.json(bankAccounts)
})

bankAccountsRouter.post('/', async (request, response) => {

  try {
    const { id_bank, agency_number, operation, account_number, type } = request.body

    const createBankAccount = new CreateBankAccountService()

    const bankAccount = await createBankAccount.execute({
      id_bank,
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

export default bankAccountsRouter




