import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { AppConfig } from './app.config';

@Component({
    selector: 'my-app',
    templateUrl: './app.cmp.html',

    styleUrls: ['./app.cmp.scss'],
    directives: [ROUTER_DIRECTIVES],
    providers: [AppConfig]
})
export class AppComponent { }
