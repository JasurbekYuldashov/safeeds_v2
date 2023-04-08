import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    forgetPassword(user: any, body: any): Promise<{
        token: string;
        user: import(".prisma/client").User;
    }>;
    createUser(user: any): Promise<{
        user: import(".prisma/client").User;
    }>;
    getAll(): Promise<import(".prisma/client").User[]>;
    getByEmail(email: string): Promise<import(".prisma/client").User>;
    getOne(query: any): Promise<{
        user: import(".prisma/client").User;
    }>;
    update(email: string): Promise<import(".prisma/client").User>;
    sendCode(body: {
        email: string;
    }): Promise<{
        statusCode: number;
        message: string;
    }>;
    checkCode(body: {
        email: string;
        code: number;
    }): Promise<{
        statusCode: number;
        uniqueId: string;
    }>;
}
