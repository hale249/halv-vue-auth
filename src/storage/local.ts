import {AuthStorage} from '../types';
import {JsonParse} from '../utils';

export class LocalStorage implements AuthStorage {
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string, defaultValue: any) {
    return JsonParse(key, defaultValue);
  }

  remove(key: string) {
    localStorage.remove(key);
  }

  clear() {
    localStorage.clear();
  }
}
