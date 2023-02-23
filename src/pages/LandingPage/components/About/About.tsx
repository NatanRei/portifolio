import { AboutContainer, BoxContainer, ParagraphContainer } from "./About.styles";
import {formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR';
import { diffBetweenDates } from "../../../../services/date";
import { Counter } from "./components/Counter";

export function About() {
    const initOfNatanProgramingCarrer = new Date("2020-09-01");

    
    const publishedDateRelativeToNow = formatDistanceToNow(initOfNatanProgramingCarrer, {
        locale: ptBR,
        addSuffix: true,
    });

    return (
        <AboutContainer>
            <h2>Olá,</h2>
            <BoxContainer>
            <ParagraphContainer>
                Sou desenvolvedor de softwares, aplicações web e afins.
                Desde muito tempo, venho mantendo contato com o universo da tecnologia,
                mas iniciei os trabalhos com programação Web em meados de setembro ou outubro de 2020, {publishedDateRelativeToNow}
            </ParagraphContainer>
            <Counter initialDate={initOfNatanProgramingCarrer} />
            </BoxContainer>
            <ParagraphContainer>
                Desde lá, sempre busco evolução constante nas áreas que a programação e tecnologia abrangem (tudo?), mantendo-me alinhado com o mercado.
            </ParagraphContainer>

            <ParagraphContainer>
                Veja alguns projetinhos bacanas que fiz:
            </ParagraphContainer>

        </AboutContainer>
    );
}