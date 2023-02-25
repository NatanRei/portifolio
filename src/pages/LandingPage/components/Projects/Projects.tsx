import { Card3D } from "./components/card3d";
import { Laptop } from "./components/laptop";
import { ProjectsContainer, RowAlignContainer } from "./Projects.styles";

export function Projects() {
    return (
        <ProjectsContainer>
            <RowAlignContainer>
            <>Esse é top</>
            <Card3D />
            </RowAlignContainer>
            <RowAlignContainer>
            <Laptop />
            <>Esse é top</>
            </RowAlignContainer>
            <RowAlignContainer>
            <>Arumar responsivo</>
            <iframe scrolling="no" width="600" height="500" src="https://peaceful-fermat-a4dc3a.netlify.app/" />
            </RowAlignContainer>
            <RowAlignContainer>
            <iframe scrolling="no" width="600" height="500" src="https://zealous-borg-4b8c3c.netlify.app/" />
            <>Arrumar responsivo</>
            </RowAlignContainer>
            <RowAlignContainer>
            <>ARRUMAR RESPONSIVO</>
            <iframe scrolling="no" width="1200" height="900" src="https://fabulous-moonbeam-3eefdd.netlify.app/" />
            </RowAlignContainer>
            
            projects: projects to put here: 
            https://enchanting-malabi-947e9d.netlify.app/ (arrumar storage antes)
            https://github.com/NatanRei/simple-social-media
            blog frontend https://blog-front-end-one.vercel.app/ todos os projetos que estão lá
            https://ntn-shop.vercel.app/ shop
            https://github.com/NatanRei/Calculadora-de-juros
            https://github.com/NatanRei/weberFoodFront
            https://github.com/NatanRei/sudoku-solver
        </ProjectsContainer>
    );
}