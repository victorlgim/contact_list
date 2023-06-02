import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: UsersRepository);
    create(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").User>;
    findByEmail(email: string): Promise<import("./entities/user.entity").User>;
    findOne(id: string, idAuth: string): Promise<import("./entities/user.entity").User>;
    update(id: string, updateUserDto: UpdateUserDto, idAuth: string): Promise<import("./entities/user.entity").User>;
    remove(id: string, idAuth: string): Promise<void>;
}
