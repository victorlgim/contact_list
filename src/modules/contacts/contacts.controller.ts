import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
  HttpCode,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('contacts')
@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post('')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  create(@Body() createContactDto: CreateContactDto, @Request() req: any) {
    return this.contactsService.create(createContactDto, req.user.id);
  }

  @Get('')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  findAll(@Request() req: any) {
    return this.contactsService.findAll(req.user.id);
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string, @Request() req: any) {
    return this.contactsService.findOne(id, req.user.id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateContactDto: UpdateContactDto,
    @Request() req: any,
  ) {
    return this.contactsService.update(id, updateContactDto, req.user.id);
  }

  @HttpCode(204)
  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string, @Request() req: any) {
    return this.contactsService.remove(id, req.user.id);
  }
}
