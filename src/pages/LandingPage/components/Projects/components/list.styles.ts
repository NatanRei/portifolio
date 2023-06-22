import { styled, keyframes } from "../../../../../styles";

const pulseAnimation = keyframes({
    '0%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.07)' },
    '100%': { transform: 'scale(1)' },
});

export const ListContainer = styled("a", {
    all: 'unset',
    width: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: '$lg',
    backgroundColor: 'transparent',
    cursor: 'pointer',

    "&:hover": {
        "div": {
            animation: `${pulseAnimation} 1.5s linear infinite`,
        }
}
})

export const Alt = styled('div', {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '30px',
    svg: {
        marginLeft: 10
    },
})

