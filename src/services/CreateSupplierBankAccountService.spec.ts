import { createConnection } from 'typeorm'
import CreateSupplierBankAccountService from './CreateSupplierBankAccountService'

describe('CreateSupplierBankAccount', () => {
  it('should be able to create a new supplier bank account', async () => {
    await createConnection('default');
    const createSupplierBankAccount = new CreateSupplierBankAccountService()
    const supplierBankAccount = await createSupplierBankAccount.execute({
      id_bank: '5c4a0336-e584-40e3-bd7d-221ebcbcf49d',
      id_supplier: '28c43135-4d4d-47e1-876a-25915d016f0e',
      type: 'PJ',
      account_number: '19999',
      agency_number: '19999',
    })

    expect(supplierBankAccount.id_bank).toBe('5c4a0336-e584-40e3-bd7d-221ebcbcf49d')
    expect(supplierBankAccount.id_supplier).toBe('28c43135-4d4d-47e1-876a-25915d016f0e')
    expect(supplierBankAccount.type).toBe('PJ')
    expect(supplierBankAccount.account_number).toBe('19999')
    expect(supplierBankAccount.agency_number).toBe('19999')

  })

  it('should not be able to create a new supplier bank account', async () => {

    const createSupplierBankAccount = new CreateSupplierBankAccountService()

    expect(createSupplierBankAccount.execute({
      id_bank: '5c4a0336-e584-40e3-bd7d-221ebcbcf49d',
      id_supplier: '28c43135-4d4d-47e1-876a-25915d016f0e',
      type: 'PJ',
      account_number: '19999',
      agency_number: '19999',
    })).rejects.toBeInstanceOf(Error)
  })
})
