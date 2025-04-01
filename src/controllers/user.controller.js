"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("../services/user.service");
const logger_1 = require("../util/logger");
class UserController {
    static GetUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            logger_1.logger.debug(`Getting user by id: ${req.params.id}`);
            const id = req.params.id;
            const user = yield user_service_1.UserService.getUserById(id);
            if (!user) {
                res.status(404).json({ error: "User not found" });
                return;
            }
            res.json(user);
        });
    }
    static GetUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            logger_1.logger.debug("Getting all users");
            const users = yield user_service_1.UserService.getAllUsers();
            res.json(users);
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map