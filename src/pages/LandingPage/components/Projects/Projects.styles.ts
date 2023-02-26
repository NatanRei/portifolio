import { styled } from "../../../../styles";

export const ProjectsContainer = styled("div", {
    width: "100%",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1rem'
});

export const RowAlignContainer = styled("div", {
    marginTop: '2rem',
    width: "80%",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    '@lg': {
        flexDirection: 'column',
    }
});