import { styled } from "../../../../styles";

export const TitleContainer = styled("div", {
  "@lg": {
    margin: "40% 0 0 7%",
  },
});

export const Title = styled("h1", {
  fontFamily: "Anek Devanagari",
  fontWeight: 400,
  lineHeight: 1,
  fontSize: "$5xl",
});

export const Moon = styled("div", {
  position: "absolute",
  left: "31%",
  backgroundRepeat: "no-repeat",
  width: 610,
  height: 610,
  backgroundImage: "url(/images/moon.svg)",
  "@lg": {
    width: 400,
    height: 400,
  },
  "@md": {
    left: 0,
    width: 300,
    height: 300,
    top: "20vh",
  },
  "@sm": {
    width: 300,
    height: 300,
    top: "40vh",
  },
});

export const Stars = styled("div", {
  position: "absolute",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "70vh",
  backgroundImage: "url(/images/stars.svg)",
});