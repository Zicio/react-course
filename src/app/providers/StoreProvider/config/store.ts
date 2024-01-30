import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';
import { stateSchema } from './stateSchema';

export function createReduxStore(initialState?: stateSchema) {
  const rootReducer: ReducersMapObject<stateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  };
  return configureStore<stateSchema>({
    reducer: rootReducer,
    preloadedState: initialState,
    devTools: __IS_DEV__,
  });
}
