import { getRepository } from 'typeorm'
import ClientBankAccount from '@models/ClientBankAccount'

interface Request {
  id_bank: string
  id_client: string
  agency_number: string
  operation?: string
  account_number: string
  type: string
}

class CreateClientBankAccountService {
  public async execute({ id_bank, id_client, agency_number, operation, account_number, type }: Request): Promise<ClientBankAccount> {
    const clientBankAccountsRepository = getRepository(ClientBankAccount)

    const checkBankAccountExists = await clientBankAccountsRepository.findOne({
      where: { account_number }
    })

    if (checkBankAccountExists) {
      throw new Error('This bank account already exists.')
    }

    const clientBankAccount = clientBankAccountsRepository.create({
      id_bank,
      id_client,
      agency_number,
      operation,
      account_number,
      type
    })

    await clientBankAccountsRepository.save(clientBankAccount)

    return clientBankAccount
  }
}

export default CreateClientBankAccountService
