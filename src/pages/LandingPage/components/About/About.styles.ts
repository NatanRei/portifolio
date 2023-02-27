import { styled } from "../../../../styles";

export const AboutContainer = styled("div", {
    width: "100%",
    margin: "1rem",
    padding: '7rem 7rem 0',
    'h2': {
        fontSize: '$2xl'
    },
    '@xl': {
        padding: '1rem',
    },
    '@sm': {
        margin: '0',
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
        marginBottom: "1rem",
    }
});

export const BoxTitleContainer = styled(BoxContainer, {
    fontSize: '1.875rem', 
    marginTop: '2rem',
    '@xl': {
        fontSize: '1.5rem', 
    }
});