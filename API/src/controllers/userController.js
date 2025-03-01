import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const registerUser = async (req, res) => {
  const { email, name, pwd } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: { email, name, pwd },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar usuário' });
  }
};

export const loginUser = async (req, res) => {
  const { email, pwd } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || user.pwd !== pwd) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }
    res.json({ message: 'Login bem-sucedido!', user });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao processar login' });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
};
