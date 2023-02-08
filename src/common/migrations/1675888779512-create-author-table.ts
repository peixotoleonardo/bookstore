import { MigrationInterface, QueryRunner } from 'typeorm';

export class createAuthorTable1675888779512 implements MigrationInterface {
  name = 'createAuthorTable1675888779512';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "authors" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP, "deleted_at" TIMESTAMP, "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_d2ed02fabd9b52847ccb85e6b88" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "authors"`);
  }
}
