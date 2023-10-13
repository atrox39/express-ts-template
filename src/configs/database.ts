import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  ...(process.env.DB_PASS && { password: process.env.DB_PASS }),
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [
    'src/models/**/*.ts',
  ],
  migrations: [],
  subscribers: [],
});
