import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        title: 'Connexion',
        path: 'login',
        loadComponent: () => import('./auth/page/auth.component').then(m => m.AuthComponent)
    },
    {
        title: 'Inscription',
        path: 'register',
        loadComponent: () => import('./auth/page/auth.component').then(m => m.AuthComponent)
    },

    // home route
    {
        title: 'Yann ndani',
        path: 'home',
        loadComponent: ()=> import('./features/landing/pages/landing.component').then(m => m.LandingComponent)
    },

    // documentation routes
    {
        title: 'Guid',
        path: 'documentation',
        loadComponent: ()=> import('./features/documentation/page/documentation.component').then(m => m.DocumentationComponent)
    },





    // redirect 
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
