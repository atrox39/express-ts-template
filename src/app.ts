import './configs/dependencies';
import express from 'express';
import { Container } from 'typedi';
import { Logger } from 'winston';
import { attachControllerInstances } from '@decorators/express';
import { AppDataSource } from './configs/database';
import { setupGlobalMiddlewares } from './configs/app';
import * as controllers from './controllers';

const logger = Container.get<Logger>('logger');
const app = express();

setupGlobalMiddlewares(app);
AppDataSource.initialize().then(() => {
  logger.info('Database connected successfully');
  attachControllerInstances(app, [
    new controllers.BaseController(),
    new controllers.AuthController(),
  ]).then(() => {
    logger.info('Success controllers');
  }).catch((err) => {
    logger.error(err);
  });
}).catch((err) => {
  logger.error(err);
  throw err;
});

export default app;
