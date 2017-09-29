import { Injectable } from '@angular/core';
import { ApiChannel } from 'core/constants';
import { Observable } from 'rxjs/Observable';
import { IUserJSON, User } from 'models/user';

// simple store
@Injectable()
export class Store {
    public users: Observable<User[]>;
}
