import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { stateSchema } from '../config/stateSchema';

interface StoreProviderProps {
children?: ReactNode;
initialState?: DeepPartial<stateSchema>;
asyncReducers?: DeepPartial<ReducersMapObject<stateSchema>>
}

export const StoreProvider = ({ children, initialState, asyncReducers }: StoreProviderProps) => {
  const store = createReduxStore(initialState as stateSchema, asyncReducers as ReducersMapObject<stateSchema>);
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
