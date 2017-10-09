import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BaseComponent } from './base/base';
import { CoreModule } from './core/module';
import { RailroadRouterModule } from './routes';

import { AppLoadConfig } from './core/services/app-load';
import { appLoad } from './app-load';

@NgModule({
    bootstrap: [ BaseComponent ],
    declarations: [ BaseComponent ],
    exports: [
        BaseComponent,
        RailroadRouterModule,
        CoreModule
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule,
        RailroadRouterModule
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
