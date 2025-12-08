import { useTranslation } from "react-i18next";

export function LanguageSwitch() {
  const { i18n } = useTranslation();

  const toggleLang = () => {
    const next = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(next);
  };

  return (
    <button
      onClick={toggleLang}
      className="px-3 py-2 rounded bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-900"
    >
      {i18n.language === "pt" ? "EN" : "PT"}
    </button>
  );
}
