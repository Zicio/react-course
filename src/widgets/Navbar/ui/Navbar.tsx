import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface NavBarProps {
  className?: string
}

export const Navbar = ({ className }: NavBarProps) => {
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>
        {t('Главная')}
      </AppLink>
      <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>
        {t('О сайте')}
      </AppLink>
    </div>
  )
}
