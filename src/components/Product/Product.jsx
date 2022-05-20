import Image from 'next/image';
import { useForm } from 'react-hook-form';
import Typography from '../UI/Typography';
import Container from '../UI/StyledContainer';
import ImageWrapper from '../UI/StyledImageWrapper';
import TextWrapper from '../UI/StyledTextWrapper';
import DefaultButton from '../UI/StyledButton';
import FormContainer from '../UI/Form/StyledFormContainer';
import FormElement from '../UI/Form/StyledFormElement';
import InputContainer from '../UI/Form/StyledInputContainer';
import InputSingleContainer from '../UI/Form/StyledInputSingleContainer';
import Label from '../UI/Form/StyledLable';
import Input from '../UI/Form/StyledInput';
import ButtonContainer from '../UI/StyledButtonContainer';

export default function Product({ id, title, detail, email, image, altText, onDeleteProduct }) {
	const handleDelete = () => {
		onDeleteProduct(id);
	};
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = event => {
		event.preventDefault();
	};

	return (
		<>
			<Container>
				<ImageWrapper>
					<Image
						src={image}
						alt={altText}
						width={3456}
						height={5184}
						layout="fill"
						objectFit="cover"
					/>
				</ImageWrapper>
				<TextWrapper>
					<Typography variant="p">{title}</Typography>
					<Typography variant="p">{detail}</Typography>
					<DefaultButton>{email}</DefaultButton>
					<DefaultButton onClick={handleDelete}>delete</DefaultButton>
				</TextWrapper>
			</Container>

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
						<DefaultButton type="submit">save</DefaultButton>
					</ButtonContainer>
				</FormElement>
			</FormContainer>
		</>
	);
}
