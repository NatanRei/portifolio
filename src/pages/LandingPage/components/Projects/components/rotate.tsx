import { RotateContainer, RotateImage, RotateImageBack, RotateImages } from "./rotate.styles";

interface RotateProps {
    backgroundImgFront: string;
    backgroundImgBack: string;
}

export function Rotate({ backgroundImgFront, backgroundImgBack }: RotateProps) {
    console.log(backgroundImgFront, backgroundImgBack)
    return (
        <RotateContainer>
            <RotateImages className="rotate-images">
            <RotateImage>
                <img src={backgroundImgFront} alt="imagem padrão" />
            </RotateImage>
            <RotateImageBack>
                <img src={backgroundImgBack} alt="imagem contrária a padrão" />
            </RotateImageBack>
            </RotateImages>
        </RotateContainer>
        )
}