import { Injectable } from '@angular/core';

@Injectable()
export class AppLoadConfig {

    constructor() {
        console.info('app load');
    }

    public init(): void {
        console.info('init called');
    }
}
