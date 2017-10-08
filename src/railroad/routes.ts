import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

const TOWER_ROUTES: Routes = [
        {
            loadChildren: './landing/module#LandingModule',
            path: ''
        },
        {
            loadChildren: './downtime/module#DowntimeModule',
            path: 'downtime'
        }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(TOWER_ROUTES)
    ]
})
export class RailroadRouterModule {
}
