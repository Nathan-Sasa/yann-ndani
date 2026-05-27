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
        loadComponent: () => import('./dist/page/dist.component').then(m => m.DistComponent)
    },
    
    {
        title: 'Tableau de bord',
        path: 'dashboard',
        loadComponent: () => import('./dist/dashboard/page/dashboard.component').then(m => m.DashboardComponent)
        // canActivate: []
    },
    {
        title: 'Produits',
        path: 'products',
        loadComponent: () => import('./dist/products/page/products.component').then(m => m.ProductsComponent)
    },

    {
        title: 'Achats',
        path: 'achat',
        loadComponent: () => import('./dist/achat/page/achat.component').then(m => m.AchatComponent)
    },
    {
        title: 'Vents',
        path: 'rapport-ventes',
        loadComponent: () => import('./dist/ventes/page/ventes.component').then(m => m.VentesComponent)
    },
    {
        title: 'Trésorerie',
        path: 'tresorerie',
        loadComponent: () => import('./dist/tresorerie/page/tresorerie.component').then(m => m.TresorerieComponent)
    },
    {
        title: 'Créance et dette',
        path: 'creance-et-dette',
        loadComponent: () => import('./dist/creance/page/creance-dette.component').then(m => m.CreanceDetteComponent)
    },




    // redirect 
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
