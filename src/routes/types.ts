import { FC } from 'react';
import { PathRouteProps } from 'react-router-dom';

export enum Pages {
  Home,
  Login,
  SignUp,
  ForgotPassword,
  NotFound,
}

export type PathRouteCustomProps = {
  title?: string;
  component: FC;
  path: string;
};

export type Routes = Record<Pages, PathRouteProps & PathRouteCustomProps>;
