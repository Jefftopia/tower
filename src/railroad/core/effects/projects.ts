import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { ApiService } from '../services/api';
import { IRailroadState } from '../interfaces';
import { Project } from '../../models/project';
import * as ProjectsActions from '../actions/projects';

@Injectable()
export class ProjectsEffects {

    @Effect() public get$: Observable<Action> = this.actions.ofType<ProjectsActions.Get>(ProjectsActions.GET_PROJECTS)
        .map((action: ProjectsActions.Get) => {
            return action;
        })
        // .withLatestFrom(this.store.select('projects'))
        .switchMap((action: ProjectsActions.Get) => {
            return this.api.getProjects().map((projectsData: Project[]) => {
                return new ProjectsActions.GetSuccess(projectsData);
            });
        })
        .catch(() => {
            return Observable.of(new ProjectsActions.GetSuccess([]));
        });

    constructor(private api: ApiService, private actions: Actions, private store: Store<IRailroadState>) {}
}
