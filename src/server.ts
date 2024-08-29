import { app } from './app';
import { env } from '@lib/config/envConfig';
import '@lib/utils/logging'

logging.log('----------------------------------------');
logging.log('Starting Server');
logging.log('----------------------------------------');

const httpServer = app.listen(env.PORT, () => {
    const { HOST, PORT, NODE_ENV } = env;

    logging.log('----------------------------------------');
    logging.log(`Server (${NODE_ENV}) is running on http://${HOST}:${PORT}`);
    logging.log('----------------------------------------');
});

export const Shutdown = (callback: any) => httpServer && httpServer.close(callback);
