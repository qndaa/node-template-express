"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersResponseDto = exports.UserResponseDto = void 0;
class UserResponseDto {
    constructor(user) {
        this.name = user.name;
        this.email = user.email;
        this.createdAt = user.createdAt;
    }
}
exports.UserResponseDto = UserResponseDto;
class UsersResponseDto {
    constructor(users) {
        this.users = users.map((user) => new UserResponseDto(user));
    }
}
exports.UsersResponseDto = UsersResponseDto;
//# sourceMappingURL=user.dto.js.map