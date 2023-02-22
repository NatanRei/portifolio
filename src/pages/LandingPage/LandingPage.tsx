import { Screen } from "../../components/Screen";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Initial } from "./components/Initial/Initial";
import { Projects } from "./components/Projects/Projects";

export function LandingPage (){
    return (<>
        <Screen><Initial /></Screen>
        <Screen><About /></Screen>
        <Screen><Projects /></Screen>
        <Screen><Contact /></Screen>
    </>);
}