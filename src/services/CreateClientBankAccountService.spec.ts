import { createConnection } from 'typeorm'
import CreateClientBankAccountService from './CreateClientBankAccountService'

describe('CreateClientBankAccount', () => {
  it('should be able to create a new client bank account', async () => {
    await createConnection('default');
    const createClientBankAccount = new CreateClientBankAccountService()
    const clientBankAccount = await createClientBankAccount.execute({
      id_bank: '5c4a0336-e584-40e3-bd7d-221ebcbcf49d',
      id_client: '28c43135-4d4d-47e1-876a-25915d016f0e',
      type: 'PF',
      account_number: '9999',
      agency_number: '9999',
    })

    expect(clientBankAccount.id_bank).toBe('5c4a0336-e584-40e3-bd7d-221ebcbcf49d')
    expect(clientBankAccount.id_client).toBe('28c43135-4d4d-47e1-876a-25915d016f0e')
    expect(clientBankAccount.type).toBe('PF')
    expect(clientBankAccount.account_number).toBe('9999')
    expect(clientBankAccount.agency_number).toBe('9999')

  })

  it('should not be able to create a new client bank account', async () => {

    const createClientBankAccount = new CreateClientBankAccountService()

    expect(createClientBankAccount.execute({
      id_bank: '5c4a0336-e584-40e3-bd7d-221ebcbcf49d',
      id_client: '28c43135-4d4d-47e1-876a-25915d016f0e',
      type: 'PF',
      account_number: '9999',
      agency_number: '9999',
    })).rejects.toBeInstanceOf(Error)
  })
})
