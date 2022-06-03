import React from 'react';
import DefaultButton from '../UI/Button/Button.styled';

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

const CancelText = 'Cancel';

const CreateText = 'Create';

const DeleteText = 'Delete';

const EditText = 'Edit';

const EmailText = 'Email';

const SaveText = 'Save';

export function CancelButton() {
	return <DefaultButton>{CancelText}</DefaultButton>;
}

export function CreateButton() {
	return <DefaultButton>{CreateText}</DefaultButton>;
}

export function DeleteButton() {
	return <DefaultButton>{DeleteText}</DefaultButton>;
}
export function EditButton() {
	return <DefaultButton>{EditText}</DefaultButton>;
}
export function EmailButton() {
	return <DefaultButton>{EmailText}</DefaultButton>;
}
export function SaveButton() {
	return <DefaultButton>{SaveText}</DefaultButton>;
}
