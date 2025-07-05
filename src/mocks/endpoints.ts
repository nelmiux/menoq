import { HttpResponse, http } from 'msw';

import { urlBase } from '@/config';

import { groupSizes, industries, regions, states } from './coreApiData';

// Core
const coreUrl = `${urlBase}/core/v1`;

export const handlers = [
  http.get(`/${coreUrl}/group-sizes`, () => {
    return HttpResponse.json(groupSizes);
  }),
  http.get(`/${coreUrl}/industries`, () => {
    return HttpResponse.json(industries);
  }),
  http.get(`/${coreUrl}/states`, () => {
    return HttpResponse.json(states);
  }),
  http.get(`/${coreUrl}/regions`, () => {
    return HttpResponse.json(regions);
  }),
];
