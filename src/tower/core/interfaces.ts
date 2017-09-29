declare global {

    interface TowerWindow extends Window {
        towerOptions?: IOptionsFetch;
    }

    // interface TowerEvent extends Event {
    //     target: TowerEventTarget;
    // }

    // interface TowerEventTarget extends EventTarget {
    //     innerWidth: number;
    // }
}

export interface IOptionsFetch {
    fetchUrl: string;
}

export interface ITowerOptions {
    URL_DATA: string;
    ROUTE_GUARDS_REG: string[];
}
