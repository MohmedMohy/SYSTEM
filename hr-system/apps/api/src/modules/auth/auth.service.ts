import { prisma } from "@hr/db";
import { hashPassword, comparePassword } from "../../core/utils/hash";

export const createUser = async (email: string, password: string) => {
    const hashed = await hashPassword(password);

    return prisma.user.create({
        data: {
            email,
            password: hashed,
        },
    });
};

export const validateUser = async (email: string, password: string) => {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) return null;

    const valid = await comparePassword(password, user.password);

    if (!valid) return null;

    return user;
};