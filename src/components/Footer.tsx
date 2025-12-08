import { Heart } from "phosphor-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full h-14 flex items-center justify-center z-200 bg-background gap-1 text-primary">
      2025 &copy; {t("footer.pt1")}{" "}
      <Heart className="mx-0 my-1.5 text-primary dark:text-neutral-100" />{" "}
      {t("footer.pt2")}
    </footer>
  );
}
