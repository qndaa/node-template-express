import "reflect-metadata";
import {DataSource} from 'typeorm';
import dotenv from "dotenv";

dotenv.config({});

if (!process.env.DB_PORT) {
	throw new Error("Missing environment variable: DB_PORT");
}

export const AppDataSource = new DataSource({
	type: "postgres",
	host: process.env.DB_HOST,
	port: parseInt(process.env.DB_PORT) || 5432,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	entities: ["src/entities/*.ts"],
	logger: "simple-console",
	logging: true,
	migrationsTableName: "custom_migration_table",
	migrations: ["src/migrations/*.ts"],
})