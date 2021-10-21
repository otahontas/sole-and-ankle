import theme from "../src/theme";
import GlobalStyle from "../src/components/GlobalStyle";
import { addDecorator } from "@storybook/react";

import { ThemeProvider } from "styled-components";

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {story()}
  </ThemeProvider>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
