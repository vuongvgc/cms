import { routerLogin } from '@view/Auth/Login/router.tsx';
import { routerViewProfile } from '@view/Auth/Profile/router.tsx';
import { routerHomepage } from '@view/Homepage/router.tsx';

import { IRouter } from './interface';

export const privatePage: IRouter[] = [routerHomepage, routerViewProfile];

export const publicPage: IRouter[] = [routerLogin];
