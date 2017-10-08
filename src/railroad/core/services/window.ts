import { Injectable } from '@angular/core';

function getWindow(): RailroadWindow {
    return window;
}

@Injectable()
export class WindowReference {
    get get(): RailroadWindow {
        return getWindow();
    }
}
