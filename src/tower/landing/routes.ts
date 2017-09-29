import { Injectable, NgModule } from '@angular/core';
import { ApiService } from '../core/services/api';
import { Resolve, RouterModule, Routes } from '@angular/router';
import { LandingBase } from './base/base';
import { ROUTE_MIXIN } from '../shared/utils/router';
import { Observable } from 'rxjs/Observable';
import { User } from 'models/user';

@Injectable()
export class UsersResolve implements Resolve<User[]> {
    private api: ApiService;

    constructor(api: ApiService) {
        Object.assign(this, { api });
    }

    public resolve(): Observable<User[]> {
        return this.api.getUsers();
    }
}

const LANDING_ROUTES: Routes = [
    ...ROUTE_MIXIN,
    {
        component: LandingBase,
        path: '',
        resolve: {
            users: UsersResolve
        }
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(LANDING_ROUTES)
    ],
    providers: [
        UsersResolve
    ]
})
export class LandingRoutesModule {

}
