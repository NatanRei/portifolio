import { styled } from "../../../../../styles";

export const BoxContainer = styled("div", {
    position: "relative",
    width: "240px",
    height: "426px",
    marginTop: "150px",
    background: "rgba(0, 0, 0, .1)",
    transform: "rotate(0deg) skew(-25deg) scale(.8)",
    ".layer": {
        position: "absolute",
        top: 0,
        left: 0,
        display: "block",
        width: "100%",
        height: "100%",
        background: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmX7wEen8jF9T7wB95xuLe3mKn6dPtv6_VuAYJHpJ3rR2zv9UYwhANJ-5k1oh4DoGZ1ys&usqp=CAU)",
        backgroundSize: "cover",
        transition: "0.5s",
    },
    "&:hover": {
        ".layer:nth-child(4)": {
            transform: 'translate(-160px, -160px)',
            opacity: 1,
        },
        ".layer:nth-child(3)": {
            transform: 'translate(-120px, -120px)',
            opacity: 0.8,
        },
        ".layer:nth-child(2)": {
            transform: 'translate(-80px, -80px)',
            opacity: 0.6,
        },
        ".layer:nth-child(1)": {
            transform: 'translate(-40px, -40px)',
            opacity: 0.4,
        },
    }

});