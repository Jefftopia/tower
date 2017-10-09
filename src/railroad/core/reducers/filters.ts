import { Action } from '@ngrx/store';
import { Filters } from '../../models/filters';
import * as FiltersActions from '../actions/filters';

export function updateFilter(state: Filters, newData: Data): Filters {
     return new Filters({ ...state, ...newData });
}

export function filtersReducer(state: Filters, action: FiltersActions.All): Filters {
    switch (action.type) {
        case FiltersActions.EDITING:
            return updateFilter(state, <Data> action.payload);
        default:
            return state;
    }
}
