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
exports.AchievementService = void 0;
const pattern_1 = require("./../../utils/pattern");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AchievementService = class AchievementService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll(query) {
        const data = await this.prisma.achievement.findMany();
        return data.map((r) => {
            var _a;
            return Object.assign(Object.assign({}, r), { body: ((_a = r.body.match(pattern_1.pattern)) === null || _a === void 0 ? void 0 : _a[0]) || '' });
        });
    }
    async save(data) {
        return this.prisma.achievement.create({ data });
    }
    async update(id, data) {
        return this.prisma.achievement
            .update({ where: { id: +id }, data })
            .catch((e) => {
            throw new Error('Item not found');
        });
    }
    async getOne(id) {
        return await this.prisma.achievement
            .findUnique({ where: { id: +id } })
            .catch(() => {
            throw new Error('Item not found');
        });
    }
    async delete(id) {
        return await this.prisma.achievement
            .delete({ where: { id: +id } })
            .catch(() => {
            throw new Error('Item not found');
        });
    }
};
AchievementService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AchievementService);
exports.AchievementService = AchievementService;
//# sourceMappingURL=achievement.service.js.map