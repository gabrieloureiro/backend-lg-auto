import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn
} from 'typeorm'

import BankAccount from './ClientBankAccount'

@Entity('suppliers')
class Supplier {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  is_company: boolean

  @Column()
  company_name: string

  @Column()
  person_in_charge: string

  @Column()
  cpf: string

  @Column()
  cnpj: string

  @Column()
  email: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Supplier
