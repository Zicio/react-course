import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string
}

export const Loader = memo(({ className }: LoaderProps) => (
  <span className={classNames(cls.Loader, {}, [className])} />
));
