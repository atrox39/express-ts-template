import 'reflect-metadata';
import 'dotenv/config';

import app from './src/app';

app.listen(parseInt(process.env.PORT ?? '3000', 10));
