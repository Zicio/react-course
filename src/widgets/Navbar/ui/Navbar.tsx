import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";

interface NavBarProps {
  className?: string;
}

export const Navbar = ({ className }: NavBarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <AppLink to={"/"} theme={AppLinkTheme.SECONDARY}>
        Главная
      </AppLink>
      <AppLink to={"/about"} theme={AppLinkTheme.SECONDARY}>
        О сайте
      </AppLink>
    </div>
  );
};
