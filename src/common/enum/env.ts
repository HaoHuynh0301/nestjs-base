import * as dotenv from 'dotenv';

interface Env {
	// DATABASE_CONNECT: string;
	// DATABASE_PORT: number;
	// DATABASE_USER: string;
	// DATABASE_PASSWORD: string;
	// DATABASE_NAME: string;
	// DATABASE_HOST: string;
	// DATABASE_URL: string;

	// APP_PORT: number;
	// BASE_URL: string;

	REDIS_PORT: number;
	REDIS_PASSWORD: string;
	REDIS_HOST: string;
	NODE_ENV: string;

	GMAIL_ACCOUNT: string;
	GMAIL_APP_PASSWORD: string;
}

export const AppEnv: Env = {
	// DATABASE_CONNECT: process.env.DATABASE_CONNECT || 'mysql',
	// DATABASE_PORT: parseInt(process.env.DATABASE_PORT) || 3306,
	// DATABASE_USER: process.env.DATABASE,
	// DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
	// DATABASE_NAME: process.env.DATABASE_NAME,
	// DATABASE_HOST: process.env.DATABASE_HOST,
	// DATABASE_URL: process.env.DATABASE_URL,
	// APP_PORT: +process.env.APP_PORT || 3000,
	// BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
	REDIS_PORT: +process.env.REDIS_PORT || 6379,
	REDIS_PASSWORD: process.env.REDIS_PASSWORD,
	REDIS_HOST: process.env.REDIS_HOST,
	NODE_ENV: process.env.NODE_ENV || 'development',
	GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD,
	GMAIL_ACCOUNT: process.env.GMAIL_ACCOUNT,
};