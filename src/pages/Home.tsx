
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ParallaxAnimation } from "../components/ParalaxAnimation";
import { HomeContainer } from "./Home.styles";
import { LandingPage } from "./LandingPage/LandingPage";

export function Home() {
    return (
        <HomeContainer>
            <Header />
            <ParallaxAnimation />

            {/* <LandingPage/> */}
            {/* <Footer /> */}
         </HomeContainer>
    );
}