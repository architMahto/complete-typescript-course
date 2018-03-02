import { Application, Request, Response } from 'express';
import { coursesRouter } from './routers/coursesRouter';

export function configRoutes(app: Application) {
  app.use('/api/courses', coursesRouter);

  app.use('/api/*', (req: Request, res: Response, next: any) => {
    res.status(404).json({message: `URL ${req.originalUrl} does not exist`});
  });
}