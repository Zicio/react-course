import { classNames } from 'shared/lib/classNames/classNames';
import {
  ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps =Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
className?: string;
value?: string;
onChange?: (value: string) => void;
autoFocus?: boolean,
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>();

  const [isFocused, setIsFocused] = useState(false);

  const [carriagePosition, setCarriagePosition] = useState(0);

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref.current.focus();
    }
  }, [autoFocus]);

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (e: any) => {
    setCarriagePosition(e.target.selectionStart || 0);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCarriagePosition(e.target.value.length);
  };

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {placeholder && (<div className={cls.placeholder}>{`${placeholder}>`}</div>)}
      <div className={cls.carriageWrapper}>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.input}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          {...otherProps}
        />
        {isFocused
        && (<span className={cls.carriage} style={{ left: `${carriagePosition * 9}px` }} />)}
      </div>

    </div>
  );
});
