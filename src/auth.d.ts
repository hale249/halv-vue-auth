import { AuthOptions, AuthUser, LoginPayload } from './types';
import { Router } from 'vue-router';
import { AxiosInstance } from 'axios';
export declare const createAuth: (
  options: AuthOptions,
  router: Router,
  axios: AxiosInstance,
) => import('pinia').StoreDefinition<
  'auth',
  import('pinia')._UnwrapAll<
    Pick<
      {
        loggedIn: import('vue').ComputedRef<boolean>;
        error: import('vue').Ref<string>;
        loading: import('vue').Ref<boolean>;
        user: import('vue').Ref<AuthUser>;
        token: import('vue').Ref<unknown>;
        setUser: (userData: AuthUser) => void;
        setToken: (tokenData: string) => void;
        logout: () => Promise<any>;
        login: <P = LoginPayload>(payload: P) => Promise<any>;
        loginAs: <U = AuthUser>(
          user: U,
          token: string,
        ) => Promise<{
          code: number;
          data: {
            user: U;
            token: string;
          };
          message: string;
        }>;
        forceLogout: () => Promise<boolean>;
        fetchUser: () => Promise<any>;
        setTokenHeader: (tokenData: string) => void;
        refreshToken: () => Promise<any>;
        setRefreshToken: (token: string) => void;
        getRefreshToken: () => string;
        getToken: () => Promise<string>;
        getUser: () => Promise<any>;
        getFreshToken: () => string;
        isExpired: () => boolean;
        setTokenExpiration: (tokenData: string) =>
          | {
              user?: AuthUser | undefined;
              exp: number;
            }
          | null
          | undefined;
        handleRefreshTokenFailed: (e?: any) => any;
        getTokenExpirationTime: () => number;
        setRefreshTokenData: (data: any) => void;
        getLocalUser: <T = AuthUser>() => T;
      },
      'token' | 'user' | 'error' | 'loading'
    >
  >,
  Pick<
    {
      loggedIn: import('vue').ComputedRef<boolean>;
      error: import('vue').Ref<string>;
      loading: import('vue').Ref<boolean>;
      user: import('vue').Ref<AuthUser>;
      token: import('vue').Ref<unknown>;
      setUser: (userData: AuthUser) => void;
      setToken: (tokenData: string) => void;
      logout: () => Promise<any>;
      login: <P = LoginPayload>(payload: P) => Promise<any>;
      loginAs: <U = AuthUser>(
        user: U,
        token: string,
      ) => Promise<{
        code: number;
        data: {
          user: U;
          token: string;
        };
        message: string;
      }>;
      forceLogout: () => Promise<boolean>;
      fetchUser: () => Promise<any>;
      setTokenHeader: (tokenData: string) => void;
      refreshToken: () => Promise<any>;
      setRefreshToken: (token: string) => void;
      getRefreshToken: () => string;
      getToken: () => Promise<string>;
      getUser: () => Promise<any>;
      getFreshToken: () => string;
      isExpired: () => boolean;
      setTokenExpiration: (tokenData: string) =>
        | {
            user?: AuthUser | undefined;
            exp: number;
          }
        | null
        | undefined;
      handleRefreshTokenFailed: (e?: any) => any;
      getTokenExpirationTime: () => number;
      setRefreshTokenData: (data: any) => void;
      getLocalUser: <T = AuthUser>() => T;
    },
    'loggedIn'
  >,
  Pick<
    {
      loggedIn: import('vue').ComputedRef<boolean>;
      error: import('vue').Ref<string>;
      loading: import('vue').Ref<boolean>;
      user: import('vue').Ref<AuthUser>;
      token: import('vue').Ref<unknown>;
      setUser: (userData: AuthUser) => void;
      setToken: (tokenData: string) => void;
      logout: () => Promise<any>;
      login: <P = LoginPayload>(payload: P) => Promise<any>;
      loginAs: <U = AuthUser>(
        user: U,
        token: string,
      ) => Promise<{
        code: number;
        data: {
          user: U;
          token: string;
        };
        message: string;
      }>;
      forceLogout: () => Promise<boolean>;
      fetchUser: () => Promise<any>;
      setTokenHeader: (tokenData: string) => void;
      refreshToken: () => Promise<any>;
      setRefreshToken: (token: string) => void;
      getRefreshToken: () => string;
      getToken: () => Promise<string>;
      getUser: () => Promise<any>;
      getFreshToken: () => string;
      isExpired: () => boolean;
      setTokenExpiration: (tokenData: string) =>
        | {
            user?: AuthUser | undefined;
            exp: number;
          }
        | null
        | undefined;
      handleRefreshTokenFailed: (e?: any) => any;
      getTokenExpirationTime: () => number;
      setRefreshTokenData: (data: any) => void;
      getLocalUser: <T = AuthUser>() => T;
    },
    | 'setUser'
    | 'setToken'
    | 'logout'
    | 'login'
    | 'loginAs'
    | 'forceLogout'
    | 'fetchUser'
    | 'setTokenHeader'
    | 'refreshToken'
    | 'setRefreshToken'
    | 'getRefreshToken'
    | 'getToken'
    | 'getUser'
    | 'getFreshToken'
    | 'isExpired'
    | 'setTokenExpiration'
    | 'handleRefreshTokenFailed'
    | 'getTokenExpirationTime'
    | 'setRefreshTokenData'
    | 'getLocalUser'
  >
>;
