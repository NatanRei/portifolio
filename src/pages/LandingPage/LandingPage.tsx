import { Screen } from "../../components/Screen";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Initial } from "./components/Initial";
import { Projects } from "./components/Projects";

export function LandingPage (){
    return (<>
        <Screen><Initial /></Screen>
        <Screen><About /></Screen>
        <Screen><Projects /></Screen>
        <Screen><Contact /></Screen>
    </>);
}