import { styled } from "../styles";

export const HeaderContainer = styled("header", {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "3.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    background: "$gray800"
});

export const HeaderIcons = styled("div", {
    margin: "0 auto"
});

export const HeaderIcon = styled("a", {
    margin: "0 1rem",
    textDecoration: "none"
});

