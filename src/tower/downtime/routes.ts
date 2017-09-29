import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DowntimeBase } from './base/base';
import { ROUTE_MIXIN } from '../shared/utils/router';

const DOWNTIME_ROUTES: Routes = [
    ...ROUTE_MIXIN,
    {
        component: DowntimeBase,
        path: ''
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(DOWNTIME_ROUTES)
    ]
})
export class DowntimeRoutesModule {

}
