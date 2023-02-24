import { HttpStatus } from '@nestjs/common';
import { AchievementService } from './achievement.service';
export declare class AchievementController {
    private readonly achievementService;
    constructor(achievementService: AchievementService);
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
