import { styled } from "../../../styles";

export const InitialContainer = styled("div", {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
});

export const TitleContainer = styled("div", {
    display: "flex",
    flexDirection: "column",

    alignItems: "start",
    marginLeft: "15%"
});

export const Title = styled("h1", {
    fontSize: "$6xl"
});
export const SubTitle = styled("h1", {
    fontSize: "$xxl"
});