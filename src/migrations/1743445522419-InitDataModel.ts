import {MigrationInterface, QueryRunner} from "typeorm";

export class InitDataModel1743445522419 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		return await queryRunner.query(`
                CREATE TABLE IF NOT EXISTS "user"
                (`
			+ `"id" SERIAL PRIMARY KEY,`
			+ `"name" VARCHAR(255) NOT NULL,`
			+ `"email" VARCHAR(255) NOT NULL,`
			+ `"created_at" TIMESTAMP DEFAULT NOW(),`
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		return await queryRunner.query(`
        DROP TABLE IF EXISTS "user";
		`);
	}

}
