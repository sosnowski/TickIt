import { provideRouter, RouterConfig} from '@angular/router';
import { LoginComponent } from './modules/login/login.cmp';
import { RegisterComponent } from './modules/register/register.cmp';

const routes: RouterConfig = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
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