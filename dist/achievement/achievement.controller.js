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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AchievementController = void 0;
const common_1 = require("@nestjs/common");
const achievement_service_1 = require("./achievement.service");
let AchievementController = class AchievementController {
    constructor(achievementService) {
        this.achievementService = achievementService;
    }
    async getAll(query) {
        const data = await this.achievementService.getAll(query).catch((e) => {
            throw new common_1.HttpException({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                error: e.message,
            }, common_1.HttpStatus.BAD_REQUEST);
        });
        return { data, statusCode: common_1.HttpStatus.OK };
    }
    async save(body) {
        const data = await this.achievementService.save(body).catch((e) => {
            throw new common_1.HttpException({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                error: 'name field is required and string',
            }, common_1.HttpStatus.BAD_REQUEST);
        });
        return { data, statusCode: common_1.HttpStatus.OK };
    }
    async update(id, body) {
        const data = await this.achievementService.update(id, body).catch((e) => {
            throw new common_1.HttpException({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                error: 'name field is required and string',
            }, common_1.HttpStatus.BAD_REQUEST);
        });
        return { data, statusCode: common_1.HttpStatus.OK };
    }
    async getOne(id) {
        const data = await this.achievementService.getOne(id).catch((e) => {
            throw new common_1.HttpException({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                error: e.message,
            }, common_1.HttpStatus.BAD_REQUEST);
        });
        return { data, statusCode: common_1.HttpStatus.OK };
    }
    async delete(id) {
        const data = await this.achievementService.delete(id).catch((e) => {
            throw new common_1.HttpException({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                error: e.message,
            }, common_1.HttpStatus.BAD_REQUEST);
        });
        return { data, statusCode: common_1.HttpStatus.OK };
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AchievementController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AchievementController.prototype, "save", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AchievementController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AchievementController.prototype, "getOne", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AchievementController.prototype, "delete", null);
AchievementController = __decorate([
    (0, common_1.Controller)('achievement'),
    __metadata("design:paramtypes", [achievement_service_1.AchievementService])
], AchievementController);
exports.AchievementController = AchievementController;
//# sourceMappingURL=achievement.controller.js.map