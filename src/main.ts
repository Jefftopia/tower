import { ITowerOptions } from './tower/core/interfaces';
import { CONFIG_TOKEN } from './tower/core/constants';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode, NgModuleRef } from '@angular/core';
import { TowerModule } from './tower/module';

import './styles.scss';

const windowRef: TowerWindow = window;
const configApi: string = windowRef.towerOptions.fetchUrl;

if (process.env.ENV === 'production') {
    enableProdMode();
}

export function parseOptions(options: ITowerOptions): Promise<NgModuleRef<TowerModule>> {
    return platformBrowserDynamic(
        [
            {
                provide: CONFIG_TOKEN,
                useValue: options
            }
        ]
    ).bootstrapModule(TowerModule);
}

export function parseResponse(res: Response): Promise<NgModuleRef<TowerModule>> {
    return res.json().then(parseOptions);
}

fetch(configApi).then(parseResponse);
