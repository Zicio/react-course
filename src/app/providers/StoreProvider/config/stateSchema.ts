import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { CounterSchema } from 'entities/Counter';
import { IProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { NavigateOptions, To } from 'react-router-dom';

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

export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
}
