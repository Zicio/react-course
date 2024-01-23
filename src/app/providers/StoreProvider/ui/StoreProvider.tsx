import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { stateSchema } from '../config/stateSchema';

interface StoreProviderProps {
children?: ReactNode;
initialState?: DeepPartial<stateSchema>;
}

export const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
  const store = createReduxStore(initialState as stateSchema);
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
