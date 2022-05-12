/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import EmailButton from './StyledButton';

export default {
	title: 'Components/Button',
	component: EmailButton,
	decorators: [
		Story => {
			return (
				<div style={{ padding: '3em', maxWidth: '400px', position: 'relative' }}>
					<Story />
				</div>
			);
		},
	],
};

const props = { props: { email: 'hallo@hallo.de' } };
const ButtonText = 'Email';

export function Default() {
	return <EmailButton {...props}>{ButtonText}</EmailButton>;
}
