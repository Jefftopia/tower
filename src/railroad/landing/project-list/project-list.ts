import { Component, Input } from '@angular/core';
import { Project } from 'models/project';

@Component({
    selector: 'railroad-project-list',
    styleUrls: [ './project-list.scss' ],
    templateUrl: './project-list.html'
})
export class ProjectList {
    @Input() public projects: Project[];
    public page: number = 1;
}
