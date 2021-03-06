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
import Textarea from '../UI/Form/Textarea.styled';
import ImageWrapper from '../UI/Image/ImageWrapper.styled';
import Typography from '../UI/Typography';

export default function ProductModeEdit({ id, title, detail, image, onDisableEditMode }) {
	const [titleValue, setTitleValue] = useState(title);
	const [detailValue, setDetailValue] = useState(detail);
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
		try {
			const response = await fetch('/api/product/' + id, {
				method: 'PUT',
				body: JSON.stringify({
					image: previewImage,
					title: titleValue,
					detail: detailValue,
				}),
			});
			const dataerror = await response.json();
			mutate('/api/products');
			data.image = previewImage;
			onDisableEditMode();
			return dataerror;
		} catch (error) {
			console.error(`Ooops we had an error: ${error}`);
		}
	};

	useEffect(() => {
		setValue('title', title);
		setValue('detail', detail);
		setValue('image', image);
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
						<Label htmlFor="title">category</Label>
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
						<Textarea
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
