import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { $api } from 'shared/api/api';
import { To, NavigateOptions } from 'react-router-dom';
import { stateSchema } from './stateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
  initialState?: stateSchema,
  asyncReducers?: ReducersMapObject<stateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void,
) {
  const rootReducer: ReducersMapObject<stateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore({
    reducer: reducerManager.reduce,
    preloadedState: initialState,
    devTools: __IS_DEV__,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
          navigate,
        },
      },
    }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
