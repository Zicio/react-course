import { DeepPartial } from '@reduxjs/toolkit';
import { stateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginLoading.test', () => {
  test('should return true', () => {
    const state: DeepPartial<stateSchema> = {
      loginForm: {
        isLoading: true,
      },
    };
    expect(getLoginIsLoading(state as stateSchema)).toBeTruthy();
  });
  test('should work with empty state', () => {
    const state: DeepPartial<stateSchema> = {
    };
    expect(getLoginIsLoading(state as stateSchema)).toBeFalsy();
  });
});
