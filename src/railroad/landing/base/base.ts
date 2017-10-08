import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'models/project';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'railroad-landing-base',
    styleUrls: [ './base.scss' ],
    templateUrl: './base.html'
})
export class LandingBase implements OnInit {
    private route: ActivatedRoute;
    public projects: Subscription;

    constructor(route: ActivatedRoute) {
        Object.assign(this, { route });
    }

    public ngOnInit(): void {
        this.projects = this.route.data.subscribe((projects: Project[]) => {
            debugger;

            return projects;
        });
    }
}
