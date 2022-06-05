import GlobalStyle from '../src/Components/UI/GlobalStyle';
import { SessionProvider } from 'next-auth/react';
import Layout from '../src/Components/Layout/Layout';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<SessionProvider session={session}>
			<GlobalStyle />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SessionProvider>
	);
}

export default MyApp;
