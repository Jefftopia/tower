import { NgModule } from '@angular/core';
import { LandingRoutesModule } from './routes';
import { SharedModule } from '../shared/module';
import { LandingBase } from './base/base';
import { ProjectList } from './project-list/project-list';
import { ProjectTable } from './project-table/project-table';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        LandingBase,
        ProjectList,
        ProjectTable
    ],
    imports: [
        LandingRoutesModule,
        SharedModule,
        NgbPaginationModule
    ]
})
export class LandingModule {

}
