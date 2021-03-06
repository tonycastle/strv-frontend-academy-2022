import { createGlobalStyle } from 'styled-components'

import { colors } from './colors'
import { font } from './typography'

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
}

html,
body, #__next{
    padding: 0;
    height: 100%;
    width: 100%;
    background-color: ${colors.background.dimmed};
}

html{
    font-size: 62.5%;
}
body{
    font-weight:400;
    font-family: ${font.base};
    font-size: 1.6rem;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: always;
}

a {
  color: inherit;
  text-decoration: none;
}
&:focus {
  outline: none;
}
&:not(input):focus-visible {
  /*
    "88" adds transparency channel to our existing theme color.
    Applicable only to hex color notation.
  */
  outline: 3px solid ${colors.accent.primary}88;
}
`
