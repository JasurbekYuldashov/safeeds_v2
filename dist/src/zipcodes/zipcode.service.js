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
exports.ZipcodeService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
let ZipcodeService = class ZipcodeService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async findAll(query) {
        const response = await this.httpService.axiosRef.post("https://www.montway.com/es/gis/_suggest", {
            "city_state": {
                "completion": {
                    "field": "name_suggest",
                    "fuzzy": {
                        "fuzziness": 0
                    },
                    "size": 8
                },
                "text": query.search
            }
        });
        return response.data;
    }
};
ZipcodeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], ZipcodeService);
exports.ZipcodeService = ZipcodeService;
//# sourceMappingURL=zipcode.service.js.map