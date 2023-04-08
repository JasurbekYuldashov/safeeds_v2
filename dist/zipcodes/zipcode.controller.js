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
exports.ZipcodeController = void 0;
const common_1 = require("@nestjs/common");
const zipcode_service_1 = require("./zipcode.service");
let ZipcodeController = class ZipcodeController {
    constructor(zipcodeService) {
        this.zipcodeService = zipcodeService;
    }
    async get(query) {
        return await this.zipcodeService.findAll(query);
    }
};
__decorate([
    (0, common_1.Post)("/"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ZipcodeController.prototype, "get", null);
ZipcodeController = __decorate([
    (0, common_1.Controller)("zipcode"),
    __metadata("design:paramtypes", [zipcode_service_1.ZipcodeService])
], ZipcodeController);
exports.ZipcodeController = ZipcodeController;
//# sourceMappingURL=zipcode.controller.js.map