import { Router } from 'express'
import { getRepository } from 'typeorm'

import Client from '@models/Client'
import CreateClientService from '@services/CreateClientService'

import ensureAuthenticated from "@middlewares/ensureAuthenticated"

const clientsRouter = Router()

clientsRouter.use(ensureAuthenticated)

clientsRouter.get('/', async (request, response) => {
  const clientsRepository = getRepository(Client)

  const clients = await clientsRepository.find()

  return response.json(clients)
})

clientsRouter.post('/', async (request, response) => {

  try {
    const {
      is_company,
      company_name,
      person_in_charge,
      cpf,
      cnpj,
      email
    } = request.body

    const createClient = new CreateClientService()

    const client = await createClient.execute({
      is_company,
      company_name,
      person_in_charge,
      cpf,
      cnpj,
      email
    })

    return response.json(client)

  } catch (err) {
    return response.status(400).json({ error: err.message })
  }

})

export default clientsRouter



