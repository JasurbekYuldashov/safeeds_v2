import { HttpStatus } from '@nestjs/common';
import { PlanService } from './plan.service';
export declare class PlanController {
    private readonly achievementService;
    constructor(achievementService: PlanService);
    getAll(query?: any): Promise<{
        data: any;
        statusCode: HttpStatus;
    }>;
    save(body: any): Promise<{
        data: any;
        statusCode: HttpStatus;
    }>;
    update(id: number, body: any): Promise<{
        data: any;
        statusCode: HttpStatus;
    }>;
    getOne(id: number): Promise<{
        data: any;
        statusCode: HttpStatus;
    }>;
    delete(id: number): Promise<{
        data: any;
        statusCode: HttpStatus;
    }>;
}
