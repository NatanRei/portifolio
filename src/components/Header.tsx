import { useEffect, useState } from "react";
import { HeaderContainer, HeaderIcon, HeaderIcons } from "./Header.styles";

export const Header = () => {
    const [opacity, setOpacity] = useState(0.5);
    const handleScroll = () => {
        if(window.pageYOffset > 10) {
            setOpacity(0.9)
        } else {
            setOpacity(0.5)
        }
  };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <HeaderContainer style={{ opacity: opacity }}>
            <HeaderIcons>
                <HeaderIcon>NTN</HeaderIcon>
            </HeaderIcons>
            <HeaderIcons>
                <HeaderIcon>Sobre</HeaderIcon>
                <HeaderIcon>Projetos</HeaderIcon>
                <HeaderIcon>Contate-me</HeaderIcon>
            </HeaderIcons>
        </HeaderContainer>
    );
}