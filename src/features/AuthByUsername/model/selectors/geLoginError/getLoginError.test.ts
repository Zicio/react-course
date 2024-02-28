import { stateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
  test('should return error', () => {
    const state: DeepPartial<stateSchema> = {
      loginForm: {
        error: 'error',
      },
    };
    expect(getLoginError(state as stateSchema)).toBe('error');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<stateSchema> = {
    };
    expect(getLoginError(state as stateSchema)).toBe(undefined);
  });
});
