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

const ButtonText = 'Cancel';

export function CancelButton() {
	return <DefaultButton>{ButtonText}</DefaultButton>;
}
