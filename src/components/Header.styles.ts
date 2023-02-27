import { styled } from "../styles";

export const HeaderContainer = styled("header", {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 200,
    width: "100vw",
    height: "3.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    transitionDuration: '800ms',
    background: "$gray800"
});

export const HeaderIcons = styled("div", {
    margin: "0 auto",
    zIndex: 200,
    opacity: 1
    
});

export const HeaderIcon = styled("a", {
    margin: "0 1rem",
    textDecoration: "none",
    color: "$gray300",
    cursor: "pointer",
    '&:hover': {
        color: "white",
        borderBottom: "1px solid",
        
    }
});

