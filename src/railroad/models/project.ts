export interface IProjectFields {
    title: string;
    division: string;
    project_owner?: string;
    projectOwner?: string;
    budget: number;
    status: string;
    created: Date;
    modified: Date;
    id: number;
    isEditing: boolean;
}

export class Project implements IProjectFields {
    public id: number;
    public title: string;
    public division: string;
    public projectOwner: string;
    public budget: number;
    public status: string;
    public created: Date;
    public modified: Date;
    public isEditing: boolean = false;

    constructor(data: IProjectFields) {
        data.projectOwner = data.projectOwner || data.project_owner;
        delete data.project_owner;

        Object.assign(this, data);
    }
}
