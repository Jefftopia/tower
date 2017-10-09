import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { ApiService } from '../services/api';
import { IRailroadState } from '../interfaces';
import { IProjectFields, Project } from '../../models/project';
import * as ProjectsActions from '../actions/projects';

@Injectable()
export class ProjectsEffects {

    @Effect() public get$: Observable<Action> = this.actions.ofType<ProjectsActions.Get>(ProjectsActions.GET_PROJECTS)
        .map((action: ProjectsActions.Get) => action.payload)
        .mergeMap((payload: string) => {
            return this.api.getProjects();
        })
        .map((response: Response) => {
            const projects: Project[] = response.json().map((project: IProjectFields, index: number) => {
                project.id = index;

                return new Project(project);
            });

            return new ProjectsActions.GetSuccess(projects);
        })
        .catch(() => {
            return Observable.of(new ProjectsActions.GetSuccess([]));
        });

    constructor(private api: ApiService, private actions: Actions, private store: Store<IRailroadState>) { }
}
