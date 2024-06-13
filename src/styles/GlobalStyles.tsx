import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    background-color:  ${theme.colors.background_color};;
    margin: 0;
    padding: 0;
  }

  h1,h2 {
    color: ${theme.colors.text_color};
  }
`;

export default GlobalStyles;
