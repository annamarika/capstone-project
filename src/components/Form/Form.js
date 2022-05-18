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
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data, event) => {
		onAddProduct(data);
		event.target.reset();
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
								required: 'Please fill in a url',
							})}
							placeholder="Add image URL"
						/>
					</InputSingleContainer>
					<InputSingleContainer>
						<Label htmlFor="title">title</Label>
						<Input
							id="title"
							type="text"
							aria-invalid={errors.title ? 'true' : 'false'}
							{...register('title', {
								required: 'short descriptive title',
								maxLength: 20,
							})}
							placeholder="short discriping title"
						/>
					</InputSingleContainer>
					<InputSingleContainer>
						<Label htmlFor="detail">detail</Label>
						<Input
							id="detail"
							type="text"
							aria-invalid={errors.detail ? 'true' : 'false'}
							{...register('detail', {
								required: 'Add important details',
								maxLength: 170,
							})}
							placeholder="Add important details"
						/>
					</InputSingleContainer>
					<InputSingleContainer>
						<Label htmlFor="email">email</Label>
						<Input
							id="email"
							type="email"
							aria-invalid={errors.email ? 'true' : 'false'}
							{...register('email', {
								required: 'please add your email',
								maxLength: 60,
							})}
							placeholder="..."
						/>
					</InputSingleContainer>
				</InputContainer>
				<ButtonContainer>
					<DefaultButton type="submit" onClick={handleClick}>
						{buttonText}
					</DefaultButton>
				</ButtonContainer>
			</FormElement>
		</FormContainer>
	);
}
