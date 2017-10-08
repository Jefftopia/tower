import { ModuleWithProviders, NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

import * as Service from './services/index';

// import { StoreModule } from '@ngrx/store';
// import { RAILROAD_DEFAULT_STATE, RAILROAD_REDUCERS } from './reducers/index';

// import { EffectsModule } from '@ngrx/effects';
// import { RAILROAD_EFFECTS } from './effects/index';

@NgModule({
    declarations: [],
    imports: [
        HttpModule
        // ,
        // EffectsModule.forRoot(RAILROAD_EFFECTS),
        // StoreModule.forRoot(RAILROAD_REDUCERS, { initialState: RAILROAD_DEFAULT_STATE })
    ],
    providers: [
        Service.AppLoadConfig,
        Service.ApiService,
        Service.WindowReference
    ]
})

export class CoreModule {}
