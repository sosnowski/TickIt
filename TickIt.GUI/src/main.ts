import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app/app.cmp';
import { appRouterProviders } from './app/app.routes';

bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms(),
    appRouterProviders,
    HTTP_PROVIDERS
]);
