import { PrismaClient } from "../generated/client/index.js";

const globalForPrisma = /** @type {{ prisma: PrismaClient }} */ (global);

export const prisma =
  globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export * from "../generated/client/index.js";