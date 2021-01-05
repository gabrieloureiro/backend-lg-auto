import { getCustomRepository } from 'typeorm'

import Bank from "@models/Bank"
import BanksRepository from "@repositories/BanksRepository"

interface Request {
  number: string
  name: string
}

class CreateBankService {
  public async execute({ number, name }: Request): Promise<Bank> {
    const banksRepository = getCustomRepository(BanksRepository)

    const bank = banksRepository.create({
      number,
      name
    })

    await banksRepository.save(bank)

    return bank
  }
}

export default CreateBankService
