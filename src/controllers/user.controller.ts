import {Request, Response} from "express";
import {UserService} from "../services/user.service";
import {logger} from '../util/logger';

export class UserController {
  static async GetUserById(req: Request, res: Response) {
    logger.debug(`Getting user by id: ${req.params.id}`);

    const id = req.params.id;
    const user = await UserService.getUserById(id);

    if (!user) {
      res.status(404).json({error: "User not found"});
      return;
    }

    res.json(user);
  }

  static async GetUsers(req: Request, res: Response) {
    logger.debug("Getting all users");

    const users = await UserService.getAllUsers();
    res.json(users);
  }
}