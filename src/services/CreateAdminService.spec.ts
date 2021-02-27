import { hash } from 'bcryptjs';
import { createConnection } from 'typeorm'
import CreateAdminService from './CreateAdminService'

describe('CreateAdmin', () => {
  it('should be able to create a new admin', async () => {
    await createConnection('default');
    const createAdmin = new CreateAdminService()
    const admin = await createAdmin.execute({
      name: 'unit',
      email: 'unitadmin@test.com',
      password: '123'
    })


    expect(admin.name).toBe('unit')
    expect(admin.email).toBe('unitadmin@test.com')
    expect(admin.password).toBe('123')

  })

})
