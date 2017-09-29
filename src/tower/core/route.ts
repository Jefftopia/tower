import { Injectable, Injector, OnDestroy } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { WindowReference } from '../core/services/window';

@Injectable()
export class CoreRoute implements OnDestroy {
    private injector: Injector;
    private router: Router;
    private windowRef: TowerWindow;

    private eventSubscription: Subscription;

    constructor(injector: Injector, windowRef: WindowReference) {
        Object.assign(this, { injector, windowRef: windowRef.get });
    }

    public init(): void {
        this.router = this.injector.get(Router);
        this.eventSubscription = this.router.events.subscribe((evt: NavigationEnd | NavigationStart) => {
            if (evt instanceof NavigationEnd) {
                this.windowRef.scrollTo(0, 0);
            }
        });
    }

    public ngOnDestroy(): void {
        this.eventSubscription.unsubscribe();
    }
}
