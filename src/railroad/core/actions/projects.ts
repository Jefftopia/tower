import { Action } from '@ngrx/store';
import { Project } from '../../models/project';

export const GET_PROJECTS: string = 'GET_PROJECTS';
export const GET_SUCCESS: string = 'GET_SUCCESS';
export const EDITING: string = 'EDITING';
export const SAVE: string = 'SAVE';

export class Get implements Action {
    public readonly type: string = GET_PROJECTS;

    constructor(public payload: string) {}
}

export class GetSuccess implements Action {
    public readonly type: string = GET_SUCCESS;
    public payload: Project[];

    constructor(projects: Project[]) {
        this.payload = projects;
    }
}

export class Editing implements Action {
    public readonly type: string = EDITING;
    constructor(public payload: Data) {}
}

export class Save implements Action {
    public readonly type: string = SAVE;

    constructor(public payload: Data) {}
}

export type All = Get | GetSuccess | Editing | Save;
