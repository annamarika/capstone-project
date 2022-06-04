import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSWRConfig } from 'swr';
import DefaultButton from '../UI/Button/Button.styled';
import ButtonContainer from '../UI/Button/ButtonContainer.styled';
import FormContainer from '../UI/Form/FormContainer.styled';
import FormElement from '../UI/Form/FormElement.styled';
import ImageUploadText from '../UI/Form/ImageUploadText.styled';
import Input from '../UI/Form/Input.styled';
import InputContainer from '../UI/Form/InputContainer.styled';
import InputFile from '../UI/Form/InputFile.styled';
import InputSingleContainer from '../UI/Form/InputSingleContainer.styled';
import Label from '../UI/Form/Lable.styled';
import LabelUpload from '../UI/Form/LableUpload.styled';
import ImageWrapper from '../UI/Image/ImageWrapper.styled';
import Typography from '../UI/Typography';

export default function ProductModeEdit({
	id,
	name,
	title,
	detail,
	email,
	image,
	onDisableEditMode,
}) {
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
	useEffect(() => {
		setValue('name', name);
		setValue('title', title);
		setValue('detail', detail);
		setValue('image', image);
		setValue('email', email);
	}, []);

	return (
		<FormContainer>
			<FormElement onSubmit={handleSubmit(onSubmit)}>
				<InputContainer>
					<InputSingleContainer variant="upload">
						<ImageUploadText>
							<LabelUpload htmlFor="image">Image Upload</LabelUpload>
							<InputFile
								id="image"
								type="file"
								{...register('image', {})}
								onChange={event => {
									uploadImage(event);
								}}
							/>
							<Typography variant="pUpload">
								please use upright images only
							</Typography>
						</ImageUploadText>
						<ImageWrapper variant="placeholder">
							<Image alt={title} src={previewImage} layout="fill" objectFit="cover" />
						</ImageWrapper>
					</InputSingleContainer>
					<InputSingleContainer>
						<Label htmlFor="name">name</Label>
						<Input
							id="name"
							type="text"
							aria-invalid={errors.name ? 'true' : 'false'}
							{...register('name', {
								required: true,
								pattern: /\S(.*\S)?/,
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
								pattern: /\S(.*\S)?/,
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
								pattern: /\S(.*\S)?/,
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
								pattern: /\S(.*\S)?/,
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
