import { useForm } from 'react-hook-form';
import { useState } from 'react';
import FormContainer from '../UI/Form/FormContainer.styled';
import FormElement from '../UI/Form/FormElement.styled';
import InputContainer from '../UI/Form/InputContainer.styled';
import InputSingleContainer from '../UI/Form/InputSingleContainer.styled';
import Label from '../UI/Form/Lable.styled';
import Input from '../UI/Form/Input.styled';
import ButtonContainer from '../UI/Button/ButtonContainer.styled';
import Image from 'next/image';
import ImageWrapper from '../UI/Image/ImageWrapper.styled';
import Typography from '../UI/Typography';
import InputFile from '../UI/Form/InputFile.styled';
import LabelUpload from '../UI/Form/LableUpload.styled';
import CreateButton from '../Button/CreateButton';
import ImageUploadText from '../UI/Form/ImageUploadText.styled';
import { useSession } from 'next-auth/react';
import Textarea from '../UI/Form/Textarea.styled';

export default function Form() {
	const { data: session } = useSession();
	const [titleValue, setTitleValue] = useState('');
	const [detailValue, setDetailValue] = useState('');
	const [bookmarkValue, setBookmarkValue] = useState(false);
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

	const onSubmit = async data => {
		try {
			const response = await fetch('/api/product/create/', {
				method: 'POST',
				body: JSON.stringify({
					image: previewImage.secure_url,
					user: session.user,
					title: titleValue,
					detail: detailValue,
					bookmark: bookmarkValue,
				}),
			});
			reset();
			const dataerror = await response.json();
			setBookmarkValue(bookmarkValue);
			data.image = previewImage.secure_url;
			return dataerror;
		} catch (error) {
			console.error(`Ooops we had an error: ${error}`);
		}
	};

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
								aria-invalid={errors.image ? 'true' : 'false'}
								{...register('image', {
									required: true,
								})}
								onChange={event => {
									uploadImage(event);
								}}
							/>
							{errors.image && errors.image.type === 'required' && (
								<span>please select a file</span>
							)}
							<Typography variant="pUpload">
								please use upright images only
							</Typography>
						</ImageUploadText>

						<ImageWrapper variant="placeholder">
							<Image
								alt="placeholder"
								src={previewImage.secure_url}
								layout="fill"
								objectFit="cover"
							/>
						</ImageWrapper>
					</InputSingleContainer>
					<InputSingleContainer>
						<Label htmlFor="title" variant="headline">
							category
						</Label>
						<Input
							id="title"
							type="text"
							aria-invalid={errors.title ? 'true' : 'false'}
							{...register('title', {
								required: true,
								pattern: /\S(.*\S)?/,
								maxLength: 20,
							})}
							placeholder="..."
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
						<Label htmlFor="detail" variant="headline">
							detail
						</Label>
						<Textarea
							rows="5"
							cols="60"
							variant="detail"
							id="detail"
							type="text"
							aria-invalid={errors.detail ? 'true' : 'false'}
							{...register('detail', {
								required: true,
								pattern: /\S(.*\S)?/,
								maxLength: 170,
							})}
							placeholder="size, location, status ... "
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
					<CreateButton />
				</ButtonContainer>
			</FormElement>
		</FormContainer>
	);
}
