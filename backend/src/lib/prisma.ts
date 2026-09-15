import { PrismaClient } from '@prisma/client';

// Evita múltiplas instâncias do Prisma Client durante hot-reload em dev.
export const prisma = new PrismaClient();
