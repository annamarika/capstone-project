import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import LayoutPage from '../UI/Layout/LayoutPage.styled';

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<LayoutPage>{children}</LayoutPage>
			<Footer />
		</>
	);
}
