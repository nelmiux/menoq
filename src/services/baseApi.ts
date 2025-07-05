import { apiHeadersWithAuth } from '@/utilities/apiHeadersWithAuth';

import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query';

const baseApi = (baseUrl: string) =>
  createApi({
    /**
     * `reducerPath` is optional and will not be required by most users.
     * This is useful if you have multiple API definitions,
     * e.g. where each has a different domain, with no interaction between endpoints.
     * Otherwise, a single API definition should be used in order to support tag invalidation,
     * among other features
     */
    reducerPath: baseUrl,
    /**
     * A bare bones base query would just be `baseQuery: fetchBaseQuery({ baseUrl: '/' })`
     */
    baseQuery: retry(
      fetchBaseQuery({
        baseUrl,
        mode: 'cors',
        prepareHeaders: async (headers) => await apiHeadersWithAuth(headers),
      }),
      { maxRetries: 3 },
    ),
    /**
     * This api has endpoints injected in adjacent files,
     * which is why no endpoints are shown below.
     * If you want all endpoints defined in the same file, they could be included here instead
     */
    endpoints: () => ({}),
  });

export default baseApi;
