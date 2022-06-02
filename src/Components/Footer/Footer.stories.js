import Footer from './Footer';

export default {
	title: 'Components/Footer',
	component: Footer,
	parameters: {
		nextRouter: {
			pathname: '/profile',
		},
	},
	decorators: [
		Story => {
			return <Story />;
		},
	],
};

export function Default() {
	return <Footer />;
}
