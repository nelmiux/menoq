import AsyncComponentLoader from '@/components/AsyncComponentLoader';
import { httpError } from '@/error';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Home]: {
    component: AsyncComponentLoader(() => import('@/pages/Home')),
    path: '/',
    title: 'Home',
  },
  [Pages.Login]: {
    component: AsyncComponentLoader(() => import('@/pages/Login')),
    path: '/login',
    title: 'Login',
  },
  [Pages.SignUp]: {
    component: AsyncComponentLoader(() => import('@/pages/SignUp')),
    path: '/signup',
    title: 'SignUp',
  },
  [Pages.ForgotPassword]: {
    component: AsyncComponentLoader(() => import('@/pages/ForgotPassword')),
    path: '/forgot-password',
    title: 'ForgotPassword',
  },
  [Pages.NotFound]: {
    component: AsyncComponentLoader(() => {
      throw httpError[404]();
    }),
    path: '*',
  },
};

export default routes;
