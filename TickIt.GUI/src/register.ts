﻿import * as $ from 'jquery';

let getFormData = (serializedData: Array<any>) => {
    let res = {};
    for (let obj of serializedData) {
        res[obj.name] = obj.value;
    }
    return res;
};

let sendData = (userData: any) => {
    return $.post({
        url: 'http://localhost:48213/api/users',
        data: userData,
        contentType: 'application/json'
    });
};


$(document).ready(() => {
    let form = $('form');
    form.on('submit', (event) => {
        event.preventDefault();
        let data = JSON.stringify(getFormData(form.serializeArray()));
        sendData(data).done((...args: Array<any>) => {
            console.log(args);
        }).fail((...args: Array<any>) => {
            console.log(args);
            console.log('Unable to login!')
        });
    });
});