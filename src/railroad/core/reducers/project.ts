import { Action } from '@ngrx/store';
import { Project } from '../../models/project';
import * as ProjectsActions from '../actions/projects';

export function updateProject(state: Project[], newData: Data): Project[] {
    const matchedIdx: number = state.findIndex((project: Project) => newData.id === project.id);

    state[matchedIdx] = new Project({ ...state[matchedIdx], ...newData });

    return state.slice();
}

export function projectsReducer(state: Project[], action: ProjectsActions.All): Project[] {
    switch (action.type) {
        case ProjectsActions.GET_PROJECTS:
            return state;
        case ProjectsActions.GET_SUCCESS:
            return (<ProjectsActions.GetSuccess> action).payload;
        case ProjectsActions.EDITING:
            return updateProject(state, <Data> action.payload);
        case ProjectsActions.SAVE:
            return updateProject(state, <Data> action.payload);
        default:
            return state;
    }
}
