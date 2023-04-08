import { HttpStatus } from '@nestjs/common';
import { SatisfiedService } from './satisfied.service';
export declare class SatisfiedController {
    private readonly articleService;
    constructor(articleService: SatisfiedService);
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
