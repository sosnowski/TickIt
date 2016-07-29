import { provideRouter, RouterConfig} from '@angular/router';
import { LoginComponent } from './login/login.cmp';

const routes: RouterConfig = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];