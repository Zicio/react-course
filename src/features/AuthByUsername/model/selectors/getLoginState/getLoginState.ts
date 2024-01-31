import { stateSchema } from 'app/providers/StoreProvider';

export const getLoginState = (state: stateSchema) => state?.loginForm;
