// lib/prisma.ts

import { PrismaClient } from '@prisma/client';

// Declara uma variável global para armazenar a instância do Prisma
declare global {
  var prisma: PrismaClient | undefined;
}

// Cria a instância única do Prisma, reutilizando a existente em desenvolvimento
export const prisma = global.prisma || new PrismaClient();

// Em desenvolvimento, atribui a nova instância à variável global
if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}