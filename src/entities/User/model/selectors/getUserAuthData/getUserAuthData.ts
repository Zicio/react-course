import { stateSchema } from 'app/providers/StoreProvider';

export const getUserAuthData = (state: stateSchema) => state.user.authData;
