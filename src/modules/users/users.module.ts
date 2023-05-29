import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './repositories/users.repository';
import { UsersPrismaRepository } from './repositories/prisma/users.prisma.repository';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService, {
      provide: UsersRepository,
      useClass: UsersPrismaRepository
    }
  ]
})
export class UsersModule {}
