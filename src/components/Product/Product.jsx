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

	const onSubmit = data => {
		data.image = previewImage;
		onUpdateProduct(id, data);
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
							aria-invalid={errors.image ? 'true' : 'false'}
							{...register('image', {
								required: true,
							})}
							onChange={uploadImage}
						/>
						{errors.image && errors.image.type === 'required' && (
							<span>please select a file</span>
						)}
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
