import { Request, Response } from "express"

const Bank = require('@models/Bank')

module.exports = {
  async store(request: Request, response: Response) {
    const { number, name } = request.body

    const bank = await Bank.create({ number, name })

    return response.json(bank)
  }
}
