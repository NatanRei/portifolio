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

});

export const Paragraph = styled("p", {
    border: "1px solid $gray700",
    padding: "2rem",
    borderRadius: 8,
    fontSize: "$lg",
    width: "27%",
    margin: "3rem 7rem",
    height: "auto"
});


