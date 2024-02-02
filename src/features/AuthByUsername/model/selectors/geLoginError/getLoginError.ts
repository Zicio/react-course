import { stateSchema } from 'app/providers/StoreProvider';

export const getLoginError = (state: stateSchema) => state?.loginForm?.error;
