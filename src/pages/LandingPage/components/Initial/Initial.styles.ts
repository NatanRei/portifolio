import { styled } from "../../../../styles";




export const InitialContainer = styled("div", {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    '&:before': {
        content: "",
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: -3,
        background: "linear-gradient(180deg, #434343 0%, #232323 38.54%, #0A0A0A 100%)",
        // backgroundImage: 'url("https://ntnconsultoria.com.br/webAcess/img/onebg.jpeg")',
        // backgroundSize: 'cover',
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "right 35% bottom 45%",
        height: '100vh',
        width: '100%',
        opacity: 0.5,
    }
});



export const TitleContainer = styled("div", {
    display: "flex",
    flexDirection: "column",

    alignItems: "start",
    margin: "20% 0 0 7%",
    zIndex: 3
});

export const Title = styled("h1", {
    fontFamily: "Anek Devanagari",
    fontWeight: 400,
    lineHeight: 1,
    fontSize: "$5xl"
    
});
export const SubTitle = styled("h1", {

    fontSize: "$xxl",
    color: "#9F9F9F"
});

export const Moon = styled("div", {
    position: "absolute",
    left: "31%",
    backgroundRepeat: "no-repeat",
    width: 610,
    height:610,
    backgroundImage: 'url(../../../src/assets/moon.svg)',
});

export const Stars = styled("div", {
    position: "absolute",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height:"70vh",
    backgroundImage: 'url(../../../src/assets/stars.svg)',
});
   

export const Forest = styled('img', {
    position: "absolute",
    width: "100%",
    bottom: 0,
    zIndex: 4
});

export const ForestTwo = styled("img", {
    position: "absolute",
    width: "100%",
    bottom: 0,
    zIndex: 3
});

export const ForestThree = styled("img", {
    position: "absolute",
    width: "100%",
    bottom: 0,
    zIndex: 2
});