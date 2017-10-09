import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'models/project';
import { Filters } from 'models/filters';
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
    public filters: Observable<Filters>;
    private store: Store<IRailroadState>;
    private route: ActivatedRoute;

    constructor(store: Store<IRailroadState>, route: ActivatedRoute) {
        Object.assign(this, { store, route });
    }

    public ngOnInit(): void {
        this.projects = this.store.select('projects');
        this.filters = this.store.select('filters');
    }
}
