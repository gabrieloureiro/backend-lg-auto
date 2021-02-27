import { createConnection } from 'typeorm'
import CreateSupplierService from './CreateSupplierService'

describe('CreateSupplier', () => {
  it('should be able to create a new supplier', async () => {
    await createConnection('default');
    const createSupplier = new CreateSupplierService()
    const client = await createSupplier.execute({
      cpf: '01809876539',
      is_company: false,
      person_in_charge: 'Teste Unitario',
      cnpj: null,
      company_name: null,
      email: 'unit@test.com'
    })

    expect(client.cpf).toBe('01809876539')
    expect(client.cnpj).toBe(null)
    expect(client.person_in_charge).toBe('Teste Unitario')
    expect(client.email).toBe('unit@test.com')

  })

  it('should not be able to create a new supplier', async () => {

    const createSupplier = new CreateSupplierService()

    expect(createSupplier.execute({
      cpf: '01809876509',
      is_company: false,
      person_in_charge: 'Teste Unitario',
      cnpj: null,
      company_name: null,
      email: 'unit@test.com'
    })).rejects.toBeInstanceOf(Error)
  })
})
