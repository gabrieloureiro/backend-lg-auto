import { getRepository } from 'typeorm'

import Client from '@models/Client'

interface Request {
  is_company: boolean
  company_name?: string
  person_in_charge: string
  cpf: string
  cnpj?: string
  email?: string
}

class CreateClientService {
  public async execute({
    is_company,
    company_name,
    person_in_charge,
    cpf,
    cnpj,
    email
  }: Request): Promise<Client> {
    const clientsRepository = getRepository(Client)

    const checkClientExists = await clientsRepository.findOne(
      !cnpj ? { where: { cpf } } : { where: { cnpj } }
    )

    if (checkClientExists) {
      throw new Error('This client already exists.')
    }

    const client = clientsRepository.create({
      is_company,
      company_name,
      person_in_charge,
      cpf,
      cnpj,
      email
    })

    await clientsRepository.save(client)

    return client
  }
}

export default CreateClientService
