import * as $ from 'jquery';

let getFormData = (serializedData: Array<any>) => {
    let res = {};
    for (let obj of serializedData) {
        res[obj.name] = obj.value;
    }
    return res;
};

let sendLogin = (loginData: any) => {
    return $.post('http://localhost:48213/api/users/login', loginData);
};


$(document).ready(() => {
    let form = $('form');
    form.on('submit', (event) => {
        event.preventDefault();
        let data = JSON.stringify(getFormData(form.serializeArray()));
        sendLogin(data).done((...args:Array<any>) => {
            console.log(args);
        }).fail((...args: Array<any>) => {
            console.log(args);
            console.log('Unable to login!')
        });
    });

    $.get('http://localhost:48213/api/users/1').done((...args: Array<any>) => {
        console.log(args);
    }).fail((...args: Array<any>) => {
        console.log(args);
        console.log('Unable to load data!')
    });
});