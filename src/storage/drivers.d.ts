import { CookieStorage } from './cookie';
import { LocalStorage } from './local';
import { SecureLocalStorage } from './secure-ls';
import { AuthStorage, SupportedAuthStorage } from '../types';
export declare const drivers: {
    local: typeof LocalStorage;
    secureLs: typeof SecureLocalStorage;
    cookie: typeof CookieStorage;
};
export declare const DEFAULT_DRIVER = "local";
export declare const useStorage: (driver: SupportedAuthStorage) => AuthStorage;
