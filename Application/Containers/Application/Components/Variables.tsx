import { createGlobalStyle } from "styled-components";

const Variables = createGlobalStyle`
  body[theme="light"] {
    --header-background-color: #888888;
    --main-background-color: #888888;
    --footer-background-color: #888888;
  }

  body[theme="dark"] {
    --header-background-color: #222222;
    --main-background-color: #888888;
    --footer-background-color: #888888;
  }
`;

export { Variables };
