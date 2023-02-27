import Bg from "../../../../../assets/projectQuoteGenerator.png";
import { HoverZoomContainer } from "./hoverZoom.styles";

export default function HoverZoom() {
    return (
        <HoverZoomContainer>
                <img src={Bg} alt="Gerador de frases" />
        </HoverZoomContainer>
    );
}