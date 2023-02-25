import { styled } from "../../../../../styles";

export const LaptopContainer = styled("a", {
    marginTop: "10rem",
    position: "initial",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) rotate(-5deg)",
    transition: '1s',
    "&:hover":{
        transform: "translate(-50%, -50%) rotate(5deg)",
    },
    ".laptop": {
        width: "21.5rem",
        height: "12.5rem",
        background: "$gray900",
        border: "16px solid #262626",
        boxShadow: "1px 0 0 #fff, -1px 0 0 #fff, 0 -2px 0 #fff",
        overflow: "hidden",
        "&:before": {
            content: '',
            position: 'absolute',
            bottom: '-0.625rem',
            left: '-15%',
            width: '130%',
            height: '0.625rem',
            background: '#fff',
            borderTop: '2px solid #ccc',
            borderBottom: '4px solid #ccc',
            borderTopLeftRadius: '2px',
            borderTopRightRadius:'2px',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
        }, 
        "&:after": {
            content: '',
            position: 'absolute',
            width: '0.25rem',
            height: '0.25rem',
            borderRadius: '50%',
            background: '#000',
            left: '50%',
            top: '0.375rem',
        },
        "& > img": {
            maxWidth: '21.5rem',
        }
    }
});