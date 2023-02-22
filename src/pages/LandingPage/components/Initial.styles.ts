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

export const Sun = styled("div", {
    backgroundRepeat: "no-repeat",
    width: 100,
    height: 100,
    backgroundImage: 'url(../../../src/assets/sun.svg)'

});
   
//   #mountain {
//     background-repeat: no-repeat;
//     background-size: 110% auto;
//     fill: rgb(95, 80, 58);
  
//     background-image: url(../assets/mountain_layer_two.svg);
//   }
  
//   #jungle5 {
//     background-size: 110% auto;
//     background-image: url(../assets/mountain_layer_one.svg);
//     /* position: fixed; */
  
//   }