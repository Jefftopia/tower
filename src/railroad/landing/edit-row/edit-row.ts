import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from 'models/project';
// import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: '[rr-edit-row]',
    templateUrl: './edit-row.html'
})
export class EditRow {
    @Input() public project: Project;
    @Output() public saved: EventEmitter<boolean> = new EventEmitter();

    public save(event: object): void {
        this.saved.emit(true);
    }
}
