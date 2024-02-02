import { stateSchema } from 'app/providers/StoreProvider';

export const getLoginPassword = (state: stateSchema) => state?.loginForm?.password;
