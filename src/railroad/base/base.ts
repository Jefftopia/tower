import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'rr-base',
    styleUrls: ['./base.scss'],
    templateUrl: './base.html'
})
export class BaseComponent {
    private router: Router;

    constructor(router: Router) {
        Object.assign(this, { router });
    }

    public navigate(route: string, params: object = {}): void {
        this.router.navigate([ route, params ]);
    }
}
