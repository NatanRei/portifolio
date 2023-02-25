import { useEffect, useState } from "react";
import { TextLoop } from "../../../../components/TextLoop";
import { Forest, ForestThree, ForestTwo, InitialContainer, Moon, Stars, SubTitle, Title, TitleContainer } from "./Initial.styles";

import ForestSvg from '../../../../assets/forest.svg'
import ForestSvgTwo from '../../../../assets/forest2.svg'
import ForestSvgThree from '../../../../assets/forest3.svg'


export function Initial() {

  const [offsetY, setOffsetY] = useState(0);
  const [ opacity, setOpacity ] = useState(1);
  const handleScroll = () => {
    const pageOffset = window.pageYOffset
    setOffsetY(pageOffset)
    const widowHeight = window.innerHeight
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
            <Moon  style={{ transform: `translateY(${offsetY * 0.5}px)  rotate(-${offsetY * 0.5}deg` }} />
            <Stars  style={{ transform: `translateY(${offsetY * 1}px)`, opacity: opacity}} />
            <Forest src={ForestSvg} />
            <ForestTwo style={{ transform: `translateY(-${offsetY * 0.0625}px)`}} src={ForestSvgTwo} />
            <ForestThree style={{ transform: `translateY(-${offsetY * 0.1}px)`}} src={ForestSvgThree} />
            <TitleContainer>
            <Title style={{ transform: `translateY(${offsetY * 0.3}px)`}}>Natan Reis Chmura</Title>
            <SubTitle style={{ transform: `translateY(${offsetY * 0.4}px)` }}>Full Stack Developer</SubTitle>
            </TitleContainer>
            <TextLoop />
        </InitialContainer>
    );
}