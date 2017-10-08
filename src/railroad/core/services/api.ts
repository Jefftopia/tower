import { Injectable } from '@angular/core';
import { Headers, Http, RequestMethod, RequestOptions, Response } from '@angular/http';
import { ApiChannel } from 'core/constants';
import { Observable } from 'rxjs/Observable';
import { IProjectJSON, Project } from 'models/project';

@Injectable()
export class ApiService {
    private http: Http;

    constructor(http: Http) {
        Object.assign(this, { http });
    }

    public getProjects(): Observable<Project[]> {
        return this.http.get(`${ApiChannel.MAIN}/projects.json`).map((res: Response) => {
            return res.json().map((project: IProjectJSON) => {
                return new Project(project);
            });
        })
        .publishReplay(1)
        .refCount();
    }

    private createQueryParams(params: object): string {
        let queryParams: string = '?';

        Object.keys(params).forEach((key: string) => {
            if (params[key]) {
                queryParams = queryParams.concat(key, '=', params[key], '&');
            }
        });

        return queryParams.slice(0, -1); // Remove either the ? or the &
    }
}
