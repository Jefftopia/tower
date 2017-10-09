import { Injectable } from '@angular/core';
import { Headers, Http, RequestMethod, RequestOptions, Response } from '@angular/http';
import { ApiChannel } from 'core/constants';
import { Observable } from 'rxjs/Observable';
import { IProjectFields, Project } from 'models/project';

@Injectable()
export class ApiService {
    private http: Http;

    constructor(http: Http) {
        Object.assign(this, { http });
    }

    public getProjects(): Observable<Response> {
        return this.http.get(`${ApiChannel.MAIN}/projects.json`);
    }
}
