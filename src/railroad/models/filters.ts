export interface IFilterQueries {
    id?: number;
    title: string;
    divsion: string;
    projectOwner: string;
    budget: string;
    status: string;
}

export class Filters implements IFilterQueries {
    public id: number = 0;
    public title: string;
    public divsion: string;
    public projectOwner: string;
    public budget: string;
    public status: string;

    constructor(data: IFilterQueries) {
        Object.assign(this, data);
    }
}
