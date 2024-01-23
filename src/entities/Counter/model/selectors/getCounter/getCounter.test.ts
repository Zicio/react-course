import { DeepPartial } from '@reduxjs/toolkit';
import { stateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
  test('should return counter', () => {
    const state: DeepPartial<stateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounter(state as stateSchema)).toEqual({ value: 10 });
  });
});
