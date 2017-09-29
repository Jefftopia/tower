import { Injectable } from '@angular/core';

function getWindow(): TowerWindow {
    return window;
}

@Injectable()
export class WindowReference {
    get get(): TowerWindow {
        return getWindow();
    }
}
