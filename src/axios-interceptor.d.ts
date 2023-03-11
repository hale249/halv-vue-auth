import { StoreDefinition } from 'pinia';
import { AxiosInstance } from 'axios';
import { AuthOptions } from './types';
import { Router } from 'vue-router';
export declare const registerAxiosInterceptors: (
  axios: AxiosInstance,
  options: AuthOptions,
  router: Router,
  useAuth: StoreDefinition,
) => void;
