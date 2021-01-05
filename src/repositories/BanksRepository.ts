import { EntityRepository, Repository } from 'typeorm'

import Bank from '@models/Bank'

@EntityRepository(Bank)
class BanksRepository extends Repository<Bank> {

}

export default BanksRepository
