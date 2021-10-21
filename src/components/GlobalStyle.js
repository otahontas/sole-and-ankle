import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* Reset sizing to include borders */
  *, *:before, *:after {
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
    line-height: 1.45;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
  }

  /* Create a stacking context, without a z-index. This ensures that all portal content
   * (modals and tooltips) will float above the app.
   */
  #root {
    isolation: isolate;
  }

  /* Add initial height for app */
  /* For some reason, font settings need to be applied to here as well. Investigate */
  html, body, #root {
    height: 100%;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    line-height: 1.45;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
  }
`;

export default GlobalStyle;
