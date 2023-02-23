import { styled } from "../../../../../styles";


export const CounterContainer = styled("div", {
    fontFamily: 'Roboto Mono, monospace',
    fontSize: '6rem',
    lineHeight: '8rem',
    color: '$gray100',
    display: 'flex',
    gap: '0.875rem',
    'div': {
        background: '$gray700',
        padding: '0',
        borderRadius: '8px',
        textAlign: 'center',
        marginBottom: '-6rem',
        'i': {
            fontSize: '1rem',
        }
    }
    
});
export const Separator = styled("div", {
    padding: '2rem 0',
    color: '$green500',
    width: '2rem',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
});