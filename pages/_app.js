import GlobalStyle from '../src/components/UI/GlobalStyle';
import Layout from '../src/components/Layout/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
