import { AppLoadConfig } from './core/services/app-load';

export function appLoad(appLoadConfig: AppLoadConfig): () => Promise<void[]> {
    return (): Promise<void[]> => {
        return Promise.all([
            appLoadConfig.appInit()
        ]);
    };
}
