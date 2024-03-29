import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';

import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  const { t } = useTranslation();

  return (
    <div data-testid="counter">
      <h1 data-testid="value">{counterValue}</h1>
      <Button data-testid="increment" onClick={increment}>{t('increment')}</Button>
      <Button data-testid="decrement" onClick={decrement}>{t('decrement')}</Button>
    </div>
  );
};
