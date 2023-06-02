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
exports.UsersPrismaRepository = void 0;
const decorators_1 = require("@nestjs/common/decorators");
const user_entity_1 = require("../../entities/user.entity");
const class_transformer_1 = require("class-transformer");
const prisma_service_1 = require("../../../../database/prisma.service");
let UsersPrismaRepository = exports.UsersPrismaRepository = class UsersPrismaRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const user = new user_entity_1.User();
        Object.assign(user, Object.assign({}, data));
        const newUser = await this.prisma.user.create({
            data: Object.assign({}, user),
        });
        return (0, class_transformer_1.plainToInstance)(user_entity_1.User, newUser);
    }
    async findOne(id) {
        const user = await this.prisma.user.findUnique({
            where: { id },
        });
        return (0, class_transformer_1.plainToInstance)(user_entity_1.User, user);
    }
    async findByEmail(email) {
        const user = await this.prisma.user.findUnique({
            where: { email },
        });
        return user;
    }
    async update(id, data) {
        const user = await this.prisma.user.update({
            where: { id },
            data: Object.assign({}, data),
        });
        return (0, class_transformer_1.plainToInstance)(user_entity_1.User, user);
    }
    async delete(id) {
        await this.prisma.user.delete({
            where: { id },
        });
    }
};
exports.UsersPrismaRepository = UsersPrismaRepository = __decorate([
    (0, decorators_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersPrismaRepository);
//# sourceMappingURL=users.prisma.repository.js.map