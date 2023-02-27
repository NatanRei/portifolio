import { useEffect, useState } from "react";
import { TextLoop } from "../../../../components/TextLoop";
import { Forest, ForestThree, ForestTwo, InitialContainer, Moon, Stars, SubTitle, Title, TitleContainer } from "./Initial.styles";

export function Initial() {

  const [offsetY, setOffsetY] = useState(0);
  const [ opacity, setOpacity ] = useState(1);
  const handleScroll = () => {
    const pageOffset = window.pageYOffset
    const widowHeight = window.innerHeight
    const widowWidth = window.innerWidth
    if(widowWidth > 768) {
      setOffsetY(pageOffset)
    } else {
      setOffsetY(0)
    }
    if(pageOffset > widowHeight) {
      setOpacity(0);
    } else if (pageOffset == 0) {
      setOpacity(1);
    } else {
      let opacityPercent = ((pageOffset * 100) / widowHeight)
      opacityPercent = opacityPercent > 100 ? 100 : opacityPercent < 0 ? 0 : opacityPercent;
        setOpacity(1 - (opacityPercent / 100));
    }
};

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return (
        <InitialContainer>
            <Moon  style={{ transform: `translateY(${offsetY * 0.5}px)  rotate(-${offsetY * 0.5}deg`, opacity: opacity }} />
            <Stars  style={{ transform: `translateY(${offsetY * 1}px)`, opacity: opacity}} />
            <Forest src="https://ntnconsultoria.com.br/webAcess/img/portifolio/forest.svg" />
            <ForestTwo style={{ transform: `translateY(-${offsetY * 0.0625}px)`}} src="https://ntnconsultoria.com.br/webAcess/img/portifolio/forest2.svg" />
            <ForestThree style={{ transform: `translateY(-${offsetY * 0.1}px)`}} src="https://ntnconsultoria.com.br/webAcess/img/portifolio/forest3.svg" />
            <TitleContainer>
            <Title style={{ transform: `translateY(${offsetY * 0.3}px)`}}>Natan Reis Chmura</Title>
            <SubTitle style={{ transform: `translateY(${offsetY * 0.4}px)` }}>Full Stack Developer</SubTitle>
            </TitleContainer>
            <TextLoop />
        </InitialContainer>
    );
}