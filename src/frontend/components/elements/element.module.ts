import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputFieldComponent } from './inputField/input-field.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        RouterModule,
        CommonModule
    ],
    declarations: [
        InputFieldComponent,
    ],
    exports: [
        InputFieldComponent,
    ]
})
export class ElementModule {
}
