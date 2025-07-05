import type { ConfigFile } from '@rtk-query/codegen-openapi';

const baseOpenApiConfig: ConfigFile = {
  apiFile: './api.ts',
  apiImport: 'api',
  flattenArg: true,
  hooks: true,
  tag: true,

  // Overrride the following 3 property values with your specific api implementation details
  schemaFile: 'openApiSpec.json',
  outputFile: 'generatedCodeApi.ts',
  exportName: 'generatedCodeApi',
};

export { baseOpenApiConfig };
