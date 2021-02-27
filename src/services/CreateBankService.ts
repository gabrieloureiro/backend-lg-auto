import { getRepository } from 'typeorm'

import Bank from "../models/Bank"
interface Request {
  number: string
  name: string
}

class CreateBankService {
  public async execute({ number, name }: Request): Promise<Bank> {
    const banksRepository = getRepository(Bank)

    const bank = banksRepository.create({
      number,
      name
    })

    await banksRepository.save(bank)

    return bank
  }
}

export default CreateBankService
