import { Router } from 'express'
import { getRepository } from 'typeorm'

import Supplier from '@models/Supplier'
import CreateSupplierService from '@services/CreateSupplierService'


const suppliersRouter = Router()

// suppliersRouter.use(ensureAuthenticated)

suppliersRouter.get('/', async (request, response) => {
  const suppliersRepository = getRepository(Supplier)

  const suppliers = await suppliersRepository.find()

  return response.json(suppliers)
})

suppliersRouter.post('/', async (request, response) => {

  try {
    const {
      is_company,
      company_name,
      person_in_charge,
      cpf,
      cnpj,
      email
    } = request.body

    const createSupplier = new CreateSupplierService()

    const supplier = await createSupplier.execute({
      is_company,
      company_name,
      person_in_charge,
      cpf,
      cnpj,
      email
    })

    return response.json(supplier)

  } catch (err) {
    return response.status(400).json({ error: err.message })
  }

})

export default suppliersRouter




