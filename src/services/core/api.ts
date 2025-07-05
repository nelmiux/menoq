
import config from '@/config';
import baseApi from '../baseApi';

export const api = baseApi(`${config.apiUrl}/core`);
