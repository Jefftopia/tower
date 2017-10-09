import { Pipe } from '@angular/core';
import { Filters } from '../../models/filters';
import { Project } from '../../models/project';

@Pipe({
    name: 'search'
})
export class SearchPipe {
    public transform(projects: Project[], filters: Filters, _args?: Data): string {
        console.info('search pipe /// ', projects, filters, _args);

        return filters.title;
    }
}
