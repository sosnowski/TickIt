"use strict";
var $ = require('jquery');
var getFormData = function (serializedData) {
    var res = {};
    for (var _i = 0, serializedData_1 = serializedData; _i < serializedData_1.length; _i++) {
        var obj = serializedData_1[_i];
        res[obj.name] = obj.value;
    }
    return res;
};
var sendLogin = function (loginData) {
    return $.post('http://localhost:48213/api/users/login', loginData);
};
$(document).ready(function () {
    var form = $('form');
    form.on('submit', function (event) {
        event.preventDefault();
        var data = getFormData(form.serializeArray());
        sendLogin(data).done(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            console.log(args);
        }).fail(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            console.log(args);
            console.log('Unable to login!');
        });
    });
    $.get('http://localhost:48213/api/users/1').done(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        console.log(args);
    }).fail(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        console.log(args);
        console.log('Unable to load data!');
    });
});
//# sourceMappingURL=login.js.map