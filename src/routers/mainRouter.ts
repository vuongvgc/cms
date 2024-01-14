import { routerLogin } from '@view/Auth/Login/router.tsx';
import { routerViewProfile } from '@view/Auth/Profile/router.tsx';
import { routerHomepage } from '@view/Homepage/router.tsx';

import { IRouter } from './interface';
import { routerOrder } from '../view/Order/router.tsx';

export const privatePage: IRouter[] = [
  routerHomepage,
  routerViewProfile,
  routerOrder,
];

export const publicPage: IRouter[] = [routerLogin];
