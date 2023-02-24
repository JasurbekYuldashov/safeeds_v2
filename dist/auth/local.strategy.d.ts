import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    private jwtService;
    constructor(authService: AuthService, jwtService: JwtService);
    validate(email: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
export {};
