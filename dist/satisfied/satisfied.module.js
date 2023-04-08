"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SatisfiedModule = void 0;
const common_1 = require("@nestjs/common");
const satisfied_controller_1 = require("./satisfied.controller");
const satisfied_service_1 = require("./satisfied.service");
const prisma_service_1 = require("../prisma/prisma.service");
let SatisfiedModule = class SatisfiedModule {
};
SatisfiedModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [satisfied_controller_1.SatisfiedController],
        providers: [satisfied_service_1.SatisfiedService, prisma_service_1.PrismaService],
    })
], SatisfiedModule);
exports.SatisfiedModule = SatisfiedModule;
//# sourceMappingURL=satisfied.module.js.map