import { Action } from '@ngrx/store';
import { Project } from '../../models/project';

export const GET_PROJECTS: string = 'GET_PROJECTS';
export const GET_SUCCESS: string = 'GET_SUCCESS';

export class Get implements Action {
    public readonly type: string = GET_PROJECTS;
}

export class GetSuccess implements Action {
    public readonly type: string = GET_SUCCESS;
    public payload: Project[];

    constructor(projects: Project[]) {
        this.payload = projects;
    }
}

export type All = Get | GetSuccess;
