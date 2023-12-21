import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

export const BugButton = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const onThrow = () => { setError(true); };

  useEffect(() => {
    if (error) {
      throw new Error(); // ошибка для тестирования обработки ошибок в режиме разработки
    }
  }, [error]);

  return (
    <Button onClick={onThrow}>{t('throw error')}</Button>
  );
};
