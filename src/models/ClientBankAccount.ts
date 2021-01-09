import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne
} from 'typeorm'

import Bank from './Bank'
import Client from './Client'

@Entity('clients_bank_accounts')
class ClientBankAccount {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  id_bank: string

  @OneToOne(() => Bank)
  @JoinColumn({ name: "id_bank" })
  bank: Bank

  @Column()
  id_client: string

  @ManyToOne(() => Client)
  @JoinColumn({ name: "id_client" })
  client: Client

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

export default ClientBankAccount
