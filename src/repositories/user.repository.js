"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const database_1 = require("../config/database");
const User_1 = require("../entities/User");
exports.UserRepository = database_1.AppDataSource.getRepository(User_1.User);
//# sourceMappingURL=user.repository.js.map