import { ReactNode } from 'react';
import Loadable from 'react-loadable';

import { IRouter } from './interface';

type ILoadable = {
  loading: ReactNode | any;
  routers: Array<IRouter>;
};

const flattenIRouter = (item: IRouter, loading: any): any => {
  const {
    isPrivate = true,
    permissionCode: permisionCode = 'ALLOW',
    Component,
  } = item;
  if (item.routes == null) {
    return [
      {
        ...item,
        isPrivate,
        permisionCode,
        Component: () => Component,
        menu: undefined,
      },
    ];
  }
  return item.routes.reduce(
    (_arr: any, it: IRouter) => {
      _arr.push(...flattenIRouter(it, loading));
      return _arr;
    },
    [
      {
        ...item,
        isPrivate,
        permisionCode,
        Component: () => Component,
        menu: undefined,
        routes: undefined,
      },
    ]
  );
};
class LoadableRouter {
  routers: Array<IRouter>;

  constructor({ loading, routers }: ILoadable) {
    this.routers = routers.reduce((_arr: Array<any>, item: IRouter) => {
      _arr.push(...flattenIRouter(item, loading));
      return _arr;
    }, []);
  }
}

export default LoadableRouter;
