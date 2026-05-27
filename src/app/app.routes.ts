import { Routes } from '@angular/router';
import { Error404 } from './error404/error404';
import { Home } from './home/home';
import { Projects } from './projects/projects';
import { Resume } from './resume/resume';

export const routes: Routes = [
    {path: '', component: Home, pathMatch: 'full'},
    {path: 'projects', component: Projects, pathMatch: 'full'},
    {path: 'resume',component: Resume, pathMatch: 'full'},  
    {path: 'error-404', component: Error404, pathMatch: 'full'},
    {path: '**', redirectTo: 'error-404', pathMatch: 'full'},
];