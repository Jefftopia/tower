import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Filters, IFilterQueries } from '../../models/filters';

@Component({
    selector: '[rr-filter-row]',
    templateUrl: './filter-row.html'
})
export class FilterRow {
    @Input() public filters: Filters;
    @Output() public filterQueries: EventEmitter<IFilterQueries> = new EventEmitter();

    public onFiltersChange(event: Data, value: Filters): void {
        this.filterQueries.next(this.filters);
    }
}
