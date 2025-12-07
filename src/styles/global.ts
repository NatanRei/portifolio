import { globalCss } from "."

export const globalStyles = globalCss({
    '*': {
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
    "html": {
        "@lg": {
            fontSize: "87.5%"
        },
    }
    

})