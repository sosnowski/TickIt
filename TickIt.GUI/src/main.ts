import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app/app.cmp';
import { appRouterProviders } from './app.routes';

bootstrap(AppComponent, [
    appRouterProviders
]);
