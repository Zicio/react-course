import { DeepPartial } from '@reduxjs/toolkit';
import { stateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
  test('should return username', () => {
    const state: DeepPartial<stateSchema> = {
      loginForm: {
        username: 'Oleg',
      },
    };
    expect(getLoginUsername(state as stateSchema)).toBe('Oleg');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<stateSchema> = {
    };
    expect(getLoginUsername(state as stateSchema)).toBe(undefined);
  });
});
