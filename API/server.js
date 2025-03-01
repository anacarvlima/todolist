import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import userRoutes from './routes/userRoutes.js';
import taskRoutes from './routes/taskRoutes.js';

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);

const DATABASE_URL = process.env.DATABASE_URL;

async function main() {
  try {
    await prisma.$connect();
    console.log('✅ Banco de dados conectado com sucesso!');
    app.listen(DATABASE_URL, () => console.log(`🚀 Servidor rodando na porta ${DATABASE_URL}`));
  } catch (error) {
    console.error('❌ Erro ao conectar ao banco de dados:', error);
    process.exit(1);
  }
}

main();