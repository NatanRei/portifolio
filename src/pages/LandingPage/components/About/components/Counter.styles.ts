import { styled } from "../../../../../styles";


export const CounterContainer = styled("div", {
    fontFamily: 'Roboto Mono, monospace',
    fontSize: '6rem',
    lineHeight: '8rem',
    color: '$gray100',
    display: 'flex',
    gap: '0.875rem',
    'div': {
        padding: '0',
        borderRadius: '8px',
        textAlign: 'center',
        marginBottom: '-6rem',
        'i': {
            fontSize: '1rem',
        }
    },
    '@xl': {
        margin: "-3rem 0 1.5rem",
        fontSize: '4rem',
    },
    '@md': {
        fontSize: '3rem',
    }
    
});
export const Separator = styled("div", {
    color: '$green500',
    width: '2rem',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
});