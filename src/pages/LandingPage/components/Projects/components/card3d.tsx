import { BoxContainer } from "./card3d.styles";

interface Card3DProps {
  backgroundLink: string;
  link: string
}

export function Card3D({ backgroundLink, link }: Card3DProps) {
    return (
        <BoxContainer 
          css={{ 
            '.layer': 
              {
                background: `url(${backgroundLink})`, 
                backgroundSize: "cover",
              } 
          }} 
          target="_blank" 
          href={link}
          >
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