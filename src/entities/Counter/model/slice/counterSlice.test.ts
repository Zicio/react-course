import { counterActions, counterReducer } from './counterSlice';
import { counterSchema } from '../types/counterSchema';

describe('counterSlice.test', () => {
  test('decrement', () => {
    const state: counterSchema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 9 });
  });
  test('increment', () => {
    const state: counterSchema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.increment)).toEqual({ value: 11 });
  });
  test('initialState', () => {
    expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
  });
});
