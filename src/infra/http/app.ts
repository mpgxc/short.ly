import 'dotenv/config';
import 'reflect-metadata';
import 'express-async-errors';

import express from 'express';
import morgan from 'morgan';

import '@app/container';

import { routes } from './routes';

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.use('/api', routes);

export { app };
