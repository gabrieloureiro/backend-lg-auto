import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('banks')
class Bank {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  number: string

  @Column()
  name: string

}

export default Bank
