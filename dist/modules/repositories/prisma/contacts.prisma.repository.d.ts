import { ContactsRepository } from '../contacts.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CreateContactDto } from 'src/modules/contacts/dto/create-contact.dto';
import { UpdateContactDto } from 'src/modules/contacts/dto/update-contact.dto';
export declare class ContactsPrismaRepository implements ContactsRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateContactDto, userId: string): Promise<any>;
    findAll(idAuth: string): Promise<any[]>;
    findOne(id: string, idAuth: string): Promise<any>;
    findByName(name: string): Promise<any>;
    update(id: string, data: UpdateContactDto): Promise<any>;
    delete(id: string): Promise<void>;
}
