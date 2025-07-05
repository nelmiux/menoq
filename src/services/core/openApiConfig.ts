import type { ConfigFile } from '@rtk-query/codegen-openapi';
import { baseOpenApiConfig } from '../baseOpenApiConfig';

const config: ConfigFile = {
  ...baseOpenApiConfig,
  schemaFile: './core.json',
  outputFile: './coreApi.ts',
  exportName: 'coreApi',
};

export default config;
