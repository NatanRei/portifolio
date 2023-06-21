import { HoverZoomContainer } from "./hoverZoom.styles";

interface HoverZoomProps {
    projectLink: string;
    projectImage: string;

}

export default function HoverZoom({projectLink, projectImage}: HoverZoomProps) {
    return (
        <HoverZoomContainer href={projectLink} target="_blank">
                <img src={projectImage} alt="Gerador de frases" />
        </HoverZoomContainer>
    );
}