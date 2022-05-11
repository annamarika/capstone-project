import { createGlobalStyle } from 'styled-components';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	background-color: #E2CADF;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

form {
display: flex;

flex-direction: column;
gap: 10px;
margin: 30px;

}
`;
