import { useEffect, useState } from "react";
import { InitialContainer, SubTitle, Sun, Title, TitleContainer } from "./Initial.styles";

export function Initial() {

    const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    // if(window.pageYOffset < 100) {
        setOffsetY(window.pageYOffset)
    // }
};

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return (
        <InitialContainer>
            <TitleContainer>
            <Title style={{ transform: `translateY(-${offsetY * 1.6}px)` }}>NATAN REIS CHMURA</Title>
            <SubTitle style={{ transform: `translateX(-${offsetY * 1.9}px)` }}>Full Stack Developer</SubTitle>
            </TitleContainer>
            <Sun style={{ transform: `translateY(${offsetY * 1}px)` }} />
        </InitialContainer>
    );
}