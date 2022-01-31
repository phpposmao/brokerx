import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateSpecificationsProperties1643408493519 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'specifications_properties',
        columns: [
          {
            name: 'property_id',
            type: 'uuid',
          },
          {
            name: 'specification_id',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      'specifications_properties',
      new TableForeignKey({
        name: 'FKSpecificationProperty',
        referencedTableName: 'specifications',
        referencedColumnNames: ['id'],
        columnNames: ['specification_id'],
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL',
      })
    );

    await queryRunner.createForeignKey(
      'specifications_properties',
      new TableForeignKey({
        name: 'FKPropertySpecification',
        referencedTableName: 'properties',
        referencedColumnNames: ['id'],
        columnNames: ['property_id'],
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('specifications_properties', 'FKSpecificationProperty');

    await queryRunner.dropForeignKey('specifications_properties', 'FKPropertySpecification');

    await queryRunner.dropTable('specifications_properties');
  }
}
