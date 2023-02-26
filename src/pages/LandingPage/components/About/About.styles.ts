import { styled } from "../../../../styles";

export const AboutContainer = styled("div", {
    width: "100%",
    margin: "1rem 0rem",
    padding: '7rem',
    'h2': {
        fontSize: '$2xl'
    }

});

export const BoxContainer = styled("div", {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    '@xl': {
        flexDirection: "column",
        marginBottom: "2rem",
    }
});