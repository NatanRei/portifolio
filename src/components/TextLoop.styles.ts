import Marquee from "react-fast-marquee";
import { styled } from "../styles";

export const TextLoopContainer = styled("div", {
    marginTop: '20%',
    width: '300vw',
    fontSize: '1rem',
    whiteSpace: 'nowrap',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10rem',
    
});
export const ScrollerContainer = styled('div', {
    fontSize: '$lg',
    marginBottom: '2%',
    zIndex: 5
})
export const Scroller = styled(Marquee, {
    fontSize: '$lg',
})

export const Text = styled("a", {
    textDecoration: 'none',
    color: "$gray100"
});