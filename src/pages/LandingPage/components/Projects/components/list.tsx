import { ArrowRight } from "phosphor-react";
import { useTranslation } from "react-i18next";
import { Alt, ListContainer } from "./list.styles";

export function List() {
  const { t } = useTranslation();

  const items = t("projects.apiList", { returnObjects: true }) as string[];
  return (
    <ListContainer
      target="_blank"
      href="https://github.com/NatanRei/ntn-api-solid"
    >
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <Alt>
        {t("projects.apiAccess")} <ArrowRight />
      </Alt>
    </ListContainer>
  );
}
