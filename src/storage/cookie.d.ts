import { AuthStorage, AuthOptions } from '../types';
export declare class CookieStorage implements AuthStorage {
    set(key: string, value: any, options?: AuthOptions): void;
    get(key: string, defaultValue: any): any;
    remove(key: string): void;
    clear(options?: AuthOptions): void;
}
