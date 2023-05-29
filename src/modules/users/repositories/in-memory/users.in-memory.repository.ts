import { CreateUserDto } from '../../dto/create-user.dto';
import { User } from '../../entities/user.entity';
import { UsersRepository } from '../users.repository';

export class UsersInMemoryRepository implements UsersRepository {
  private database: User[] = [];
  create(data: CreateUserDto): User | Promise<User> {
    const newUser = new User();
    Object.assign(newUser, {
      ...data,
    });

    this.database.push(newUser);

    return newUser;
  }
}
