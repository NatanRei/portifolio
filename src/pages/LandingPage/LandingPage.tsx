import { Screen } from "../../components/Screen";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Initial } from "./components/Initial/Initial";
import { Projects } from "./components/Projects/Projects";

export function LandingPage (){
    return (<>
        <Screen id="home"><Initial /></Screen>
        <Screen id="about" heightMin><About /></Screen>
        <Screen id="projects"><Projects /></Screen>
        <Screen id="contact"><Contact /></Screen>
    </>);
}