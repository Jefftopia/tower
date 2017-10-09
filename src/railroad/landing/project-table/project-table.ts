import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Project } from 'models/project';
import { Filters } from 'models/filters';
import { Store } from '@ngrx/store';
import { IRailroadState } from '../../core/interfaces';
import * as ProjectActions from '../../core/actions/projects';
import * as FiltersActions from '../../core/actions/filters';
import { IFilterQueries } from '../../models/filters';

@Component({
    selector: 'rr-project-table',
    templateUrl: './project-table.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectTable {
    @Input() public projects: Project[];
    @Input() public filters: Filters;

    private store: Store<IRailroadState>;

    constructor(store: Store<IRailroadState>) {
        Object.assign(this, { store });
    }

    public onEdit(event: boolean, project: Project): void {
        this.store.dispatch(new ProjectActions.Editing({ isEditing: true, id: project.id }));
    }

    public onSave(event: boolean, project: Project): void {
        this.store.dispatch(new ProjectActions.Save({ isEditing: false, id: project.id }));
    }

    public onFilterChange(filters: Filters): void {
        console.info('filters ', arguments);

        this.store.dispatch(new FiltersActions.Editing(filters));
    }
}
