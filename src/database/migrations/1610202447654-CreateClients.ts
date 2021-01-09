import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClients1610202447654 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'clients',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'is_company',
            type: 'boolean',
            default: false
          },
          {
            name: 'company_name',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'person_in_charge',
            type: 'varchar',
          },
          {
            name: 'cpf',
            type: 'varchar',
          },
          {
            name: 'cnpj',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: true
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('clients')
  }

}
