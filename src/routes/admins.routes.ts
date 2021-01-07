import { Router } from 'express'
import { getRepository } from 'typeorm'

import Admin from '@models/Admin'
import CreateAdminService from '@services/CreateAdminService'

const adminsRouter = Router()

adminsRouter.get('/', async (request, response) => {
  const adminsRepository = getRepository(Admin)
  const admins = await adminsRepository.find()

  return response.json(admins)
})

adminsRouter.get('/:id', async (request, response) => {
  const { id } = request.params

  const adminsRepository = getRepository(Admin)
  const bank = await adminsRepository.findOne(id)

  return response.json(bank)
})

adminsRouter.post('/', async (request, response) => {

  try {
    const { name, email, password } = request.body

    const createAdmin = new CreateAdminService()

    const admin = await createAdmin.execute({
      name,
      email,
      password
    })

    delete admin.password

    return response.json(admin)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }

})

export default adminsRouter




