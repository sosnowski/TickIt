import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

class RegisterModel {
    public name: string;
    public email: string;
    public password: string;
}

@Component({
    selector: 'ti-register',
    templateUrl: './register.cmp.html',
    directives: [NgForm]
    //styleUrls: ['./login.cmp.scss'],
})

export class RegisterComponent {
    record: RegisterModel;

    constructor() {
        this.record = new RegisterModel();
    }

    onSubmit() {
        console.log(this.record);
    }
    
}
