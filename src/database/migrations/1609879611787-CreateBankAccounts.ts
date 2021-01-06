import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export default class CreateBankAccounts1609879611787 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'bank_accounts',
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
    await queryRunner.createForeignKey('bank_accounts', new TableForeignKey({
      name: 'BankProvider',
      columnNames: ['id_bank'],
      referencedColumnNames: ['id'],
      referencedTableName: 'banks',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE'
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('bank_accounts', 'BankProvider')
    await queryRunner.dropTable('bank_accounts')
  }
}
