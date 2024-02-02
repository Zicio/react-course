import { stateSchema } from 'app/providers/StoreProvider';

export const getLoginIsLoading = (state: stateSchema) => state?.loginForm?.isLoading;
