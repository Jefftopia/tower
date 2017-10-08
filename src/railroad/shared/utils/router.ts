import { Routes } from '@angular/router';
import { Navbar } from '../navbar/navbar';

export const ROUTE_MIXIN: Routes = [
    {
        component: Navbar,
        outlet: 'header',
        path: ''
    }
];
