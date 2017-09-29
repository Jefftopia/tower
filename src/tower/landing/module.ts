import { NgModule } from '@angular/core';
import { LandingBase } from './base/base';
import { LandingRoutesModule } from './routes';
import { SharedModule } from '../shared/module';

@NgModule({
    declarations: [
        LandingBase
    ],
    imports: [
        LandingRoutesModule,
        SharedModule
    ]
})
export class LandingModule {

}
