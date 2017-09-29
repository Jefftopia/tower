import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BaseComponent } from './base/base';
import { CoreModule } from './core/module';
import { TowerRouterModule } from './routes';

import { AppLoadConfig } from './core/services/app-load';
import { appLoad } from './app-load';

@NgModule({
    bootstrap: [ BaseComponent ],
    declarations: [ BaseComponent ],
    exports: [
        BaseComponent,
        TowerRouterModule,
        CoreModule
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule,
        // CoreModule.forRoot(),
        TowerRouterModule
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
export class TowerModule {}
