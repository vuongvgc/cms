import { IRouter } from '@routers/interface';
import Homepage from './index';

export const routerHomepage: IRouter = {
  path: '/',
  loader: import('./index'),
  exact: true,
  name: 'homepage.name', //translate here for breadcrumb and sidebar,
  Component: <Homepage />,
};
