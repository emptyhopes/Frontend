import { createGlobalStyle } from "styled-components";

const Fonts = createGlobalStyle`
  @font-face {
    font-display: swap;
    font-family: Solway;
    font-style: normal;
    font-weight: 500;
    src: url("https://fonts.gstatic.com/s/solway/v17/AMOTz46Cs2uTAOCudlkpnccR.woff2") format("woff2");
  }
`;

export { Fonts };
