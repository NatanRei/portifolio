import { TextLoop } from "../../../components/TextLoop";
import { InitialContainer, SubTitle, Title, TitleContainer } from "./Initial.styles";

export function Initial() {
    return (
        <InitialContainer>
            <TitleContainer>
            <Title>NATAN REIS CHMURA</Title>
            <SubTitle>Full Stack Developer</SubTitle>
            </TitleContainer>
            <TextLoop />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#797979" fillOpacity="0.5" d="M0,64L30,69.3C60,75,120,85,180,80C240,75,300,53,360,80C420,107,480,181,540,181.3C600,181,660,107,720,112C780,117,840,203,900,245.3C960,288,1020,288,1080,277.3C1140,267,1200,245,1260,245.3C1320,245,1380,267,1410,277.3L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z">
                </path>
            </svg>
        </InitialContainer>
    );
}