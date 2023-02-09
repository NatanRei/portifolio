import { styled } from "../../../styles";

export const InitialContainer = styled("div", {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    '&:before': {
        content: "",
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: -3,
        backgroundImage: 'url("https://ntnconsultoria.com.br/webAcess/img/onebg.jpeg")',
        backgroundSize: 'cover',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 35% bottom 45%",
        height: '100vh',
        width: '100%',
        opacity: 0.3,
    }
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