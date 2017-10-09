import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from 'models/project';

@Component({
    selector: '[rr-row]',
    templateUrl: './row.html'
})
export class Row {
    @Input() public project: Project;
    @Output() public editing: EventEmitter<boolean> = new EventEmitter();

    public edit(event: object): void {
        this.editing.emit(true);
    }
}
