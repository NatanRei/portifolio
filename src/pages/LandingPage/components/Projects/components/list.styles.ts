import { styled } from "../../../../../styles";

export const ListContainer = styled("a", {
    all: 'unset',
    width: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: '$lg',
    backgroundColor: 'transparent',
    cursor: 'pointer'
})

export const Alt = styled('div', {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '30px',
    svg: {
        marginLeft: 10
    }
})