import { Router } from 'express'
import { getRepository } from 'typeorm'

import Bank from '@models/Bank'
import CreateBankService from '@services/CreateBankService'

const banksRouter = Router()

banksRouter.get('/', async (request, response) => {
  const banksRepository = getRepository(Bank)
  const banks = await banksRepository.find()

  return response.json(banks)
})

banksRouter.get('/:id', async (request, response) => {
  const { id } = request.params

  const banksRepository = getRepository(Bank)
  const bank = await banksRepository.findOne(id)

  return response.json(bank)
})

banksRouter.post('/', async (request, response) => {

  try {
    const { number, name } = request.body

    const createBank = new CreateBankService()

    const bank = await createBank.execute({
      number,
      name
    })

    return response.json(bank)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }

})

export default banksRouter




