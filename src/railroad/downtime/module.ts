import { NgModule } from '@angular/core';
import { DowntimeBase } from './base/base';
import { DowntimeRoutesModule } from './routes';
import { SharedModule } from '../shared/module';

@NgModule({
    declarations: [
        DowntimeBase
    ],
    imports: [
        DowntimeRoutesModule,
        SharedModule
    ],
    providers: []
})

export class DowntimeModule {

}
