import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';

export interface stateSchema {
  counter: CounterSchema,
  user: UserSchema
}
