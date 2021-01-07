import { getRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import Admin from "@models/Admin"

interface Request {
  email: string
  password: string
}

interface Response {
  admin: Admin
  token: string
}

class CreateSessionService {
  public async execute({ email, password }: Request): Promise<Response> {
    const adminsRepository = getRepository(Admin)

    const admin = await adminsRepository.findOne({ where: { email } })

    if (!admin) {
      throw new Error('Incorrect email/password combination.')
    }

    const passwordMatched = await compare(password, admin.password)

    if (!passwordMatched) {
      throw new Error('Incorrect email/password combination.')
    }

    const token = sign({}, '9a82cc18e25c46c4a76fb8f6c90d00da', {
      subject: admin.id,
      expiresIn: '1d'
    })

    return {
      admin,
      token
    }

  }
}

export default CreateSessionService
