import { Router } from "express";
import UserController from "./usersController";
import isAuthenticated from "../../middlewares/auth";

const router = Router();

router.post("/register", UserController.createUser);
router.post("/login", UserController.login);
router.get("/me", isAuthenticated, UserController.getUser);
router.get("/logout", isAuthenticated, UserController.logout);

const userRouter = router;
export default userRouter;