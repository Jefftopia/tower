import { Injectable, NgModule } from '@angular/core';
import { Resolve, RouterModule, Routes } from '@angular/router';
import { LandingBase } from './base/base';
import { ROUTE_MIXIN } from '../shared/utils/router';
import { Observable } from 'rxjs/Observable';
import { Project } from 'models/project';
import { Store } from '@ngrx/store';
import { IRailroadState } from '../core/interfaces';
import * as ProjectActions from '../core/actions/projects';

@Injectable()
export class ProjectsResolve implements Resolve<void> {
    private store: Store<IRailroadState>;

    constructor(store: Store<IRailroadState>) {
        Object.assign(this, { store });
    }

    public resolve(): Observable<void> {
        return Observable.of(this.store.dispatch({ type: ProjectActions.GET_PROJECTS }));
    }
}

const LANDING_ROUTES: Routes = [
    ...ROUTE_MIXIN,
    {
        component: LandingBase,
        path: '',
        resolve: {
            projects: ProjectsResolve
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
        ProjectsResolve
    ]
})
export class LandingRoutesModule {

}
