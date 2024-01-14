import { IRouter } from '@routers/interface';
import Profile from './index';

export const routerViewProfile: IRouter = {
  path: '/profile',
  name: 'profile.name',
  loader: import('./index'),
  exact: true,
  masterLayout: false,
  Component: <Profile />,
};
