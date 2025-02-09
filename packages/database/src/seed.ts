import { prisma, Role } from "./client";
import * as bcrypt from 'bcrypt';
import type { User } from "../generated/client";

const DEFAULT_USERS = [
  // Add your own user to pre-populate the database with
  {
    name: "Tim Apple",
    email: "tim@apple.com",
    password: "password",
    role: Role.ADMIN,
  },
] as Array<Partial<User>>;

(async () => {
  try {
    await Promise.all(
      DEFAULT_USERS.map(async(user) =>{
        const hashedPassword = await bcrypt.hash(user.password!, 10);
      return        prisma.user.upsert({
          where: {
            email: user.email!,
          },
          update: {
            ...user,
            password: hashedPassword,
          },
          create: {
            email: user.email!,
            name: user.name,
            role: user.role,
            password: hashedPassword,
          },
        })
  })

    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();