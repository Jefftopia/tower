import { Action } from '@ngrx/store';
import { Project } from '../../models/project';
import * as ProjectsActions from '../actions/projects';

export function projectsReducer(state: Project[], action: ProjectsActions.All): Project[] {
    debugger;

    switch (action.type) {
        case ProjectsActions.GET_PROJECTS:
            return state;
        case ProjectsActions.GET_SUCCESS:
            return (<ProjectsActions.GetSuccess> action).payload;
        default:
            return state;
    }
}
