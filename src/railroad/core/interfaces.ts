import { Project } from '../models/project';

declare global {

    interface RailroadWindow extends Window {
        railroadOptions?: IOptionsFetch;
    }
}

export interface IRailroadState {
    projects: Project[];
}

export interface IOptionsFetch {
    fetchUrl: string;
}

export interface IRailroadOptions {
    URL_DATA: string;
    ROUTE_GUARDS_REG: string[];
}
