import { useEffect, useState } from "react";
import { TextLoop } from "../../../../components/TextLoop";
import { InitialContainer, SubTitle, Sun, Title, TitleContainer } from "./Initial.styles";

export function Initial() {

    const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    // if(window.pageYOffset < 400) {
        setOffsetY(window.pageYOffset)
    // }
};

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return (
        <InitialContainer>
            {/* <Sun style={{ transform: `translateY(${offsetY * 1}px)` }} /> */}
            
            <TitleContainer>
            <Title style={{ transform: `translate(${offsetY * 0.7}px, -${offsetY * 0.9}px) rotate(-${offsetY * 0.07}deg)`}}>NATAN REIS CHMURA</Title>
            <SubTitle style={{ transform: `translateX(-${offsetY * 1.9}px)` }}>Full Stack Developer</SubTitle>
            </TitleContainer>
            <TextLoop />
        </InitialContainer>
    );
}