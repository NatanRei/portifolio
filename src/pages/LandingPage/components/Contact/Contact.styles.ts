import { styled } from "../../../../styles";

export const ContactContainer = styled("div", {
    backgroundColor: "$gray800",
    width: "100%",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
});

export const ContactTitle = styled("h2", {
    fontSize: "$2xl",
    margin: '4rem auto'
});

export const Icons = styled("div", {
    display: 'flex',
    flexDirection: 'row',
    'a': {
        margin: "0 3rem",
        textDecoration: "none",
        color: "white",
    }
});