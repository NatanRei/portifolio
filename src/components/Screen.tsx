import { ScreenContainer } from "./Screen.styles";

interface ScreenProps {
    children: JSX.Element[] | JSX.Element | string;
    id: string;
    heightMin?: boolean
  }

export function Screen({ children, id, heightMin = false }: ScreenProps) {
    return (
        <ScreenContainer heightMin={heightMin} id={id}>{ children }</ScreenContainer>
    );
}