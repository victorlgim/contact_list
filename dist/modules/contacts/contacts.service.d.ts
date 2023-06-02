import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactsRepository } from '../repositories/contacts.repository';
export declare class ContactsService {
    private contactRepository;
    constructor(contactRepository: ContactsRepository);
    create(createContactDto: CreateContactDto, userId: string): Promise<import("./entities/contact.entity").Contact>;
    findAll(idAuth: string): Promise<import("./entities/contact.entity").Contact[]>;
    findOne(id: string, idAuth: string): Promise<import("./entities/contact.entity").Contact>;
    update(id: string, updateContactDto: UpdateContactDto, idAuth: string): Promise<import("./entities/contact.entity").Contact>;
    remove(id: string, idAuth: string): Promise<void>;
}
