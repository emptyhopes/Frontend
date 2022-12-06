import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  body {
    padding: 0;
    margin: 0;
    color: #000000;
    font-family: Solway, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  a:hover {
    cursor: pointer;
  }

  button:hover {
    cursor: pointer;
  }

  #root {
    display: flex;
    height: 100%;
    flex-direction: column;
  }
`;

export { GlobalStyles };
