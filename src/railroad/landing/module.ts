import { NgModule } from '@angular/core';
import { LandingRoutesModule } from './routes';
import { SharedModule } from '../shared/module';
import { LandingBase } from './base/base';
import { ProjectList } from './project-list/project-list';
import { ProjectTable } from './project-table/project-table';
import { Row } from './row/row';
import { EditRow } from './edit-row/edit-row';
import { FilterRow } from './filter-row/filter-row';

@NgModule({
    declarations: [
        LandingBase,
        ProjectList,
        ProjectTable,
        Row,
        EditRow,
        FilterRow
    ],
    imports: [
        LandingRoutesModule,
        SharedModule
    ]
})
export class LandingModule {

}
