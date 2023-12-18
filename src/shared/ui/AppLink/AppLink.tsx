import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { Link, type LinkProps } from 'react-router-dom';
import { type FC } from 'react';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = ({
  className,
  children,
  theme = AppLinkTheme.PRIMARY,
  ...props
}) => {
  return (
    <Link
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...props}
    >
      {children}
    </Link>
  );
};
