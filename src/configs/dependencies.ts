/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/namespace */
import { Container } from 'typedi';
import { createLogger, transports, format, Logger } from 'winston';
import { AppDataSource } from './database';
import * as models from '../models';

const inject = (injection: {[key: string]: any}, logger: Logger) => {
  try {
    logger.info(`Model injection`);
    Object.keys(injection).forEach((model: string) => {
      Container.set(`${model}Model`, AppDataSource.getRepository(model));
      logger.info(`${model}Model injected successfully`);
    });
  } catch (error) {
    logger.error(error);
    throw error;
  }
};

const dependencies = () => {
  const logger = createLogger({
    transports: [new transports.Console()],
    format: format.combine(
      format.colorize(),
      format.timestamp(),
      format.printf(({ timestamp, level, message }) => `[${timestamp}] ${level}: ${message}`),
    ),
  });
  Container.set('logger', logger);
  inject(models, logger);
};

dependencies();
