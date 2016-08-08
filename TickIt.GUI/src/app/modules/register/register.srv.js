"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
var app_config_1 = require('../../app.config');
var http_1 = require('@angular/http');
var RegisterService = (function () {
    function RegisterService(config, http) {
        this.config = config;
        this.http = http;
        this.defaultHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.registerUrl = config.httpApiUrl + '/users';
    }
    RegisterService.prototype.register = function (userData) {
        return this.http.post(this.registerUrl, JSON.stringify(userData), new http_1.RequestOptions({
            headers: this.defaultHeaders
        })).map(function (res) {
            return res.json();
        }).catch(function (err) {
            console.log(err);
            return Observable_1.Observable.throw('${err.status} Error: ${err.statusTest}');
        });
    };
    RegisterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [app_config_1.AppConfig, http_1.Http])
    ], RegisterService);
    return RegisterService;
}());
exports.RegisterService = RegisterService;
//# sourceMappingURL=register.srv.js.map