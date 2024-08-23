import { prisma } from '@documenso/prisma';

export type VerifyEmailProps = {
  token: string;
};

export const verifyEmail = async ({ userId }: { userId: number }) => {
  const updatedUser = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      emailVerified: new Date(),
    },
  });

  if (!updatedUser) {
    throw new Error('Something went wrong while verifying your email. Please try again.');
  }

  return !!updatedUser;
};
