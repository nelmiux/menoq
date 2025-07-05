export const urlBase = process.env.VITE_BASE_URL ?? '';
export const appName = process.env.VITE_APP_NAME ?? '';

const local = 'local';

export const environment: Record<string, string> = {
  Test: 'test',
  Local: local,
  Dev: 'dev',
  Stag: 'stag',
  UAT: 'uat',
  QA: 'qa',
  Prod: 'prod',
};

export const env = (process.env.REACT_APP_ENV = process.env.REACT_APP_ENV || environment.Local);

export type Config = {
  apiUrl: string;
  logLevel: 'silent' | 'warn' | 'info' | 'debug';
};

export const configs: Record<string, Config> = {
  [environment.Test]: {
    apiUrl: `${window.location.origin}/${urlBase ?? ''}`,
    logLevel: 'debug',
  },
  [environment.Local]: {
    apiUrl: `${window.location.origin}/${urlBase ?? ''}`,
    logLevel: 'debug',
  },
  [environment.Dev]: {
    apiUrl: `https://api-${environment.Dev}.com`,
    logLevel: 'debug',
  },
  [environment.Stag]: {
    apiUrl: `https://api-${environment.Stag}.com`,
    logLevel: 'silent',
  },
  [environment.Prod]: {
    apiUrl: 'https://api.com',
    logLevel: 'silent',
  },
};

const config = configs[env];

export default config;
