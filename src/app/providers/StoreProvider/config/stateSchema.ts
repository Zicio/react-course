import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter';
import { IProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface stateSchema {
  counter: CounterSchema,
  user: UserSchema,
  loginForm?: LoginSchema,
  profile?: IProfileSchema,
}

export type StateSchemaKey = keyof stateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<stateSchema>;
  reduce: (state: stateSchema, action: AnyAction) => CombinedState<stateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<stateSchema> {
  reducerManager: ReducerManager
}
