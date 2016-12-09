import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ElementModule } from '../../elements/element.module';
import { loginRouting } from './login.routing';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        HttpModule,
        BrowserModule,
        ElementModule,
        loginRouting,
        ReactiveFormsModule
    ],
    providers: [
        LoginService,
    ],
    declarations: [
        LoginComponent
    ]
})
export class LoginModule {
}
