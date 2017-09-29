import { ModuleWithProviders, NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

import {
    ApiService,
    AppLoadConfig,
    Store,
    WindowReference
} from './services/index';
import { CoreRoute } from './route';

@NgModule({
    declarations: [],
    exports: [
        HttpModule
    ],
    imports: [
        HttpModule
    ],
    providers: [
        AppLoadConfig,
        ApiService,
        CoreRoute,
        Store,
        WindowReference
    ]
})

export class CoreModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                // Http,
                // ApiService
            ]
        };
    }
}
