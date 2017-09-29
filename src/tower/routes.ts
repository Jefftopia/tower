import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
// import { MaintenanceGuard } from './route-guards';

const TOWER_ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [ MaintenanceGuard ],
    //     canActivateChild: [ MaintenanceGuard ],
    //     children: [
            {
                loadChildren: './landing/module#LandingModule',
                path: ''
            },
            {
                loadChildren: './downtime/module#DowntimeModule',
                path: 'downtime'
            }
    //     ]
    // }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(TOWER_ROUTES)
    ]
})
export class TowerRouterModule {
}
