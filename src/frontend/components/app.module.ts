import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ElementModule } from './elements/element.module';
import { LoginModule } from './pages/login/login.module';

@NgModule({
    imports: [
        BrowserModule,
        ElementModule,
        routing,
        LoginModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
