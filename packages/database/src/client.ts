import { PrismaClient } from "../generated/client/index.js";

/** @type {{ prisma?: import("../generated/client").PrismaClient }} */
const globalForPrisma = globalThis;

const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export { prisma };

// Re-export everything from the generated client
export * from "../generated/client/index.js";