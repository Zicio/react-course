import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StoreProvider, stateSchema } from 'app/providers/StoreProvider';

export const StoreDecorator = (state: DeepPartial<stateSchema>) => (StoryComponent: Story) => (
  <StoreProvider initialState={state}>
    <StoryComponent />

  </StoreProvider>

);
