"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const zipcode_module_1 = require("./zipcodes/zipcode.module");
const auth_module_1 = require("./auth/auth.module");
const file_upload_controller_1 = require("./file/file.upload.controller");
const path = require("path");
const serve_static_1 = require("@nestjs/serve-static");
const email_controller_1 = require("./email/email.controller");
const achievement_module_1 = require("./achievement/achievement.module");
const prisma_service_1 = require("./prisma/prisma.service");
const satisfied_module_1 = require("./satisfied/satisfied.module");
const event_module_1 = require("./event/event.module");
const history_module_1 = require("./history/history.module");
const plan_module_1 = require("./plan/plan.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path.join(__dirname, '../uploads'),
                serveRoot: '/api/uploads',
                serveStaticOptions: {
                    index: false,
                },
            }),
            zipcode_module_1.ZipcodeModule,
            auth_module_1.AuthModule,
            satisfied_module_1.SatisfiedModule,
            achievement_module_1.AchievementModule,
            event_module_1.EventModule,
            history_module_1.HistoryModule,
            plan_module_1.PlanModule,
        ],
        controllers: [file_upload_controller_1.FileUploadController, email_controller_1.EmailController],
        providers: [prisma_service_1.PrismaService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map