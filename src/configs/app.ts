import express from 'express';
import type { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

export const setupGlobalMiddlewares = (app: Application): void => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors({ origin: '*' }));
  app.use(helmet());
  if (process.env.NODE_ENV === 'production') app.use(morgan('combined'));
  else app.use(morgan('dev'));
};
