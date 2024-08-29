import dotenv from 'dotenv';
import { cleanEnv, host, port, str, testOnly } from 'envalid';

dotenv.config();

export const env = cleanEnv(process.env, {
    NODE_ENV: str({
        devDefault: testOnly('test'),
        choices: ['development', 'production']
    }),
    HOST: host({ devDefault: testOnly('localhost'), default: 'localhost' }),
    PORT: port({ devDefault: testOnly(8000), default: 8000 }),
});
console.info('🟢 Environment variables loaded successfully.');

export const TEST = env.isTest;
export const DEVELOPMENT = env.isDevelopment;