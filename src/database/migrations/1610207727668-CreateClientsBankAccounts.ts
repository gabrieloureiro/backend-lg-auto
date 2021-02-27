import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateClientsBankAccounts1610207727668 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'clients_bank_accounts',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'id_bank',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'id_client',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'agency_number',
            type: 'varchar',
          },
          {
            name: 'operation',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'account_number',
            type: 'varchar',
          },
          {
            name: 'type',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          },
        ]
      })
    )
    // await queryRunner.createForeignKey('clients_bank_accounts', new TableForeignKey({
    //   name: 'BankClientProvider',
    //   columnNames: ['id_bank'],
    //   referencedColumnNames: ['id'],
    //   referencedTableName: 'banks',
    //   onDelete: 'RESTRICT',
    //   onUpdate: 'CASCADE'
    // }))

    // await queryRunner.createForeignKey('clients_bank_accounts', new TableForeignKey({
    //   name: 'ClientProvider',
    //   columnNames: ['id_client'],
    //   referencedColumnNames: ['id'],
    //   referencedTableName: 'clients',
    //   onDelete: 'CASCADE',
    //   onUpdate: 'CASCADE'
    // }))

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('clients_bank_accounts')
  }

}

