import { styled } from "../styles";
import { Heart } from "phosphor-react";
export const FooterContainer = styled("footer", {
    width: "100%",
    height: "3.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 200,

    background: "$gray800"
});

export const FooterHeart = styled(Heart, {
    margin: "0 0.35rem",
    color: "$gray100",

    
});
