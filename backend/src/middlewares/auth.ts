import { Request, Response, NextFunction } from "express"
import { verifyToken } from "../utils/jwt";

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    const authorization = req.headers.authorization;
    const token = authorization?.split(" ")[1];

    // check if token is valid
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    // verify token
    const payload = verifyToken(token);

    // check if payload is valid
    if (!payload) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    // attach payload to request object
    // @ts-ignore
    req.user = payload;
    next();
};

export default isAuthenticated;