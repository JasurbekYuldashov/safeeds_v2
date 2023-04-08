import { ZipcodeService } from "./zipcode.service";
export declare class ZipcodeController {
    private readonly zipcodeService;
    constructor(zipcodeService: ZipcodeService);
    get(query: any): Promise<any>;
}
