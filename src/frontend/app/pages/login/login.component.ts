import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateEmail } from '../../validators/email-input.validator';
import { validateNotBlank } from '../../validators/not-blank.validator';
import { LoginService } from './login.service';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup;

    constructor(private loginService: LoginService, private formBuilder: FormBuilder) {
    }

    login = () => {
        this.loginService.login(this.loginForm.controls['email'].value);
    }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, validateEmail, validateNotBlank]]
        });
    }
}
