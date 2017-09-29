import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'tower-navbar',
    styleUrls: [ './navbar.scss' ],
    templateUrl: './navbar.html'
})
export class Navbar {

    private router: Router;

    constructor(router: Router) {
        Object.assign(this, Router);
    }
}
