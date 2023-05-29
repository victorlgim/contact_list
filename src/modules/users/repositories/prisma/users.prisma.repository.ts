import { Injectable } from '@nestjs/common/decorators';
import { CreateUserDto } from '../../dto/create-user.dto';
import { User } from '../../entities/user.entity';
import { plainToInstance } from 'class-transformer';
import { UsersRepository } from '../users.repository';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UsersPrismaRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<User> {
    const user = new User();
    Object.assign(user, { ...data });
    const newUser = await this.prisma.user.create({
      data: { ...user },
    });
    return plainToInstance(User, newUser);
  }

  async findOne(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    return plainToInstance(User, user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    return user;
  }

  async update(id: string, data: UpdateUserDto): Promise<User> {
    const user = await this.prisma.user.update({
      where: { id },
      data: { ...data },
    });
    return plainToInstance(User, user);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: { id },
    });
  }
}
