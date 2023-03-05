import { Paragraph } from "../../../Home.styles";
import { Blog } from "./components/blog";
import { Card3D } from "./components/card3d";
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
                <a href="https://codepen.io/natanrei/full/LYjvQmB" target="_blank"><HoverZoom /></a>
                
            </RowAlignContainer>
            
            {/* <RowAlignContainer className="row-align">
            <iframe  title="contador" scrolling="no" width="600" height="500" src="https://zealous-borg-4b8c3c.netlify.app/" />
            <>Arrumar responsivo</>
            </RowAlignContainer>
            <RowAlignContainer className="row-align">
            <>ARRUMAR RESPONSIVO</>
            <iframe title="shop" scrolling="no" width="1200" height="900" src="https://fabulous-moonbeam-3eefdd.netlify.app/" />
            </RowAlignContainer> */}
            {/* <RowAlignContainer className="row-align">
            <iframe title="store" width="1200" height="900" src="https://enchanting-malabi-947e9d.netlify.app/" />
            <>ARRUMAR STORAGE</>
            </RowAlignContainer> */}
            {/* projects: projects to put here: 
            https://github.com/NatanRei/simple-social-media
            blog frontend https://blog-front-end-one.vercel.app/ todos os projetos que estão lá
            https://ntn-shop.vercel.app/ shop
            https://github.com/NatanRei/Calculadora-de-juros
            https://github.com/NatanRei/weberFoodFront
            https://github.com/NatanRei/sudoku-solver  */}
        </ProjectsContainer>
    );
}