import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "../lib/utils";
import { ThemeSwitch } from "./ui/theme-switch";

export const Header = () => {
  const { t } = useTranslation();

  const [opacity, setOpacity] = useState(0.5);
  const handleScroll = () => {
    if (window.pageYOffset > 10) {
      setOpacity(0.9);
    } else {
      setOpacity(0.5);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className="fixed top-0 left-0 z-200 w-screen h-14 flex items-center justify-between duration-700 bg-neutral-100 dark:bg-neutral-800 px-4 md:px-12"
      style={{
        opacity: opacity,
      }}
    >
      <div className="z-200 opacity-100 flex items-center">
        <HeaderIcon href="#home">{t("header.ntn")}</HeaderIcon>
      </div>

      <div className="z-200 opacity-100 flex items-center gap-4">
        <HeaderIcon href="#about">{t("header.who")}</HeaderIcon>
        <HeaderIcon href="#projects">{t("header.projects")}</HeaderIcon>
        <HeaderIcon href="#contact">{t("header.contact")}</HeaderIcon>
        <ThemeSwitch />
        {/*<LanguageSwitch />*/}
      </div>
    </header>
  );
};

const HeaderIcon = ({ className, ...props }: React.ComponentProps<"a">) => {
  return (
    <a
      {...props}
      className={cn(
        "text-gray-800 dark:text-gray-300 font-medium no-underline cursor-pointer hover:text-black dark:hover:text-white hover:border-b px-2",
        className
      )}
    />
  );
};
