import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Paragraph } from "../../../Home.styles";
import { AboutContainer, BoxContainer, BoxTitleContainer } from "./About.styles";
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
            <Paragraph>
                Sou desenvolvedor de softwares, aplicações web e afins.
                Desde muito tempo, venho mantendo contato com o universo da tecnologia,
                mas iniciei os trabalhos com programação Web em meados de setembro ou outubro de 2020, {publishedDateRelativeToNow}.
            </Paragraph>
            <Counter initialDate={initOfNatanProgramingCarrer} />
            </BoxContainer>
            <BoxContainer>
            <Paragraph>
                Desde lá, sempre busco evolução constante nas áreas que a programação e tecnologia abrangem (todas?), mantendo-me alinhado com o mercado.
            </Paragraph>
            <Paragraph>
                Atualmente, trabalho como desenvolvedor fullStack, minhas principais ferramentas são: ReactJs, Laravel, NodeJs... 
            </Paragraph>
            </BoxContainer>
            <BoxTitleContainer>
                Veja alguns projetinhos bacanas que fiz:
            </BoxTitleContainer>
        </AboutContainer>
    );
}