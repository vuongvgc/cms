import { IRouter } from '@routers/interface';
import Register from './index';

export const routerRegister: IRouter = {
  path: '/register',
  loader: import('./index'),
  exact: true,
  Component: <Register />,
};
