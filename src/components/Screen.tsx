import { ScreenContainer } from "./Screen.styles";

interface ScreenProps {
    children: JSX.Element[] | JSX.Element | string;
  }

export function Screen({ children }: ScreenProps) {
    return (
        <ScreenContainer>{ children }</ScreenContainer>
    );
}