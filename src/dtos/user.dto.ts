import {User} from '../entities/User';

export class UserResponseDto {
  name: string;
  email: string;
  createdAt: Date;

  constructor(user: User) {
    this.name = user.name;
    this.email = user.email;
    this.createdAt = user.createdAt;
  }
}


export class UsersResponseDto {
  users: UserResponseDto[];

  constructor(users: User[]) {
    this.users = users.map((user: any) => new UserResponseDto(user));
  }
}
