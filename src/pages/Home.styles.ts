import { styled } from "../styles";

export const HomeContainer = styled("main", {
    maxWidth: "100vw",
    overflowX: "hidden",
});

export const Paragraph = styled("p", {
    backgroundColor: "rgb(10,12,12)",
    padding: "2rem",
    borderRadius: 8,
    fontSize: "$lg",
    width: "27%",
    margin: "3rem 7rem",
    height: "auto",

    $$shadowGrayTop: '$colors$black',
    $$shadowGrayBottom: '$colors$gray1000',
    background: 'linear-gradient(60deg, rgba(10,12,12,1) 0%, rgba(18,16,16,1) 50%, rgba(10,12,12,1) 100%)',
    boxShadow: ".4rem .4rem .7rem $$shadowGrayTop, -.25rem -.2rem .6rem $$shadowGrayBottom",

    
    "a": {
        textDecoration: "none",
        color: 'white',
        cursor: "pointer"
    },
    '@xl': {
        width: "40%",
    },
    '@lg': {
        fontSize: "$md",
        margin: "1.5rem 0rem",
        padding: "1.5rem",
        width: "80%",
    },
    '@md': {
        width: "90%",
    },
    '@sm': {
        width: "100%",
    }
});