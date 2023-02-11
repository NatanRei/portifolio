
import { ParallaxAnimation } from "../../../components/ParalaxAnimation";
import { InitialContainer, SubTitle, Title, TitleContainer } from "./Initial.styles";

export function Initial() {
    return (
        <InitialContainer>
            <TitleContainer>
            <Title>NATAN REIS CHMURA</Title>
            <SubTitle>Full Stack Developer</SubTitle>
            </TitleContainer>
            <ParallaxAnimation />
        </InitialContainer>
    );
}