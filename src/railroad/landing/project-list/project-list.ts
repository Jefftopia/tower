import { Component, Input } from '@angular/core';
import { Project } from 'models/project';
import { Filters } from 'models/filters';

@Component({
    selector: 'rr-project-list',
    styleUrls: [ './project-list.scss' ],
    templateUrl: './project-list.html'
})
export class ProjectList {
    @Input() public projects: Project[];
    @Input() public filters: Filters;
}
