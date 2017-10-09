import { ActionReducerMap } from '@ngrx/store';
import { projectsReducer } from './project';
import { filtersReducer } from './filters';
import { IRailroadState } from '../interfaces';

export const RAILROAD_REDUCERS: ActionReducerMap<IRailroadState> = {
    projects: projectsReducer,
    filters: filtersReducer
};

export const RAILROAD_DEFAULT_STATE: Data = {
    projects: [],
    filters: {
        id: 0,
        title: '',
        divsion: '',
        projectOwner: '',
        budget: '',
        status: ''
    }
};
