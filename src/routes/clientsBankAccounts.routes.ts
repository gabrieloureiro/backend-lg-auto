import { Router } from 'express'
import { getRepository } from 'typeorm'

import ClientBankAccount from '@models/ClientBankAccount'
import CreateClientBankAccountService from '@services/CreateClientBankAccountService'

import ensureAuthenticated from "@middlewares/ensureAuthenticated"

const clientsBankAccountsRouter = Router()

clientsBankAccountsRouter.use(ensureAuthenticated)

clientsBankAccountsRouter.get('/', async (request, response) => {
  const clientsBankAccountsRepository = getRepository(ClientBankAccount)

  const clientsBankAccounts = await clientsBankAccountsRepository.find()

  return response.json(clientsBankAccounts)
})

clientsBankAccountsRouter.post('/', async (request, response) => {

  try {
    const { id_bank, id_client, agency_number, operation, account_number, type } = request.body

    const createBankAccount = new CreateClientBankAccountService()

    const bankAccount = await createBankAccount.execute({
      id_bank,
      id_client,
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

export default clientsBankAccountsRouter
