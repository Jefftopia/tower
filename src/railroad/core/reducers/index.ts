import { ActionReducerMap } from '@ngrx/store';
import { projectsReducer } from './project';
import { IRailroadState } from '../interfaces';

export const RAILROAD_REDUCERS: ActionReducerMap<IRailroadState> = {
    projects: projectsReducer
};

export const RAILROAD_DEFAULT_STATE: Data = {
    projects: []
};
