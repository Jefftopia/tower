import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

const RR_ROUTES: Routes = [
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
        RouterModule.forRoot(RR_ROUTES)
    ]
})
export class RailroadRouterModule {
}
