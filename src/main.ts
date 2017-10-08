import { IRailroadOptions } from './railroad/core/interfaces';
import { CONFIG_TOKEN } from './railroad/core/constants';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode, NgModuleRef } from '@angular/core';
import { RailroadModule } from './railroad/module';

import './styles.scss';

const windowRef: RailroadWindow = window;
const configApi: string = windowRef.railroadOptions.fetchUrl;

if (process.env.ENV === 'production') {
    enableProdMode();
}

export function parseOptions(options: IRailroadOptions): Promise<NgModuleRef<RailroadModule>> {
    return platformBrowserDynamic(
        [
            {
                provide: CONFIG_TOKEN,
                useValue: options
            }
        ]
    ).bootstrapModule(RailroadModule);
}

export function parseResponse(res: Response): Promise<NgModuleRef<RailroadModule>> {
    return res.json().then(parseOptions);
}

fetch(configApi).then(parseResponse);
