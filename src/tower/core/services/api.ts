import { Injectable } from '@angular/core';
import { Headers, Http, RequestMethod, RequestOptions, Response } from '@angular/http';
import { ApiChannel } from 'core/constants';
import { Observable } from 'rxjs/Observable';
import { IUserJSON, User } from 'models/user';
import { Store } from './store';

@Injectable()
export class ApiService {

    private http: Http;

    private store: Store;

    constructor(http: Http, store: Store) {
        Object.assign(this, http, store);
    }

    public getUsers(): Observable<User[]> {
        return this.http.get('/users.json').map((res: Response) => {
            console.info('response //', res);

            return res.json().map((user: IUserJSON) => {
                return new User(user);
            });
        });
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
