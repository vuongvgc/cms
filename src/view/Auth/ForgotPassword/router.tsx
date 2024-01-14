import { IRouter } from '@routers/interface';
import ForgotPassword from './index';

export const routerForgotPassword: IRouter = {
  path: '/forgot-password',
  loader: import('./index'),
  Component: <ForgotPassword />,
  exact: true,
};
