import { Routes } from '@angular/router';
import { Error404 } from './error404/error404';
import { Home } from './home/home';

export const routes: Routes = [
    {path: '', component: Home, pathMatch: 'full'},
    {path: 'error-404', component: Error404, pathMatch: 'full'},
    {path: '**', redirectTo: 'error-404', pathMatch: 'full'},
];