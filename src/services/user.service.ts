import {UserRepository} from "../repositories/user.repository";
import {UserResponseDto, UsersResponseDto} from '../dtos/user.dto';

export class UserService {
  static async getAllUsers() {
    try {
      const users = await UserRepository.find();
      return new UsersResponseDto(users);
    } catch (error) {
      throw error;
    }
  }

  static async getUserById(id: string) {
    try {
      const user = await UserRepository.findOneBy({
        id: parseInt(id),
      })

      if (!user) {
        return null
      }

      return new UserResponseDto(user);
    } catch (error) {
      throw error
    }
  }
}