import { z } from "zod";

export const userSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
});

export const validateUser = (data: any) => {
    const user = userSchema.safeParse(data);
    if (!user.success) {
        throw new Error(user.error.errors[0].message);
    }
    return user.data;
}

