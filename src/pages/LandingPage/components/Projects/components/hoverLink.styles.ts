import { styled } from "../../../../../styles";

export const HoverLinkContainer = styled("div", {
    width: 450,
    height: 240,
    position: "relative",
    margin: "0 1rem",
    background: "url(https://ntnconsultoria.com.br/webAcess/img/portifolio/projectNTNShop.webp) center",
    backgroundSize: "cover",
    color: "#fff",
    boxShadow: "#000 0px 11px 15px 0px",
    "&:hover" : {
        ".overlay": {
            opacity: 1,

        }
    },
    '@lg': {
        marginTop: '1rem',
        width: 343,
        height: 189,
    },
    ".overlay": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        opacity: 0,
        transition: ".5s",
        "a": {
            fontSize: "$lg",
            width: "100%",
            textDecoration: "none",
            color: "white",
            textAlign: "center",
            margin: "50%"
        },
        
    },
    
});