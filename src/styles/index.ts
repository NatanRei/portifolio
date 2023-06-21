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
    sm: '(max-width: 640px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 1024px)',
    xl: '(max-width: 1216px)',
    xxl: '(max-width: 1408px)',
  },
  theme: {
    colors: {
      white: '#fff',
      black: '#000',

      gray1000: '#090909',
      gray950: '#0a0c0c',
      gray900: '#121214',
      gray800: '#202024',
      gray700: '#7c7a7c',
      gray600: '#919392',
      gray500: '#a1a3a2',
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