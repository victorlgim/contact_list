import { CreateUserDto } from '../../dto/create-user.dto';
import { User } from '../../entities/user.entity';
import { UsersRepository } from '../users.repository';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { PrismaService } from 'src/database/prisma.service';
export declare class UsersPrismaRepository implements UsersRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateUserDto): Promise<User>;
    findOne(id: string): Promise<User>;
    findByEmail(email: string): Promise<User>;
    update(id: string, data: UpdateUserDto): Promise<User>;
    delete(id: string): Promise<void>;
}
