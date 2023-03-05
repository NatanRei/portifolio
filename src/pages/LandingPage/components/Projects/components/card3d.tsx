import { BoxContainer } from "./card3d.styles";

export function Card3D() {
    return (
        <BoxContainer target="_blank" href="https://github.com/NatanRei/card3d-html-css">
            <div className="layer">
              <span role="img" aria-label="paisagem camada 1"></span>
            </div>
            <div className="layer">
              <span role="img" aria-label="paisagem camada 2"></span>
            </div>
            <div className="layer">
              <span role="img" aria-label="paisagem camada 3"></span>
            </div>
            <div className="layer">
              <span role="img" aria-label="paisagem camada 4"></span>
            </div>
        </BoxContainer>
    );
}