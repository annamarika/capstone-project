import Image from 'next/image';
import { useForm } from 'react-hook-form';
import Typography from '../UI/Typography';
import Container from '../UI/StyledContainer';
import ImageWrapper from '../UI/StyledImageWrapper';
import TextWrapper from '../UI/StyledTextWrapper';
import DefaultButton from '../UI/Button/StyledButton';
import FormContainer from '../UI/Form/StyledFormContainer';
import FormElement from '../UI/Form/StyledFormElement';
import InputContainer from '../UI/Form/StyledInputContainer';
import InputSingleContainer from '../UI/Form/StyledInputSingleContainer';
import Label from '../UI/Form/StyledLable';
import Input from '../UI/Form/StyledInput';
import ButtonContainer from '../UI/Button/StyledButtonContainer';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Product(props) {
	const [isEditMode, setIsEditMode] = useState(false);

	const enableEditMode = () => {
		setIsEditMode(true);
	};
	const disableEditMode = () => {
		setIsEditMode(false);
	};

	return (
		<div>
			{isEditMode ? (
				<ProductModeEdit {...props} onDisableEditMode={disableEditMode} />
			) : (
				<ProductModeShow {...props} onEnableEditMode={enableEditMode} />
			)}
		</div>
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
	const { asPath } = useRouter();
	console.log(image);
	return (
		<Container variant="product">
			<ImageWrapper>
				<Image src={image} alt={altText} layout="fill" objectFit="cover" />
			</ImageWrapper>
			<TextWrapper>
				<Typography variant="p">{title}</Typography>
				<Typography variant="p">{detail}</Typography>

				{asPath !== '/profile' && (
					<DefaultButton>
						<Typography href={`mailto:${email}`} variant="a">
							email
						</Typography>
					</DefaultButton>
				)}
				{asPath !== '/products' && (
					<DefaultButton onClick={handleDelete}>delete</DefaultButton>
				)}
				{asPath !== '/products' && (
					<DefaultButton variant="hide" onClick={onEnableEditMode}>
						edit
					</DefaultButton>
				)}
			</TextWrapper>
		</Container>
	);
}

function ProductModeEdit({ id, title, detail, email, image, onDisableEditMode, onUpdateProduct }) {
	const {
		setValue,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	useEffect(() => {
		setValue('title', title);
		setValue('detail', detail);
		setValue('image', image);
		setValue('email', email);
	}, []);

	const onSubmit = data => {
		onUpdateProduct(id, data);
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
								required: true,
							})}
						/>
						{errors.imageValue && errors.imageValue.type === 'required' && (
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
					<DefaultButton type="submit">save</DefaultButton>
					<DefaultButton type="button" onClick={onDisableEditMode}>
						cancel
					</DefaultButton>
				</ButtonContainer>
			</FormElement>
		</FormContainer>
	);
}
