import { Paragraph } from "../../../Home.styles";
import { Blog } from "./components/blog";
import { Card3D } from "./components/card3d";
import { HoverLink } from "./components/hoverLink";
import HoverZoom from "./components/hoverZoom";
import { Laptop } from "./components/laptop";
import { ProjectsContainer, RowAlignContainer, RowAlignReverseContainer } from "./Projects.styles";

export function Projects() {
    return (
        <ProjectsContainer>
            <RowAlignContainer className="row-align">
                <Paragraph>
                    <>Esse é um card simples, pode ser feito somente com HTML5 e CSS3, clique nele para ver o código.</>
                </Paragraph>
                <Card3D />
            </RowAlignContainer>
            <RowAlignReverseContainer className="row-align">
                <Laptop />
                <Paragraph>
                    <>Laptop com a clássica capa do Kali Linux. O estudo de Cyber Segurança é um de meus Hobbies.</>
                </Paragraph>
            </RowAlignReverseContainer>
            <RowAlignContainer className="row-align">
                <Paragraph>
                    <>Tech Now, um Blog feito utilizando Next.js no front, e Strapi como headless CMS</>
                </Paragraph>
                <a href="https://blog-front-ratlh71ca-natanrei.vercel.app/" target="_blank"><Blog /></a>
            </RowAlignContainer>
            <RowAlignReverseContainer className="row-align">
                <iframe title="Bateria" width="235" height="290" src="https://production--kaleidoscopic-liger-5074ba.netlify.app/" />
                <Paragraph>
                        <a href="https://production--kaleidoscopic-liger-5074ba.netlify.app" target="_blank">Uma bateria, só clicar e fazer a sua música</a>
                </Paragraph>
            </RowAlignReverseContainer>       
            <RowAlignContainer className="row-align">
                <Paragraph>
                        <a href="https://codepen.io/natanrei/full/LYjvQmB" target="_blank">Gerador de frases aleatórias</a>
                </Paragraph>
                <HoverZoom />
            </RowAlignContainer>
            <RowAlignReverseContainer className="row-align">
                <HoverLink />
                <Paragraph>
                        <a href="https://production--curious-sunflower-f79e30.netlify.app/" target="_blank">Um E-commerce, integrado com Stripe API</a>
                </Paragraph>
            </RowAlignReverseContainer>
        </ProjectsContainer>
    );
}