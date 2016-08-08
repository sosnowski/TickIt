"use strict";
var router_1 = require('@angular/router');
var login_cmp_1 = require('./modules/login/login.cmp');
var register_cmp_1 = require('./modules/register/register.cmp');
var routes = [
    {
        path: 'login',
        component: login_cmp_1.LoginComponent
    },
    {
        path: 'register',
        component: register_cmp_1.RegisterComponent
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map