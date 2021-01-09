import { Router } from 'express'
import { getRepository } from 'typeorm'

import Admin from '@models/Admin'
import CreateAdminService from '@services/CreateAdminService'

import ensureAuthenticated from "@middlewares/ensureAuthenticated"

const adminsRouter = Router()

adminsRouter.use(ensureAuthenticated)

adminsRouter.get('/:id', async (request, response) => {
  const { id } = request.params

  const adminsRepository = getRepository(Admin)
  const admin = await adminsRepository.findOne(id)

  delete admin.password

  return response.json(admin)
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




