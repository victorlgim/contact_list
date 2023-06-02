"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsPrismaRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../database/prisma.service");
const contact_entity_1 = require("../../contacts/entities/contact.entity");
let ContactsPrismaRepository = exports.ContactsPrismaRepository = class ContactsPrismaRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data, userId) {
        const contact = new contact_entity_1.Contact();
        Object.assign(contact, Object.assign({}, data));
        const newContact = await this.prisma.contact.create({
            data: {
                id: contact.id,
                name: contact.name,
                email: contact.email,
                phone: contact.phone,
                userId,
            },
        });
        return newContact;
    }
    async findAll(idAuth) {
        const contacts = await this.prisma.contact.findMany({
            where: {
                userId: idAuth,
            },
        });
        return contacts;
    }
    async findOne(id, idAuth) {
        const contact = await this.prisma.contact.findFirst({
            where: {
                id: id,
                userId: idAuth,
            },
        });
        return contact;
    }
    async findByName(name) {
        const contact = await this.prisma.contact.findUnique({
            where: { name },
        });
        return contact;
    }
    async update(id, data) {
        const contact = await this.prisma.contact.update({
            where: { id },
            data: Object.assign({}, data),
        });
        return contact;
    }
    async delete(id) {
        await this.prisma.contact.delete({
            where: { id },
        });
    }
};
exports.ContactsPrismaRepository = ContactsPrismaRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ContactsPrismaRepository);
//# sourceMappingURL=contacts.prisma.repository.js.map