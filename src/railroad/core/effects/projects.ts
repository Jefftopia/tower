import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action,  } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { ApiService } from '../services/api';
import { Project } from '../../models/project';

import * as ProjectsActions from '../actions/projects';
const INIT_ACTION: string = '@ngrx/store/init';

@Injectable()
export class ProjectsEffects {
    public api: ApiService;
    public actions: Actions;

    @Effect()
    public init$: Observable<Action> = Observable.defer(() => {
        debugger;

        return Observable.of(new ProjectsActions.Get());
    });

    @Effect() public get$: Observable<Action> = this.actions.ofType<ProjectsActions.Get>(ProjectsActions.GET_PROJECTS)
        .map((action: Action) => {
            debugger;

            return (<ProjectsActions.GetSuccess> action).payload;
            // return this.api.getProjects();
        })
        .switchMap((projects: Project[]) => {
            debugger;

            return this.api.getProjects().map((projectsData: Project[]) => {
                debugger;

                return new ProjectsActions.GetSuccess(projectsData);
            });
        })
        .catch(() => {
            debugger;

            return Observable.of(new ProjectsActions.GetSuccess([]));
        });

    constructor(api: ApiService, actions: Actions) {
        debugger;

        console.info('actions //', actions);

        Object.assign(this, { api, actions });
    }
}
