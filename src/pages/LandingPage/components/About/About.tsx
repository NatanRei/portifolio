import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import en from "date-fns/locale/en-US";
import { AboutContainer, BoxContainer, BoxTitleContainer } from "./About.styles";
import { Counter } from "./components/Counter";
import { Paragraph } from '@/pages/Home.styles';
import { useTranslation } from 'react-i18next';

export function About() {
    const { t } = useTranslation();

    const initOfNatanProgramingCarrer = new Date("2020-09-01");

    const currentLanguage = t("currentLanguage");

    const publishedDateRelativeToNow = formatDistanceToNow(
      initOfNatanProgramingCarrer,
      {
        locale: currentLanguage === 'pt-br' ? ptBR : en,
        addSuffix: true,
      }
    );

    return (
      <AboutContainer>
        <h2>{t("about.hello")},</h2>
        <BoxContainer>
          <Paragraph>
            {t("about.pt1")}, {publishedDateRelativeToNow}.
          </Paragraph>
          <Counter initialDate={initOfNatanProgramingCarrer} />
        </BoxContainer>
        <BoxContainer>
          <Paragraph>{t("about.pt2")}</Paragraph>
          <Paragraph>{t("about.pt3")}</Paragraph>
        </BoxContainer>
        <BoxTitleContainer>{t("about.projects")}</BoxTitleContainer>
      </AboutContainer>
    );
}