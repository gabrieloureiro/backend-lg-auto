import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateBanks1609871680149 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'banks',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'number',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('banks')
  }

}
