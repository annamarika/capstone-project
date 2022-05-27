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

export default function Form({ onAddProduct }) {
	const {
		watch,
		reset,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const CLOUD = process.env.CLOUDINARY_CLOUD;
	console.log(CLOUD);
	const PRESET = process.env.CLOUDINARY_PRESET;
	console.log(PRESET);

	const placeholderImage = {
		url: 'https://images.unsplash.com/photo-1542295669297-4d352b042bca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
		width: 120,
		height: 180,
	};

	const [previewImage, setPreviewImage] = useState(placeholderImage);

	const uploadImage = async () => {
		try {
			const url = `https://api.cloudinary.com/v1_1/${CLOUD}/upload`;
			const image = watch('image')[0];
			console.log(image);

			const fileData = new FormData();
			fileData.append('file', image);
			fileData.append('upload_preset', PRESET);

			const response = await fetch(url, {
				method: 'POST',
				body: fileData,
			});

			setPreviewImage(await response.json());
		} catch (error) {
			console.error(error.message);
		}
	};

	const onSubmit = data => {
		data.image = previewImage.url;

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
					<InputSingleContainer>
						<Label htmlFor="image">image url</Label>
						<Input
							id="image"
							type="file"
							aria-invalid={errors.image ? 'true' : 'false'}
							{...register('image', {
								required: true,
							})}
							onChange={uploadImage}
						/>
						<Image
							alt="placeholder"
							src={previewImage.url}
							width={previewImage.width}
							height={previewImage.height}
						/>
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
