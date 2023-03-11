import { AuthFunction } from './types';

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $auth: AuthFunction;
  }
}
