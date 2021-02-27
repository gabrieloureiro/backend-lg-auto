import { createConnection } from 'typeorm'
import CreateBankService from './CreateBankService'

describe('CreateBank', () => {
  it('should be able to create a new bank', async () => {
    await createConnection('default');
    const createBank = new CreateBankService()
    const bank = await createBank.execute({
      name: 'unit test bank',
      number: '9999'
    })

    expect(bank.name).toBe('unit test bank')
    expect(bank.number).toBe('9999')

  })
})
