import { styled } from "../../../../../styles";

export const HoverZoomContainer = styled("a", {
    backgroundColor: 'transparent',
    cursor: "pointer",
    width: 420,
    height: 240,
    "&:hover img": {
        transform:'scale(1.05)'
    },
    "img": {
        transition: "0.5s",
        width: 420,
     height: 240,
        '@lg': {
            marginTop: '1rem',
            width: 343,
            height: 189,
        }
    },
    '@lg': {
        marginTop: '1rem',
        width: 343,
        height: 189,
    }
})