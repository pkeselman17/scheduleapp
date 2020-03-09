import pg, {PoolConfig} from 'pg';
import 'dotenv';
import logger from '../src/shared/Logger';

const dbConfig: PoolConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT !== undefined ?  parseInt(process.env.DB_PORT) : undefined,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
};

const pool = new pg.Pool(dbConfig);
pool.on('error', (err) => {
    logger.error("idle client error", err.message, err.stack)
});

export function query(text: string, params: any, callback: any) {
    return pool.query(text, params, callback);
}