import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0;
    color: #333
  }

  h1 {
    margin: 20px;
    font-size: 2rem;
    color: #4a4a4a;
  }
`
