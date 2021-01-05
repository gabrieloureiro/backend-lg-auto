import { Router } from 'express'
import { getCustomRepository } from 'typeorm'

import BanksRepository from '@repositories/BanksRepository'
import CreateBankService from '@services/CreateBankService'

const banksRouter = Router()

banksRouter.get('/', async (request, response) => {
  const banksRepository = getCustomRepository(BanksRepository)
  const banks = await banksRepository.find()

  return response.json(banks)
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




