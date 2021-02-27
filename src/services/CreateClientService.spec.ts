import { createConnection } from 'typeorm'
import CreateClientService from './CreateClientService'

describe('CreateClient', () => {
  it('should be able to create a new client', async () => {
    await createConnection('default');
    const createClient = new CreateClientService()
    const client = await createClient.execute({
      cpf: '09809876539',
      is_company: false,
      person_in_charge: 'Teste Unitario',
      cnpj: null,
      company_name: null,
      email: 'unit@test.com'
    })

    expect(client.cpf).toBe('09809876539')
    expect(client.cnpj).toBe(null)
    expect(client.person_in_charge).toBe('Teste Unitario')
    expect(client.email).toBe('unit@test.com')

  })

  it('should not be able to create a new client', async () => {

    const createClient = new CreateClientService()

    expect(createClient.execute({
      cpf: '09809876509',
      is_company: false,
      person_in_charge: 'Teste Unitario',
      cnpj: null,
      company_name: null,
      email: 'unit@test.com'
    })).rejects.toBeInstanceOf(Error)
  })
})
