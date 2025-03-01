import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const task = await prisma.task.create({
      data: { title, description, completed: false },
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar tarefa' });
  }
};

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar tarefas' });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  try {
    const updatedTask = await prisma.task.update({
      where: { id },
      data: { title, description, completed },
    });
    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar tarefa' });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.task.delete({ where: { id } });
    res.json({ message: 'Tarefa deletada com sucesso' });
  } catch (error) {
    res.status(400).json({ error: 'Erro ao deletar tarefa' });
  }
};
