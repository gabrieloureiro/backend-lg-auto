import { getRepository } from 'typeorm'

import Admin from "@models/Admin"

interface Request {
  name: string
  email: string
  password: string
}

class CreateAdminService {
  public async execute({ name, email, password }: Request): Promise<Admin> {
    const adminsRepository = getRepository(Admin)

    const admin = adminsRepository.create({
      name,
      email,
      password
    })

    await adminsRepository.save(admin)

    return admin
  }
}

export default CreateAdminService
