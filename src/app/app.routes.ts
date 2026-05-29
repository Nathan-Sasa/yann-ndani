import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

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
    {
        title: 'Déconnexion',
        path: 'logout',
        loadComponent: () => import('./auth/components/logout/logout.component').then(m => m.LogoutComponent)
    },

    // home route
    {
        title: 'Yann ndani',
        path: 'home',
        loadComponent: ()=> import('./features/landing/pages/landing.component').then(m => m.LandingComponent)
    },

    // documentation routes
    {
        title: 'Guide',
        path: 'documentation',
        loadComponent: ()=> import('./features/documentation/page/documentation.component').then(m => m.DocumentationComponent)
    },


    // =============================================================
    // dist routes
    // les routes dissont les routes vers les les pages de gestion de l'application

    {
        title: 'Yann ndani',
        path: 'dist',
        loadComponent: () => import('./dist/page/dist.component').then(m => m.DistComponent),
        canActivate: [authGuard]
    },
    
    {
        title: 'Tableau de bord',
        path: 'dashboard',
        loadComponent: () => import('./dist/dashboard/page/dashboard.component').then(m => m.DashboardComponent),
        // canActivate: [authGuard]
    },
    {
        title: 'Produits',
        path: 'products',
        loadComponent: () => import('./dist/products/page/products.component').then(m => m.ProductsComponent),
        canActivate: [authGuard]
    },

    {
        title: 'Achats',
        path: 'achat',
        loadComponent: () => import('./dist/achat/page/achat.component').then(m => m.AchatComponent),
        canActivate: [authGuard]
    },
    {
        title: 'Vents',
        path: 'rapport-ventes',
        loadComponent: () => import('./dist/ventes/page/ventes.component').then(m => m.VentesComponent),
        canActivate: [authGuard]
    },
    {
        title: 'Trésorerie',
        path: 'tresorerie',
        loadComponent: () => import('./dist/tresorerie/page/tresorerie.component').then(m => m.TresorerieComponent),
        canActivate: [authGuard]
    },
    {
        title: 'Créance et dette',
        path: 'creance-et-dette',
        loadComponent: () => import('./dist/creance/page/creance-dette.component').then(m => m.CreanceDetteComponent),
        canActivate: [authGuard]
    },


    // test routes
    //=========================
    // {
    //     title: 'loader test',
    //     path: 'loader-custom',
    //     loadComponent: () => import('./shared/components/loaders/loader-custom/loader-custom.component').then(m => m.LoaderCustomComponent)
    // },




    // redirect 
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
