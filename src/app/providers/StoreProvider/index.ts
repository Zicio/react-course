import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import type {
  stateSchema, ReduxStoreWithManager, ThunkConfig,
} from './config/stateSchema';

export {
  StoreProvider, createReduxStore, stateSchema, ReduxStoreWithManager, AppDispatch, ThunkConfig,
};
