import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { memo, useCallback, useEffect } from 'react';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { loginByUsername } from '../../model/services/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
className?: string;
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const store = useStore() as ReduxStoreWithManager;

  const {
    username, password, isLoading, error,
  } = useSelector(getLoginState);

  useEffect(() => {
    store.reducerManager.add('loginForm', loginReducer);

    return () => {
      store.reducerManager.remove('loginForm');
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeUserName = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <form id="login" className={classNames(cls.LoginForm, {}, [className])} onSubmit={onLoginSubmit}>
      <Text title={t('Форма авторизации')} />
      {error && <Text text={t('ошибка авторизации')} theme={TextTheme.ERROR} />}
      <Input
        type="text"
        className={cls.input}
        placeholder={t('Введите username')}
        onChange={onChangeUserName}
        value={username}
        autoFocus
      />
      <Input
        type="text"
        className={cls.input}
        placeholder={t('Введите пароль')}
        onChange={onChangePassword}
        value={password}
      />
      <Button className={cls.loginBtn} theme={ButtonTheme.OUTLINE} form="login" type="submit" disabled={isLoading}>
        {t('Войти')}
      </Button>
    </form>
  );
});

export default LoginForm;
