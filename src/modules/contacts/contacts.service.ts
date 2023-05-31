import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactsRepository } from '../repositories/contacts.repository';

@Injectable()
export class ContactsService {
  constructor(private contactRepository: ContactsRepository) {}

  async create(createContactDto: CreateContactDto, userId: string) {
    const findName = await this.contactRepository.findByName(
      createContactDto.name,
    );
    if (findName) {
      throw new ConflictException('Name already registered');
    }
    const contact = await this.contactRepository.create(
      createContactDto,
      userId,
    );
    return contact;
  }

  async findAll(idAuth: string) {
    const contacts = await this.contactRepository.findAll(idAuth);
    return contacts;
  }

  async findOne(id: string, idAuth: string) {
    const contact = await this.contactRepository.findOne(id, idAuth);
    if (!contact) {
      throw new NotFoundException('Contact not found');
    }
    return contact;
  }

  async update(id: string, updateContactDto: UpdateContactDto, idAuth: string) {
    const contact = await this.contactRepository.findOne(id, idAuth);
    if (!contact) {
      throw new NotFoundException('Contact not found');
    }
    if (updateContactDto.name) {
      const findName = await this.contactRepository.findByName(
        updateContactDto.name,
      );
      if (findName) {
        throw new ConflictException('Name already registered');
      }
    }
    const newContact = await this.contactRepository.update(
      id,
      updateContactDto,
    );
    return newContact;
  }

  async remove(id: string, idAuth: string) {
    const contact = await this.contactRepository.findOne(id, idAuth);
    if (!contact) {
      throw new NotFoundException('Contact not found');
    }
    await this.contactRepository.delete(id);
    return;
  }
}
