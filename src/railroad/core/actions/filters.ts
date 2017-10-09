import { Action } from '@ngrx/store';
import { Filters } from '../../models/filters';

export const EDITING: string = 'FILTERS_EDITING';

export class Editing implements Action {
    public readonly type: string = EDITING;
    constructor(public payload: Data) {}
}

export type All = Editing;
