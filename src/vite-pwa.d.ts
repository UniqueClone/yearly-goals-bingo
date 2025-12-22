declare module "virtual:pwa-register/react" {
    interface RegisterSWOptions {
        immediate?: boolean;
        onRegistered?(
            registration: ServiceWorkerRegistration | undefined
        ): void;
        onRegisterError?(error: unknown): void;
    }

    interface UseRegisterSWReturn {
        offlineReady: [boolean, (value: boolean) => void];
        needRefresh: [boolean, (value: boolean) => void];
        updateServiceWorker: (reloadPage?: boolean) => Promise<void>;
    }

    export function useRegisterSW(
        options?: RegisterSWOptions
    ): UseRegisterSWReturn;
}
