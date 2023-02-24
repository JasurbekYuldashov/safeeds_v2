import { HttpStatus } from '@nestjs/common';
import { HistoryService } from './history.service';
export declare class HistoryController {
    private readonly achievementService;
    constructor(achievementService: HistoryService);
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
