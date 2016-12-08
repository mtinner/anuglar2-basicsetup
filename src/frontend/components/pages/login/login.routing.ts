import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const contentRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    }
];

export const loginRouting: ModuleWithProviders = RouterModule.forChild(contentRoutes);
