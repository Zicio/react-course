import { classNames } from 'shared/lib/classNames/classNames';
import {
  MouseEvent, ReactNode, useRef, useState,
} from 'react';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = ({
  className, children, isOpen, onClose,
}: ModalProps) => {
  const [isClothing, setIsClothing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const closeHandler = () => {
    if (onClose) {
      setIsClothing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClothing(false);
      }, ANIMATION_DELAY);
    }
  };

  const onContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClothing,
  };
  return (
    <div className={classNames(cls.Modal, mods, [className])}>
      <div className={cls.overlay} onClick={closeHandler}>
        <div className={cls.content} onClick={onContentClick}>
          {children}
        </div>
      </div>
    </div>
  );
};
