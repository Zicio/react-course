import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { stateSchema } from './stateSchema';

export function createReduxStore(initialState?: stateSchema) {
  return configureStore<stateSchema>({
    reducer: {
      counter: counterReducer,
    },
    preloadedState: initialState,
    devTools: __IS_DEV__,
  });
}
