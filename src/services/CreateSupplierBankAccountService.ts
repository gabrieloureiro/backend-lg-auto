import { getRepository } from 'typeorm'
import SupplierBankAccount from '../models/SupplierBankAccount'

interface Request {
  id_bank: string
  id_supplier: string
  agency_number: string
  operation?: string
  account_number: string
  type: string
}

class CreateSupplierBankAccountService {
  public async execute({ id_bank, id_supplier, agency_number, operation, account_number, type }: Request): Promise<SupplierBankAccount> {
    const supplierBankAccountsRepository = getRepository(SupplierBankAccount)

    const checkBankAccountExists = await supplierBankAccountsRepository.findOne({
      where: { account_number }
    })

    if (checkBankAccountExists) {
      throw new Error('This bank account already exists.')
    }

    const supplierBankAccount = supplierBankAccountsRepository.create({
      id_bank,
      id_supplier,
      agency_number,
      operation,
      account_number,
      type
    })

    await supplierBankAccountsRepository.save(supplierBankAccount)

    return supplierBankAccount
  }
}

export default CreateSupplierBankAccountService
