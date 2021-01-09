import { getRepository } from 'typeorm'

import Supplier from '@models/Supplier'

interface Request {
  is_company: boolean
  company_name?: string
  person_in_charge: string
  cpf: string
  cnpj?: string
  email?: string
}

class CreateSupplierService {
  public async execute({
    is_company,
    company_name,
    person_in_charge,
    cpf,
    cnpj,
    email
  }: Request): Promise<Supplier> {
    const suppliersRepository = getRepository(Supplier)

    const checkSupplierExists = await suppliersRepository.findOne(
      !cnpj ? { where: { cpf } } : { where: { cnpj } }
    )

    if (checkSupplierExists) {
      throw new Error('This supplier already exists.')
    }

    const supplier = suppliersRepository.create({
      is_company,
      company_name,
      person_in_charge,
      cpf,
      cnpj,
      email
    })

    await suppliersRepository.save(supplier)

    return supplier
  }
}

export default CreateSupplierService
