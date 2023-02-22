import { useEffect, useState } from "react";
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
            <Title style={{ transform: `translate(${offsetY * 1.6}px, -${offsetY * 1.6}px)`}}>NATAN REIS CHMURA</Title>
            <SubTitle style={{ transform: `translateX(-${offsetY * 1.9}px)` }}>Full Stack Developer</SubTitle>
            </TitleContainer>
        </InitialContainer>
    );
}