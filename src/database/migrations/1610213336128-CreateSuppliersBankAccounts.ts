import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateSuppliersBankAccounts1610213336128 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'suppliers_bank_accounts',
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
            name: 'id_supplier',
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
    await queryRunner.createForeignKey('suppliers_bank_accounts', new TableForeignKey({
      name: 'BankSupplierProvider',
      columnNames: ['id_bank'],
      referencedColumnNames: ['id'],
      referencedTableName: 'banks',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE'
    }))

    await queryRunner.createForeignKey('suppliers_bank_accounts', new TableForeignKey({
      name: 'SupplierProvider',
      columnNames: ['id_supplier'],
      referencedColumnNames: ['id'],
      referencedTableName: 'suppliers',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }))

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('suppliers_bank_accounts')
  }

}
