import express, { type Express, type Request, type Response, type NextFunction } from 'express';

import '@lib/config/logging';
import { corsHandler } from '@middleware/corsHandler';
import { loggingHandler } from '@middleware/loggingHandler';
import { routeNotFound } from '@middleware/routeNotFound';
import { server } from '@lib/config/config';
import { appRouter } from '@routers/app.router';

export const app: Express = express();

logging.log('----------------------------------------');
logging.log('Initializing API');
logging.log('----------------------------------------');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

logging.log('----------------------------------------');
logging.log('Logging & Configuration');
logging.log('----------------------------------------');
app.use(loggingHandler);
app.use(corsHandler);

logging.log('----------------------------------------');
logging.log('Define Controller Routing');
logging.log('----------------------------------------');
app.use('/', appRouter)

logging.log('----------------------------------------');
logging.log('Define Routing Error');
logging.log('----------------------------------------');
app.use(routeNotFound);

logging.log('----------------------------------------');
logging.log('Starting Server');
logging.log('----------------------------------------');
const httpServer = app.listen(server.SERVER_PORT, () => {
    logging.log('----------------------------------------');
    logging.log(`Server started on ${server.SERVER_HOSTNAME}:${server.SERVER_PORT}`);
    logging.log('----------------------------------------');
});

export const Shutdown = (callback: any) => httpServer && httpServer.close(callback);
