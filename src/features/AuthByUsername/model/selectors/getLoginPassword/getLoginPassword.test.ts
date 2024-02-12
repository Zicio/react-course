import { DeepPartial } from '@reduxjs/toolkit';
import { stateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
  test('should return password', () => {
    const state: DeepPartial<stateSchema> = {
      loginForm: {
        password: '123',
      },
    };
    expect(getLoginPassword(state as stateSchema)).toBe('123');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<stateSchema> = {
    };
    expect(getLoginPassword(state as stateSchema)).toBe(undefined);
  });
});
