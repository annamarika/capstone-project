import GlobalStyle from "../src/components/GlobalStyle/GlobalStyle"

export const decorators = [
  (Story) => {
    return (
      <>
        <GlobalStyle />
        <Story />
      </>
    );
  },
 ];