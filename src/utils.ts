import Cookies from 'js-cookie';

export const normalizeURL = (url: string) => {
  return String(url).startsWith('/') ? url.substr(1) : url;
};

export const JsonParse = (key: string, defaultValue: any) => {
  try {
    const value = Cookies.get(key);
    return JSON.parse(value!);
  } catch {
    return defaultValue;
  }
}