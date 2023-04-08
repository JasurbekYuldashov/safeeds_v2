import { HttpStatus } from '@nestjs/common';
import { EventService } from './event.service';
export declare class EventController {
    private readonly achievementService;
    constructor(achievementService: EventService);
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
