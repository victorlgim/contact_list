import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
export declare class ContactsController {
    private readonly contactsService;
    constructor(contactsService: ContactsService);
    create(createContactDto: CreateContactDto, req: any): Promise<import("./entities/contact.entity").Contact>;
    findAll(req: any): Promise<import("./entities/contact.entity").Contact[]>;
    findOne(id: string, req: any): Promise<import("./entities/contact.entity").Contact>;
    update(id: string, updateContactDto: UpdateContactDto, req: any): Promise<import("./entities/contact.entity").Contact>;
    remove(id: string, req: any): Promise<void>;
}
