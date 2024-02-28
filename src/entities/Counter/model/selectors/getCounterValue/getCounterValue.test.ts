import { stateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue.test', () => {
  const state: DeepPartial<stateSchema> = {
    counter: { value: 10 },
  };
  test('should return counter value', () => {
    expect(getCounterValue(state as stateSchema)).toBe(10);
  });
});
