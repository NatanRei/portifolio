import { AboutContainer, BoxContainer } from "./About.styles";
import {formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR';
import { Counter } from "./components/Counter";
import { Paragraph } from "../../../Home.styles";

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
                Atualmente, trabalho como desenvolvedor backend, minhas principais ferramentas são: Laravel, MySQL, Python... 
            </Paragraph>
            </BoxContainer>
            <BoxContainer style={{ fontSize: '1.875rem', marginTop: '2rem' }}>
                Veja alguns projetinhos bacanas que fiz:
            </BoxContainer>
        </AboutContainer>
    );
}