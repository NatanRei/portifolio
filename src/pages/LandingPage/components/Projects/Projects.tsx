import { Paragraph } from "../../../Home.styles";
import { Rotate } from "./components/rotate";
import { Card3D } from "./components/card3d";
import { HoverLink } from "./components/hoverLink";
import HoverZoom from "./components/hoverZoom";
import { Laptop } from "./components/laptop";
import { List } from "./components/list";
import { ProjectsContainer, RowAlignContainer, RowAlignReverseContainer } from "./Projects.styles";
import { useEffect, useRef, useState } from "react";

export function Projects() {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => {
          setOffsetY(window.scrollY)
    };
    const elementRefCard3D = useRef(null);
    let translateCard3D = getTranslate(elementRefCard3D);
    const elementRefLapTop = useRef(null);
    let translateLapTop = getTranslate(elementRefLapTop);
    const elementRefBlog = useRef(null);
    let translateBlog = getTranslate(elementRefBlog);
    const elementRefDrum = useRef(null);
    let translateDrum = getTranslate(elementRefDrum);
    const elementRefQuotes = useRef(null);
    let translateQuotes = getTranslate(elementRefQuotes);
    const elementRefEcom = useRef(null);
    let translateEcom = getTranslate(elementRefEcom);
    const elementRefApiGym = useRef(null);
    let translateApiGym = getTranslate(elementRefApiGym);
    
    function getTranslate(elementRef: React.MutableRefObject<null>) {
        const element: any = elementRef.current
        const SENSITIVITY = 350
        let translate = 0
            if(element) {
                const whereElementStart = element.offsetTop
                const whereElementEnd = element.offsetHeight
                const initOfElement = whereElementStart - whereElementEnd - SENSITIVITY
                const zero = (offsetY - initOfElement) < 0 ? 0 : (offsetY - initOfElement)
                let percentage = (zero * 100) / whereElementEnd
                percentage = percentage > 100 ? 100 : percentage < 0 ? 0 : percentage
                translate = percentage / 100
            }
            return translate
    }

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <ProjectsContainer>

            <RowAlignContainer className="row-align"  ref={elementRefCard3D}>
                <Paragraph style={{ opacity: `${translateCard3D}` }}>
                    <>Esse é um card simples, pode ser feito somente com HTML5 e CSS3, clique nele para ver o código.</>
                </Paragraph>
                <Card3D 
                    backgroundLink="https://ntnconsultoria.com.br/webAcess/img/portifolio/projectOneBg.webp"
                    link="https://github.com/NatanRei/card3d-html-css"
                    />
            </RowAlignContainer>

            <RowAlignReverseContainer className="row-align" ref={elementRefLapTop}>
                <Laptop />
                <Paragraph style={{ opacity: `${translateLapTop}` }}>
                    <>Laptop com a clássica capa do Kali Linux. O estudo de Cyber Segurança é um de meus Hobbies.</>
                </Paragraph>
            </RowAlignReverseContainer>

            <RowAlignContainer className="row-align" ref={elementRefBlog}>
                <Paragraph style={{ opacity: `${translateBlog}` }}>
                    <>Tech Now, um Blog feito utilizando Next.js no front, e Strapi como headless CMS</>
                </Paragraph>
                <a href="https://blog-front-ratlh71ca-natanrei.vercel.app/" target="_blank">
                    <Rotate 
                        backgroundImgFront="https://ntnconsultoria.com.br/webAcess/img/portifolio/projectBlogBgOne.webp"
                        backgroundImgBack="https://ntnconsultoria.com.br/webAcess/img/portifolio/projectBlogBgTwo.webp"
                    />
                    </a>
            </RowAlignContainer>

            <RowAlignReverseContainer className="row-align" ref={elementRefDrum}>
                <iframe title="Bateria" width="235" height="290" src="https://production--kaleidoscopic-liger-5074ba.netlify.app/" />
                <Paragraph style={{ opacity: `${translateDrum}` }}>
                        <a href="https://production--kaleidoscopic-liger-5074ba.netlify.app" target="_blank">Uma bateria, só clicar e fazer a sua música</a>
                </Paragraph>
            </RowAlignReverseContainer>  

            <RowAlignContainer className="row-align" ref={elementRefQuotes}>
                <Paragraph style={{ opacity: `${translateQuotes}` }}>
                        <a href="https://codepen.io/natanrei/full/LYjvQmB" target="_blank">Gerador de frases aleatórias</a>
                </Paragraph>
                <HoverZoom 
                    projectLink="https://codepen.io/natanrei/full/LYjvQmB" 
                    projectImage="https://ntnconsultoria.com.br/webAcess/img/portifolio/projectQuoteGenerator.webp" 
                />
            </RowAlignContainer>

            <RowAlignReverseContainer className="row-align" ref={elementRefEcom}>
                <HoverLink />
                <Paragraph style={{ opacity: `${translateEcom}` }}>
                        <a href="https://production--curious-sunflower-f79e30.netlify.app/" target="_blank">Um E-commerce, integrado com Stripe API</a>
                </Paragraph>
            </RowAlignReverseContainer>

            <RowAlignContainer className="row-align" ref={elementRefApiGym}>
                <Paragraph style={{ opacity: `${translateApiGym}` }}>
                        <a href="https://github.com/NatanRei/ntn-api-solid" target="_blank">API Completa, estilo GymPass</a>
                </Paragraph>
                <List />
            </RowAlignContainer>
            
        </ProjectsContainer>
    );
}