import { IRouter } from '@routers/interface';
import {{pascalCase name}} from './index';
import { AppstoreOutlined } from '@ant-design/icons';

export const router{{pascalCase name}}: IRouter = {
  path: '/{{kebabCase name}}',
  loader: import('./index'),
  exact: true,
  name: '{{camelCase name}}.name', //translate here for breadcrumb and sidebar,
  Component: <{{pascalCase name}} />,
  isPrivate: true,
  masterLayout: true,
  menu: {
    activePath: /{{kebabCase name}}/i,
    exact: true,
    icon: <AppstoreOutlined />,
  },
};
