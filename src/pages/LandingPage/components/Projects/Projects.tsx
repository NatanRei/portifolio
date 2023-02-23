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
            projects: projects to put here: 
            https://fabulous-moonbeam-3eefdd.netlify.app/
            https://enchanting-malabi-947e9d.netlify.app/ (arrumar storage antes)
            https://github.com/NatanRei/simple-social-media
            blog frontend https://blog-front-end-one.vercel.app/ todos os projetos que estão lá
            https://ntn-shop.vercel.app/ shop
            https://github.com/NatanRei/Calculadora-de-juros
            https://github.com/NatanRei/fortuneCookieInReact
            https://github.com/NatanRei/weberFoodFront
            https://github.com/NatanRei/ToDoListInReact
            https://github.com/NatanRei/sudoku-solver
        </ProjectsContainer>
    );
}