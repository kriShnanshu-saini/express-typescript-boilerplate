import express, { type Express } from 'express';

import '@lib/utils/logging';
import { corsHandler } from '@middleware/corsHandler';
import { loggingHandler } from '@middleware/loggingHandler';
import { routeNotFound } from '@middleware/routeNotFound';
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
app.use('/', appRouter);

logging.log('----------------------------------------');
logging.log('Define Routing Error');
logging.log('----------------------------------------');
app.use(routeNotFound);
