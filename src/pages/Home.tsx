import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HomeContainer } from "./Home.styles";
import { LandingPage } from "./LandingPage/LandingPage";

export function Home() {
    return (
        <HomeContainer>
            <Header />
            
            <LandingPage/>
            <Footer />
         </HomeContainer>
    );
}