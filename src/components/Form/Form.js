import { useForm } from 'react-hook-form';
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

	return (
		<FormContainer>
			<FormElement onSubmit={handleSubmit(onSubmit)}>
				<InputContainer>
					<InputSingleContainer>
						<Label htmlFor="image">image url</Label>
						<Input
							type="url"
							aria-invalid={errors.name ? 'true' : 'false'}
							{...register('image', {
								required: 'Please fill in a url',
							})}
							placeholder="Add image URL"
						/>
					</InputSingleContainer>
					<InputSingleContainer>
						<Label htmlFor="title">title</Label>
						<Input
							type="text"
							aria-invalid={errors.name ? 'true' : 'false'}
							{...register('title', {
								required: 'short discription',
							})}
						/>
					</InputSingleContainer>
					<InputSingleContainer>
						<Label htmlFor="detail">detail</Label>
						<Input
							type="text"
							aria-invalid={errors.name ? 'true' : 'false'}
							{...register('detail', {
								required: 'Add important details',
							})}
							placeholder="Add important details"
						/>
					</InputSingleContainer>
					<InputSingleContainer>
						<Label htmlFor="email">email</Label>
						<Input
							type="email"
							aria-invalid={errors.name ? 'true' : 'false'}
							{...register('email', {
								required: 'please add your email',
							})}
						/>
					</InputSingleContainer>
				</InputContainer>
				<ButtonContainer>
					<DefaultButton type="submit">create</DefaultButton>
				</ButtonContainer>
			</FormElement>
		</FormContainer>
	);
}
