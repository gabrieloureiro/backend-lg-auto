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
import Supplier from './Supplier'

@Entity('suppliers_bank_accounts')
class SupplierBankAccount {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  id_bank: string

  @OneToOne(() => Bank)
  @JoinColumn({ name: "id_bank" })
  bank: Bank

  @Column()
  id_supplier: string

  @ManyToOne(() => Supplier)
  @JoinColumn({ name: "id_supplier" })
  supplier: Supplier

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

export default SupplierBankAccount
