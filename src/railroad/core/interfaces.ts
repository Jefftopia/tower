import { Project } from '../models/project';
import { Filters } from '../models/filters';

declare global {

    interface RailroadWindow extends Window {
        railroadOptions?: IOptionsFetch;
    }
}

export interface IRailroadState {
    projects: Project[];
    filters: Filters;
}

export interface IOptionsFetch {
    fetchUrl: string;
}

export interface IRailroadOptions {
    URL_DATA: string;
    ROUTE_GUARDS_REG: string[];
}
