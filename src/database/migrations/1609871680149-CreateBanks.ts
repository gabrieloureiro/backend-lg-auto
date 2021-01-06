import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateBanks1609871680149 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'banks',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'number',
            type: 'varchar',
          },
          {
            name: 'name',
            type: 'varchar',
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('banks')
  }

}
