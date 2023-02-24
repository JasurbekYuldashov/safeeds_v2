import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
    list(): Promise<import(".prisma/client").User[]>;
    save(body: any): Promise<{
        user: import(".prisma/client").User;
    }>;
    profile(body: any): Promise<import(".prisma/client").User>;
    getOne(query: any): Promise<{
        user: import(".prisma/client").User;
    }>;
    sendCode(body: any): Promise<{
        statusCode: number;
        message: string;
    }>;
    checkCode(body: any): Promise<{
        statusCode: number;
        uniqueId: string;
    }>;
    forgetPassword(body: any): Promise<{
        token: string;
        user: import(".prisma/client").User;
    }>;
    saveFirstAdmin(body: any): Promise<{
        user: import(".prisma/client").User;
    }>;
}
