import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';
import { NotFoundError } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}
  async create(createUserDto: CreateUserDto) {
    const findEmail = await this.usersRepository.findByEmail(
      createUserDto.email,
    );
    if (findEmail) {
      throw new ConflictException('E-mail already registered');
    }
    const user = await this.usersRepository.create(createUserDto);
    return user;
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findByEmail(email);
    return user;
  }

  async findOne(id: string, idAuth: string) {
    if (id !== idAuth) {
      throw new ForbiddenException('Not authorized');
    }
    const user = await this.usersRepository.findOne(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto, idAuth: string) {
    const user = await this.usersRepository.findOne(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (id !== idAuth) {
      throw new ForbiddenException('Not authorized');
    }
    if (updateUserDto.email) {
      const findEmail = await this.usersRepository.findByEmail(
        updateUserDto.email,
      );
      if (findEmail) {
        throw new ConflictException('E-mail already registered');
      }
    }
    const newUser = await this.usersRepository.update(id, updateUserDto);
    return newUser;
  }

  async remove(id: string, idAuth: string) {
    const user = await this.usersRepository.findOne(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (id !== idAuth) {
      throw new ForbiddenException('Not authorized');
    }
    await this.usersRepository.delete(id);
    return;
  }
}
