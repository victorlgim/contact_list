// import { Contact } from '../contacts/entities/contact.entity';
// import { CreateContactDto } from '../contacts/dto/create-contact.dto';
// import { UpdateContactDto } from '../contacts/dto/update-contact.dto';

// export abstract class ContactsRepository {
//   abstract create(
//     data: CreateContactDto,
//     userId: string,
//   ): Promise<Contact> | Contact;
//   abstract findAll(idAuth: string): Promise<Contact[]> | Contact[];
//   abstract findOne(
//     id: string,
//     idAuth: string,
//   ): Promise<Contact | undefined> | Contact;
//   abstract findByName(name: string): Promise<Contact> | Contact;
//   abstract update(
//     id: string,
//     data: UpdateContactDto,
//   ): Promise<Contact> | Contact;
//   abstract delete(id: string): Promise<void> | void;
// }
