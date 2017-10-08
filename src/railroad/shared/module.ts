import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Navbar } from './navbar/navbar';

@NgModule({
    declarations: [
        Navbar
    ],
    exports: [
        CommonModule,
        FormsModule,
        RouterModule,
        Navbar
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ]
})
export class SharedModule {}
