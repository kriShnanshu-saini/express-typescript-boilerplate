import { Router } from 'express';

export const appRouter = Router();

appRouter.get('/', (req, res, next) => {
    return res.status(200).json({ hello: 'world!' });
});
