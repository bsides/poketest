import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body, ul, li {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: "PT Sans Narrow", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    font-size: 20px;
    line-height: 1.5;
    color: #24292e;
    background-color: #fff;
    background-image: url('https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png');
  }
`

export default GlobalStyle
