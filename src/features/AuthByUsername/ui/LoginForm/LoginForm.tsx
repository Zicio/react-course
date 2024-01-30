import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const {
    username, password, isLoading, error,
  } = useSelector(getLoginState);

  const onChangeUserName = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginSubmit = useCallback(() => {}, []);

  return (
    <form className={classNames(cls.LoginForm, {}, [className])} onSubmit={onLoginSubmit}>
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
      <Button className={cls.loginBtn} theme={ButtonTheme.OUTLINE}>
        {t('Войти')}
      </Button>
    </form>
  );
});
