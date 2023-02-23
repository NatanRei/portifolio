import { ScreenContainer } from "./Screen.styles";

interface ScreenProps {
    children: JSX.Element[] | JSX.Element | string;
    id: string;
  }

export function Screen({ children, id }: ScreenProps) {
    return (
        <ScreenContainer id={id}>{ children }</ScreenContainer>
    );
}