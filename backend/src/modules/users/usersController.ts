import { PrismaClient } from '@prisma/client';
import { Request, Response } from "express";
import { hashPassword, comparePassword } from "../../utils/bcrypt";
import { validateUser } from './userValidator';
import { generateToken } from '../../utils/jwt';

const prisma = new PrismaClient();


export default class UserController {
    public static async createUser(req: Request, res: Response) {
        try {
            const user = validateUser(req.body);

            const existingUser = await prisma.user.findUnique({
                where: {
                    email: user.email
                },
            });
            if (existingUser) {
                return res.status(400).json({
                    message: "User with that email already exists",
                });
            }
            const newUser = await prisma.user.create({
                data: {
                    ...user,
                    password: await hashPassword(user.password),
                },
            });

            // set cookie
            const token = generateToken(newUser.id);

            res.setHeader("Authorization", `Bearer ${token}`);
            res.status(201).json({
                success: true,
                user: newUser,
                token
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Internal Server Error"
            })
        }
    }

    public static async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            const user = await prisma.user.findUnique({
                where: {
                    email,
                },
            });
            if (!user) {
                return res.status(400).json({
                    message: "Invalid email or password",
                });
            }
            const isPasswordValid = await comparePassword(password, user.password);
            if (!isPasswordValid) {
                return res.status(400).json({
                    message: "Invalid email or password",
                });
            }

            const token = generateToken(user.id);

            res.setHeader("Authorization", `Bearer ${token}`);
            res.status(200).json({
                success: true,
                user,
                token
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Internal Server Error"
            })
        }
    }

    public static async logout(req: Request, res: Response) {
        try {
            res.setHeader("Authorization", `Bearer `);
            res.status(200).json({
                success: true,
                message: "Logout successful"
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Internal Server Error"
            })
        }
    }

    public static async getUser(req: Request, res: Response) {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    // @ts-ignore
                    id: req.user
                },
                select: {
                    id: true,
                    email: true,
                    name: true
                }
            });
            res.status(200).json({
                success: true,
                user
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Internal Server Error"
            })
        }
    }
}