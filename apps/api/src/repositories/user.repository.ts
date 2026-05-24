import { prisma } from '@/lib/prisma.js';
import type { SignUpData } from '@shared/src/types/auth-data-types.js';

const createUser = async ({
  firstName,
  lastName,
  username,
  password,
}: SignUpData) => {
  const user = await prisma.user.create({
    data: {
      username,
      firstName,
      lastName,
      password,
    },
  });

  return user;
};

export default { createUser };
