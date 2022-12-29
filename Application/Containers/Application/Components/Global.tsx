import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    height: 100%;
  }

  body {
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

export { Global };
