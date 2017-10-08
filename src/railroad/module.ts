import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BaseComponent } from './base/base';
import { CoreModule } from './core/module';
import { RailroadRouterModule } from './routes';

import { AppLoadConfig } from './core/services/app-load';
import { appLoad } from './app-load';

import { StoreModule } from '@ngrx/store';
import { RAILROAD_DEFAULT_STATE, RAILROAD_REDUCERS } from './core/reducers/index';

import { EffectsModule } from '@ngrx/effects';
import { RAILROAD_EFFECTS } from './core/effects/index';

@NgModule({
    bootstrap: [ BaseComponent ],
    declarations: [ BaseComponent ],
    exports: [
        BaseComponent,
        RailroadRouterModule,
        CoreModule,
        NgbModule
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule,
        EffectsModule.forRoot(RAILROAD_EFFECTS),
        StoreModule.forRoot(RAILROAD_REDUCERS, { initialState: RAILROAD_DEFAULT_STATE }),
        RailroadRouterModule,
        NgbModule.forRoot()
    ],
    providers: [
        {
            deps: [ AppLoadConfig ],
            multi: true,
            provide: APP_INITIALIZER,
            useFactory: appLoad
        }
    ]
})
export class RailroadModule {}