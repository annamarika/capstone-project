import { useForm } from 'react-hook-form';
import { useState } from 'react';
import DefaultButton from '../UI/StyledButton';
import FormContainer from '../UI/Form/StyledFormContainer';
import FormElement from '../UI/Form/StyledFormElement';
import InputContainer from '../UI/Form/StyledInputContainer';
import InputSingleContainer from '../UI/Form/StyledInputSingleContainer';
import Label from '../UI/Form/StyledLable';
import Input from '../UI/Form/StyledInput';
import ButtonContainer from '../UI/StyledButtonContainer';

export default function Form({ onAddProduct }) {
	const {
		reset,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = data => {
		onAddProduct(data);
		reset();
		handleClick();
	};

	const initialButtonText = 'create';
	const [buttonText, setButtonText] = useState(initialButtonText);

	const handleClick = () => {
		setButtonText('added');

		setTimeout(() => {
			setButtonText(initialButtonText);
		}, 1000);
	};

	return (
		<FormContainer>
			<FormElement onSubmit={handleSubmit(onSubmit)}>
				<InputContainer>
					<InputSingleContainer>
						<Label htmlFor="image">image url</Label>
						<Input
							id="image"
							type="url"
							aria-invalid={errors.image ? 'true' : 'false'}
							{...register('image', {
								required: true,
							})}
							placeholder="Add image URL"
						/>
						{errors.image && errors.image.type === 'required' && (
							<span>please enter a valid url</span>
						)}
					</InputSingleContainer>
					<InputSingleContainer>
						<Label htmlFor="title">title</Label>
						<Input
							id="title"
							type="text"
							aria-invalid={errors.title ? 'true' : 'false'}
							{...register('title', {
								required: true,
								maxLength: 20,
							})}
							placeholder="short discriping title"
						/>
						{errors.title && errors.title.type === 'required' && (
							<span>please enter a short title</span>
						)}
						{errors.title && errors.title.type === 'maxLength' && (
							<span>Please use less than 20 characters</span>
						)}
					</InputSingleContainer>
					<InputSingleContainer>
						<Label htmlFor="detail">detail</Label>
						<Input
							id="detail"
							type="text"
							aria-invalid={errors.detail ? 'true' : 'false'}
							{...register('detail', {
								required: true,
								maxLength: 170,
							})}
							placeholder="Add important details"
						/>
						{errors.detail && errors.detail.type === 'required' && (
							<span>please enter the details</span>
						)}
						{errors.detail && errors.detail.type === 'maxLength' && (
							<span>Please use less than 170 characters</span>
						)}
					</InputSingleContainer>
					<InputSingleContainer>
						<Label htmlFor="email">email</Label>
						<Input
							id="email"
							type="email"
							aria-invalid={errors.email ? 'true' : 'false'}
							{...register('email', {
								required: true,
								maxLength: 60,
							})}
							placeholder="..."
						/>
						{errors.email && errors.email.type === 'required' && (
							<span>please enter a valid email</span>
						)}
						{errors.email && errors.email.type === 'maxLength' && (
							<span>Please use less than 60 characters</span>
						)}
					</InputSingleContainer>
				</InputContainer>
				<ButtonContainer>
					<DefaultButton type="submit">{buttonText}</DefaultButton>
				</ButtonContainer>
			</FormElement>
		</FormContainer>
	);
}
