import { styled } from "../styles";

export const HomeContainer = styled("main", {
    maxWidth: "100vw",
    overflowX: "hidden",
});

export const Teste = styled("div", {
    // position: "inherit",
    marginTop: '-0.6vh',
    display: "flex",
    height: '100vh',
    color: 'white',
    fontSize: "100px",
    zIndex: 100,
    backgroundColor: "black"
});

export const Paragraph = styled("p", {
    border: "1px solid $gray700",
    padding: "2rem",
    borderRadius: 8,
    fontSize: "$lg",
    width: "27%",
    margin: "3rem 7rem",
    height: "auto",
    "a": {
        textDecoration: "none",
        color: 'white',
        cursor: "pointer"
    }
});