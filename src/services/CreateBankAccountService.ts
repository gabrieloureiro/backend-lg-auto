import { getRepository } from 'typeorm'
import BankAccount from '@models/BankAccount'
import Bank from '@models/Bank'

interface Request {
  id_bank: string
  agency_number: string
  operation: string
  account_number: string
  type: string
}

class CreateBankAccountService {
  public async execute({ id_bank, agency_number, operation, account_number, type }: Request): Promise<BankAccount> {
    const bankAccountsRepository = getRepository(BankAccount)
    const banksRepository = getRepository(Bank)

    const checkBankAccountExists = await bankAccountsRepository.findOne({
      where: { account_number }
    })

    if (checkBankAccountExists) {
      throw new Error('This bank account already exists.')
    }

    const bankAccount = bankAccountsRepository.create({
      id_bank,
      agency_number,
      operation,
      account_number,
      type
    })

    await bankAccountsRepository.save(bankAccount)

    return bankAccount
  }
}

export default CreateBankAccountService
