import Layout from '../src/components/Layout/Layout';
import GlobalStyle from '../src/components/UI/GlobalStyle';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<GlobalStyle />
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
