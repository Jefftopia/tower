import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'models/project';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { IRailroadState } from '../../core/interfaces';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'rr-landing-base',
    styleUrls: [ './base.scss' ],
    templateUrl: './base.html'
})
export class LandingBase implements OnInit {
    public projects: Observable<Project[]>;
    private store: Store<IRailroadState>;
    private route: ActivatedRoute;

    constructor(store: Store<IRailroadState>, route: ActivatedRoute) {
        Object.assign(this, { store, route });
    }

    public ngOnInit(): void {
        this.projects = this.store.select((state: IRailroadState) => {
            return state.projects;
        });

        // this.projects = this.store.select('projects');
    }
}
