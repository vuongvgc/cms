import { IRouter } from '@routers/interface';
import Login from './index';

export const routerLogin: IRouter = {
  path: '/login',
  loader: import('./index'),
  exact: true,
  masterLayout: false,
  Component: <Login />,
};
