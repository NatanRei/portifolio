import { useEffect, useState } from "react";
import { TextLoop } from "../../../../components/TextLoop";
import { Forest, ForestThree, ForestTwo, InitialContainer, Moon, Stars, SubTitle, Title, TitleContainer } from "./Initial.styles";

export function Initial() {

  const [offsetY, setOffsetY] = useState(0);
  const [ opacity, setOpacity ] = useState(1);
  const handleMovements = () => {
    const pageOffset = window.scrollY
    
    handleScroll(pageOffset)
    handleOpacity(pageOffset)
  };
  
  const handleScroll = (pageOffset: number) => {
    const windowWidth = window.innerWidth
    const MIN_WIDTH_TO_MAKE_ANIMATION = 768;
    if(windowWidth > MIN_WIDTH_TO_MAKE_ANIMATION) {
      setOffsetY(pageOffset)
    } else {
      setOffsetY(0)
    }
  }
  
  const handleOpacity = (pageOffset: number) => {
    const windowHeight = window.innerHeight
    if(pageOffset > windowHeight) {
      setOpacity(0);
    } else if (pageOffset == 0) {
      setOpacity(1);
    } else {
      let opacityPercent = ((pageOffset * 100) / windowHeight)
      opacityPercent = opacityPercent > 100 ? 100 : opacityPercent < 0 ? 0 : opacityPercent;
        setOpacity(1 - (opacityPercent / 100));
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleMovements);
    return () => window.removeEventListener("scroll", handleMovements);
  }, []);

    return (
        <InitialContainer>
            {opacity && <><Moon  style={{ transform: `translateY(${offsetY * 0.5}px)  rotate(-${offsetY * 0.5}deg) scale(${( 1 - (offsetY * 0.0005))})`, opacity: opacity }}>
              <span role="img" aria-label="Lua"></span>
            </Moon>
            <Stars  style={{ transform: `translateY(${offsetY * 1}px)`, opacity: opacity}} >
              <span role="img" aria-label="Estrelas"></span>
            </Stars></>}
            <Forest src="https://ntnconsultoria.com.br/webAcess/img/portifolio/forest.svg" alt="Primeira floresta" />
            <ForestTwo style={{ transform: `translateY(-${offsetY * 0.055}px)`}} src="https://ntnconsultoria.com.br/webAcess/img/portifolio/forest2.svg" alt="Segunda floresta" />
            <ForestThree style={{ transform: `translateY(-${offsetY * 0.1}px)`}} src="https://ntnconsultoria.com.br/webAcess/img/portifolio/forest3.svg" alt="Terceira floresta" />
            {opacity && 
              <TitleContainer>
              <Title style={{ transform: `translateY(${offsetY * 0.31}px)  translateX(${offsetY * 0.31}px)   scale(${( 1 + (offsetY * 0.001))})`}}>Natan Reis Chmura</Title>
              <SubTitle style={{ transform: `translateY(${offsetY * 0.35}px) ` }}>Full Stack Developer</SubTitle>
              </TitleContainer>
            }
            <TextLoop />
        </InitialContainer>
    );
}