import { Strategy } from 'passport-jwt';
declare const JwtService_base: new (...args: any[]) => Strategy;
export declare class JwtService extends JwtService_base {
    constructor();
    validate(payload: any): Promise<{
        id: any;
        email: any;
    }>;
}
export {};
