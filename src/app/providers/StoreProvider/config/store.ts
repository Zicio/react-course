import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { stateSchema } from './stateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(initialState?: stateSchema) {
  const rootReducer: ReducersMapObject<stateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore<stateSchema>({
    reducer: rootReducer,
    preloadedState: initialState,
    devTools: __IS_DEV__,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}
