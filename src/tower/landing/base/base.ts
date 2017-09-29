import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'tower-landing-base',
    styleUrls: [ './base.scss' ],
    templateUrl: './base.html'
})
export class LandingBase {

    private route: ActivatedRoute;

    constructor(route: ActivatedRoute) {
        Object.assign(this, route);

        console.info('base landing ', this);
    }
}
