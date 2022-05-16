/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import DefaultButton from '../UI/StyledButton';

export default {
	title: 'Components/Button',
	component: DefaultButton,
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

const ButtonText = 'Email';

export function Default() {
	return <DefaultButton>{ButtonText}</DefaultButton>;
}
