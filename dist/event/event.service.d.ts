import { PrismaService } from '../prisma/prisma.service';
export declare class EventService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(query?: any): Promise<any>;
    save(data?: any): Promise<any>;
    update(id: number, data?: any): Promise<any>;
    getOne(id?: number): Promise<any>;
    delete(id?: number): Promise<any>;
}
