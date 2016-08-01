import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { iRegisterData } from './register_data.i';
import { RegisterService } from './register.srv';

@Component({
    selector: 'ti-register',
    templateUrl: './register.cmp.html',
    directives: [NgForm],
    providers: [RegisterService]
    //styleUrls: ['./login.cmp.scss'],
})

export class RegisterComponent {
    record: iRegisterData;

    constructor(public service: RegisterService) {
        this.record = { name: '', email: '', password: '' };
    }

    onSubmit() {
        console.log('Sumit!')
        console.log(this.record);
        this.service.register(this.record).subscribe((user) => { console.log(user); }, (err) => { console.log(err); });
    }
    
}
