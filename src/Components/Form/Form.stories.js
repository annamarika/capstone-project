import Form from '../../Components/Form/Form';

export default {
	title: 'Components/Form/Form',
	component: Form,
	decorators: [
		Story => {
			return <Story />;
		},
	],
};

export function Default() {
	return <Form />;
}
