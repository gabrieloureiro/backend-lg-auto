import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn
} from 'typeorm'

import Bank from './Bank'

@Entity('bank_accounts')
class BankAccount {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  id_bank: string

  @OneToOne(() => Bank)
  @JoinColumn({ name: "id_bank" })
  bank: Bank

  @Column()
  agency_number: string

  @Column()
  operation: string

  @Column()
  account_number: string

  @Column()
  type: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default BankAccount
