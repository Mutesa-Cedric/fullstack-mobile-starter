import { z } from "zod";

export const productSchema = z.object({
    name: z.string(),
    price: z.number(),
    description: z.string(),
});

export const validateProduct = (data: any) => {
    const product = productSchema.safeParse(data);
    if (!product.success) {
        throw new Error(product.error.errors[0].message);
    }
    return product.data;
};