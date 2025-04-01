import {Router} from "express";
import {UserController} from '../controllers/user.controller';

const userRouter: Router = Router();

userRouter.get("/", UserController.GetUsers);
userRouter.get("/:id", UserController.GetUserById);

export default userRouter;