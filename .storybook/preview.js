import GlobalStyle from "../src/Components/UI/GlobalStyle"
import * as NextImage from "next/image";
import { RouterContext } from "next/dist/shared/lib/router-context";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => typeof props.src === 'string' ? (
    <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
  ) : (
    <OriginalNextImage {...props} unoptimized />
  ),
});

Object.defineProperty(NextImage, "__esModule", {
  configurable: true,
  value: true
});

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

 export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}

