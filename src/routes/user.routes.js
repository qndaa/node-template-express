"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const userRouter = (0, express_1.Router)();
userRouter.get("/", user_controller_1.UserController.GetUsers);
userRouter.get("/:id", user_controller_1.UserController.GetUserById);
exports.default = userRouter;
//# sourceMappingURL=user.routes.js.map