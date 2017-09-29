import { Injectable } from '@angular/core';
import { CoreRoute } from '../route';

@Injectable()
export class AppLoadConfig {
    private coreRoute: CoreRoute;

    constructor(coreRoute: CoreRoute) {
        Object.assign(this, { coreRoute });
    }

    public appInit(): void {
        this.coreRoute.init();
    }
}
