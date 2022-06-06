import { createGlobalStyle } from 'styled-components'

import { colors } from '../colors'

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
ul {
    list-style: none;
}
`
