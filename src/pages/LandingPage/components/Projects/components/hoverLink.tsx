import { ArrowSquareOut } from "phosphor-react";
import { HoverLinkContainer } from "./hoverLink.styles";

export function HoverLink() {
    return (
    <HoverLinkContainer>
        <span role="img" aria-label="NTN Store"></span>
        <div className="overlay">
            <a href="https://production--curious-sunflower-f79e30.netlify.app/" target="_blank">Veja agora! <ArrowSquareOut size={24} /></a>
        </div>
    </HoverLinkContainer>
    );
}