export * from './ai';

export interface AppConfig {
  version: string;
  environment: 'development' | 'production';
}

export const appConfig: AppConfig = {
  version: '1.0.0',
  environment: (process.env.NODE_ENV || 'development') as 'development' | 'production'
};