import { useForm } from 'react-hook-form';
import { useState } from 'react';
import DefaultButton from '../UI/Button/StyledButton';
import FormContainer from '../UI/Form/StyledFormContainer';
import FormElement from '../UI/Form/StyledFormElement';
import InputContainer from '../UI/Form/StyledInputContainer';
import InputSingleContainer from '../UI/Form/StyledInputSingleContainer';
import Label from '../UI/Form/StyledLable';
import Input from '../UI/Form/StyledInput';
import ButtonContainer from '../UI/Button/StyledButtonContainer';
import Image from 'next/image';
import ImageWrapper from '../UI/Image/StyledImageWrapper';
import Typography from '../UI/Typography';
import ImageContainer from '../UI/Image/StyledImageContainer';
import InputFile from '../UI/Form/StyledInputFile';
import LabelUpload from '../UI/Form/StyledLableUpload';

export default function Form({ onAddProduct }) {
	const {
		reset,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const CLOUD = process.env.CLOUDINARY_CLOUD;

	const PRESET = process.env.CLOUDINARY_PRESET;

	const placeholderImage = {
		secure_url: 'capstone/poldq9fc4vzrosbtl2zu',
		width: 120,
		height: 180,
	};

	const [previewImage, setPreviewImage] = useState(placeholderImage);

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
			const newImage = {
				secure_url: translation.public_id,
				width: translation.width,
				height: translation.height,
			};
			setPreviewImage(newImage);
		} catch (error) {
			console.error(error.message);
		}
	};

	const onSubmit = data => {
		data.image = previewImage.secure_url;

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
		}, 2000);
	};

	return (
		<FormContainer>
			<FormElement onSubmit={handleSubmit(onSubmit)}>
				<InputContainer>
					<InputSingleContainer variant="upload">
						<LabelUpload htmlFor="image">Image Upload</LabelUpload>
						<InputFile
							id="image"
							variant="file"
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
									alt="placeholder"
									src={previewImage.secure_url}
									layout="fill"
									objectFit="cover"
								/>
							</ImageWrapper>
						</ImageContainer>
					</InputSingleContainer>
					<InputSingleContainer>
						<Label htmlFor="title" variant="headline">
							title
						</Label>
						<Input
							id="title"
							type="text"
							aria-invalid={errors.title ? 'true' : 'false'}
							{...register('title', {
								required: true,
								maxLength: 20,
							})}
							placeholder="..."
						/>
						{errors.title && errors.title.type === 'required' && (
							<span>please enter a short title</span>
						)}
						{errors.title && errors.title.type === 'maxLength' && (
							<span>Please use less than 20 characters</span>
						)}
					</InputSingleContainer>
					<InputSingleContainer>
						<Label htmlFor="detail" variant="headline">
							detail
						</Label>
						<Input
							id="detail"
							type="text"
							aria-invalid={errors.detail ? 'true' : 'false'}
							{...register('detail', {
								required: true,
								maxLength: 170,
							})}
							placeholder="..."
						/>
						{errors.detail && errors.detail.type === 'required' && (
							<span>please enter the details</span>
						)}
						{errors.detail && errors.detail.type === 'maxLength' && (
							<span>Please use less than 170 characters</span>
						)}
					</InputSingleContainer>
					<InputSingleContainer>
						<Label htmlFor="email" variant="headline">
							email
						</Label>
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
