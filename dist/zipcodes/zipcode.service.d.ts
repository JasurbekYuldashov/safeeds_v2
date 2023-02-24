import { HttpService } from "@nestjs/axios";
export declare class ZipcodeService {
    private readonly httpService;
    constructor(httpService: HttpService);
    findAll(query?: any): Promise<any>;
}
