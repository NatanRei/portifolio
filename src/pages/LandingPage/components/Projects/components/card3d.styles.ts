import { styled } from "../../../../../styles";

interface BoxContainerProps {
  urlBackground: string;
}

export const BoxContainer = styled("a", {
  position: "relative",
  width: "240px",
  height: "426px",
  background: "rgba(0, 0, 0, .1)",
  transform: "rotate(0deg) skew(-15deg) scale(.8)",
  ".layer": {
    position: "absolute",
    top: 0,
    left: 0,
    display: "block",
    width: "100%",
    height: "100%",
    transition: "0.5s",
  },
  "&:hover": {
    ".layer:nth-child(4)": {
      transform: 'translate(-100px, -100px)',
      opacity: 1,
    },
    ".layer:nth-child(3)": {
      transform: 'translate(-80px, -80px)',
      opacity: 0.8,
    },
    ".layer:nth-child(2)": {
      transform: 'translate(-60px, -60px)',
      opacity: 0.6,
    },
    ".layer:nth-child(1)": {
      transform: 'translate(-40px, -40px)',
      opacity: 0.4,
    },
  }
});