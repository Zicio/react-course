import { stateSchema } from 'app/providers/StoreProvider';

export const getLoginUsername = (state: stateSchema) => state?.loginForm?.username;
