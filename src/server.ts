import 'reflect-metadata';
import express from 'express';
import swaggerUi from 'swagger-ui-express';

import createConnetion from './database/index';
import './shared/container';

import swaggerFile from './swagger.json';
import { router } from './routes';

createConnetion();
const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(3333, () => console.log('Server is running!'));
