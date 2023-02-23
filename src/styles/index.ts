import { createStitches } from "@stitches/react";

export const { 
    config,
    styled,
    globalCss,
    keyframes,
    getCssText,
    theme,
    css,
    createTheme 
} = createStitches({
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
  },
  theme: {
    colors: {
      white: '#fff',
      gray900: '#121214',
      gray800: '#202024',
      gray300: '#c4c4cc',
      gray100: '#e1e1e6',

      green500: '#00875f',
      green300: '#00b37e'
    },
    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      xxl: '2rem',
      '2xl': '2.5rem',
      '3xl': '3rem',
      '4xl': '4rem',
      '5xl': '5rem',
      '6xl': '6rem',

    }
  }
})