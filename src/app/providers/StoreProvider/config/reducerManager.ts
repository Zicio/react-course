import {
  AnyAction, Reducer, ReducersMapObject, combineReducers,
} from '@reduxjs/toolkit';
import { ReducerManager, StateSchemaKey, stateSchema } from './stateSchema';

export function createReducerManager(initialReducers: ReducersMapObject<stateSchema>): ReducerManager {
  const reducers = { ...initialReducers };

  // Создаем root reducer
  let combinedReducer = combineReducers(reducers);

  // Массив с названиями редюсеров, которые мы хотим удалить
  let keysToRemove: StateSchemaKey[] = [];

  return {
    //  Возвращаем reducers
    getReducerMap: () => reducers,

    // Функция, являющаяся по сути редюсером. Она также удаляет редюсеры по ключам из keysToRemove
    reduce: (state: stateSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        keysToRemove.forEach((key) => {
          delete state[key];
        });
        keysToRemove = [];
      }

      //  Возвращаем новый root reducer
      return combinedReducer(state, action);
    },

    // Функция добавляет редюсер к объекту reducers и обновляет root reducer
    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      reducers[key] = reducer;

      combinedReducer = combineReducers(reducers);
    },

    //  Функция удаляет редюсер по ключу из объекта reducers и обновляет root reducer
    remove: (key: StateSchemaKey) => {
      if (!key || !reducers[key]) {
        return;
      }

      delete reducers[key];

      keysToRemove.push(key);

      combinedReducer = combineReducers(reducers);
    },
  };
}
