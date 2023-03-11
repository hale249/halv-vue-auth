import SecureLS from 'secure-ls';
import { AuthStorage } from '../types';
export declare class SecureLocalStorage implements AuthStorage {
    protected _ls: SecureLS;
    constructor(options?: {
        encodingType: string;
        isCompression: boolean;
    });
    set(key: string, value: string): void;
    get(key: string, defaultValue: string): any;
    remove(key: string): void;
    clear(): void;
}
