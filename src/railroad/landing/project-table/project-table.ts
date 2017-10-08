import { Component, Input } from '@angular/core';
import { Project } from 'models/project';

@Component({
    selector: 'rr-project-table',
    templateUrl: './project-table.html'
})
export class ProjectTable {
    @Input() public projects: Project[];
}
