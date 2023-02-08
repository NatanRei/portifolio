import { HeaderContainer, HeaderIcon, HeaderIcons } from "./Header.styles";

export const Header = () => {
    return (
        <HeaderContainer>
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