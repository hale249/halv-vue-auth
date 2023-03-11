import { AuthStorage } from '../types';
export declare class LocalStorage implements AuthStorage {
  set(key: string, value: any): void;
  get(key: string, defaultValue: any): any;
  remove(key: string): void;
  clear(): void;
}
