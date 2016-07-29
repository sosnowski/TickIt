import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: './app.cmp.html',
    styleUrls: ['./app.cmp.scss'],
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }
