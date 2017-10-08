export interface IProjectJSON {
    title: string;
    division: string;
    project_owner?: string;
    projectOwner?: string;
    budget: number;
    status: string;
    created: Date;
    modified: Date;
}

export class Project implements IProjectJSON {
    public title: string;
    public division: string;
    public projectOwner: string;
    public budget: number;
    public status: string;
    public created: Date;
    public modified: Date;

    public static DOB_RE: RegExp = /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/;

    private static defaults(): IProjectJSON {
        return {
            title: '',
            division: '',
            project_owner: '',
            budget: undefined,
            status: '',
            created: new Date(),
            modified: new Date()
        };
    }

    constructor(data: IProjectJSON) {
        data.projectOwner = data.project_owner;
        delete data.project_owner;

        Object.assign(this, Project.defaults(), data);
    }
}
