import { IRouter } from '@routers/interface';
import Order from './index';
import { AppstoreOutlined } from '@ant-design/icons';

export const routerOrder: IRouter = {
  path: '/order',
  loader: import('./index'),
  exact: true,
  name: 'order.name', //translate here for breadcrumb and sidebar,
  Component: <Order />,
  isPrivate: true,
  masterLayout: true,
  menu: {
    activePath: /order/i,
    exact: true,
    icon: <AppstoreOutlined />,
  },
};
