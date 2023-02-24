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
exports.SatisfiedService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SatisfiedService = class SatisfiedService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll(query) {
        return this.prisma.satisfied.findMany({});
    }
    async save(data) {
        return this.prisma.satisfied.create({ data });
    }
    async update(id, data) {
        return this.prisma.satisfied
            .update({ where: { id: +id }, data })
            .catch((e) => {
            throw new Error('Item not found');
        });
    }
    async getOne(id) {
        return await this.prisma.satisfied
            .findUnique({ where: { id: +id } })
            .catch(() => {
            throw new Error('Item not found');
        });
    }
    async delete(id) {
        return await this.prisma.satisfied
            .delete({ where: { id: +id } })
            .catch(() => {
            throw new Error('Item not found');
        });
    }
};
SatisfiedService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SatisfiedService);
exports.SatisfiedService = SatisfiedService;
//# sourceMappingURL=satisfied.service.js.map