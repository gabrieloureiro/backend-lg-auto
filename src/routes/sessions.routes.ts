import { Router } from 'express'

import CreateSessionService from '@services/CreateSessionService'

const sessionsRouter = Router()

sessionsRouter.post('/', async (request, response) => {

  try {
    const { email, password } = request.body

    const authenticateAdmin = new CreateSessionService()

    const { admin, token } = await authenticateAdmin.execute({
      email,
      password
    })

    delete admin.password

    return response.json({ admin, token })

  } catch (err) {
    return response.status(400).json({ error: err.message })
  }

})

export default sessionsRouter




