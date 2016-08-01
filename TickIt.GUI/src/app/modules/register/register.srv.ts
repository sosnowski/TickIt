import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppConfig } from '../../app.config';
import { iRegisterData } from './register_data.i';
import { iUserData } from '../../common/data/user_data.i';

import {Http, Headers, RequestOptions, Response} from '@angular/http';

@Injectable()
export class RegisterService {

    defaultHeaders: Headers;

    registerUrl: string;

    constructor(public config: AppConfig, public http: Http) {
        this.defaultHeaders = new Headers({ 'Content-Type': 'application/json' });

        this.registerUrl = config.httpApiUrl + '/users';
    }

    register(userData: iRegisterData): Observable<iUserData> {
        return this.http.post(this.registerUrl, JSON.stringify(userData), new RequestOptions({
            headers: this.defaultHeaders
        })).map((res: Response) => {
                return res.json();
            }).catch((err: any) => {
                console.log(err);
                return Observable.throw('${err.status} Error: ${err.statusTest}');
            });
    }
}