import Image from 'next/image';
import { useForm } from 'react-hook-form';
import Typography from '../UI/Typography';
import Container from '../UI/StyledContainer';
import ImageWrapper from '../UI/Image/StyledImageWrapper';
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
import ImageContainer from '../UI/Image/StyledImageContainer';
import InputFile from '../UI/Form/StyledInputFile';
import LabelUpload from '../UI/Form/StyledLableUpload';
import { useSWRConfig } from 'swr';

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

function ProductModeShow({ id, name, title, detail, email, image, altText, onEnableEditMode }) {
	console.log(image);
	const { mutate } = useSWRConfig();
	const { asPath } = useRouter();

	return (
		<Container variant="product">
			<ImageWrapper>
				<Image src={image} alt={altText} layout="fill" objectFit="cover" />
			</ImageWrapper>
			<TextWrapper>
				<Typography variant="p">{name}</Typography>
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
					<DefaultButton
						onClick={async () => {
							const response = await fetch('/api/product/' + id, {
								method: 'DELETE',
							});
							console.log(await response.json());
							mutate('/api/products');
						}}
					>
						delete
					</DefaultButton>
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

function ProductModeEdit({ id, name, title, detail, email, image, onDisableEditMode }) {
	const [nameValue, setNameValue] = useState(name);
	const [titleValue, setTitleValue] = useState(title);
	const [detailValue, setDetailValue] = useState(detail);
	const [emailValue, setEmailValue] = useState(email);
	const { mutate } = useSWRConfig();

	const {
		setValue,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	useEffect(() => {
		setValue('name', name);
		setValue('title', title);
		setValue('detail', detail);
		setValue('image', image);
		setValue('email', email);
	}, []);

	const CLOUD = process.env.CLOUDINARY_CLOUD;

	const PRESET = process.env.CLOUDINARY_PRESET;

	const [previewImage, setPreviewImage] = useState(image);

	const uploadImage = async event => {
		try {
			const url = `https://api.cloudinary.com/v1_1/${CLOUD}/upload`;
			const image = event.target.files[0];

			const fileData = new FormData();
			fileData.append('file', image);
			fileData.append('upload_preset', PRESET);

			const response = await fetch(url, {
				method: 'POST',
				body: fileData,
			});
			const translation = await response.json();
			const newImage = translation.public_id;
			setPreviewImage(newImage);
		} catch (error) {
			console.error(error.message);
		}
	};

	const onSubmit = async data => {
		const response = await fetch('/api/product/' + id, {
			method: 'PUT',
			body: JSON.stringify({
				image: previewImage,
				name: nameValue,
				title: titleValue,
				detail: detailValue,
				email: emailValue,
			}),
		});
		console.log(await response.json());
		mutate('/api/products');

		data.image = previewImage;

		onDisableEditMode();
	};

	return (
		<FormContainer>
			<FormElement onSubmit={handleSubmit(onSubmit)}>
				<InputContainer>
					<InputSingleContainer variant="upload">
						<LabelUpload htmlFor="image">Image Upload</LabelUpload>
						<InputFile
							id="image"
							type="file"
							{...register('image', {})}
							onChange={event => {
								uploadImage(event);
							}}
						/>

						<ImageContainer>
							<Typography variant="pUpload">
								for best quality {'->'} please use upright images only
							</Typography>
							<ImageWrapper variant="placeholder">
								<Image
									alt={title}
									src={previewImage}
									layout="fill"
									objectFit="cover"
								/>
							</ImageWrapper>
						</ImageContainer>
					</InputSingleContainer>
					<InputSingleContainer>
						<Label htmlFor="name">name</Label>
						<Input
							id="name"
							type="text"
							aria-invalid={errors.name ? 'true' : 'false'}
							{...register('name', {
								required: true,
								maxLength: 20,
							})}
							onChange={event => {
								setNameValue(event.target.value);
							}}
						/>
						{errors.name && errors.name.type === 'required' && (
							<span>please enter your name</span>
						)}
						{errors.name && errors.name.type === 'maxLength' && (
							<span>Please use less than 20 characters</span>
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
							onChange={event => {
								setTitleValue(event.target.value);
							}}
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
							onChange={event => {
								setDetailValue(event.target.value);
							}}
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
							onChange={event => {
								setEmailValue(event.target.value);
							}}
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
