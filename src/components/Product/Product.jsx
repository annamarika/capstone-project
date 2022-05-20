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
import { useState } from 'react';
import { useEffect } from 'react';

export default function Product(props) {
	const [isEditMode, setIsEditMode] = useState(false);

	const enableEditMode = () => {
		setIsEditMode(true);
	};
	const disableEditMode = () => {
		setIsEditMode(false);
	};

	return (
		// eslint-disable-next-line react/jsx-no-useless-fragment
		<>
			{isEditMode ? (
				<ProductModeEdit {...props} onDisableEditMode={disableEditMode} />
			) : (
				<ProductModeShow {...props} onEnableEditMode={enableEditMode} />
			)}
		</>
	);
}

function ProductModeShow({
	id,
	title,
	detail,
	email,
	image,
	altText,
	onDeleteProduct,
	onEnableEditMode,
}) {
	const handleDelete = () => {
		onDeleteProduct(id);
	};
	return (
		<Container>
			<ImageWrapper>
				<Image src={image} alt={altText} layout="fill" objectFit="cover" />
			</ImageWrapper>
			<TextWrapper>
				<Typography variant="p">{title}</Typography>
				<Typography variant="p">{detail}</Typography>
				<DefaultButton>{email}</DefaultButton>
				<DefaultButton onClick={handleDelete}>delete</DefaultButton>
				<DefaultButton onClick={onEnableEditMode}>edit</DefaultButton>
			</TextWrapper>
		</Container>
	);
}

function ProductModeEdit({ id, title, detail, email, image, onDisableEditMode, onUpdateProduct }) {
	const {
		setValue,
		watch,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const {
		image: imageValue,
		detail: detailValue,
		email: emailValue,
		title: titleValue,
	} = watch();

	useEffect(() => {
		setValue('title', title);
		setValue('detail', detail);
		setValue('image', image);
		setValue('email', email);
	}, []);

	const onSubmit = () => {
		onDisableEditMode();
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
						/>
					</InputSingleContainer>
				</InputContainer>
				<ButtonContainer>
					<DefaultButton
						type="submit"
						onClick={event => {
							event.preventDefault();
							onUpdateProduct(
								id,
								titleValue,
								detailValue,
								imageValue,
								titleValue,
								emailValue
							);
						}}
					>
						save
					</DefaultButton>
				</ButtonContainer>
			</FormElement>
		</FormContainer>
	);
}
