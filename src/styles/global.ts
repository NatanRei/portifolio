import { HeaderContainer } from './../components/Header.styles';
import { globalCss } from "."

export const globalStyles = globalCss({
    '*': {
        margin: 0, 
        padding: 0,
        boxSizing: 'border-box',
        scrollBehavior: "smooth",

        scrollbarWidth: 'thin',
        scrollbarColor: '$gray500 $gray900',
    },
    "*::-webkit-scrollbar": {
        width: 12
    },
    "*::-webkit-scrollbar-track": {
        background: '$gray900'
    },
    "*::-webkit-scrollbar-thumb": {
        backgroundColor: '$gray500',
    },
    'body': {
        backgroundColor: '$gray900',
        color: "$gray100",
        '-webkit-font-smoothing': 'antialiased',
    },
    'body, input, textarea, button': {
        fontFamily: 'Roboto',
        fontWeight: 400,
    },
    "@media only screen and (max-width: 1408px)": {
        HeaderContainer: {
            
        },
        ".row-align": {
            flexDirection: 'column',
        }
    },
    "@media only screen and (min-width: 1216px)": {
        ".row-align": {
            flexDirection: 'column',
        }
    },
    // "@lg": {
    //     ".row-align": {
    //         flexDirection: 'column',
    //     }
    // },
    "@media only screen and (max-width: 768px)": {
        ".row-align": {

        }
    },

})