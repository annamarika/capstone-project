import { useForm } from 'react-hook-form';

export default function Form({ onAddProduct }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data, event) => {
		onAddProduct(data);
		event.target.reset();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label htmlFor="image">image url</label>
			<input
				type="text"
				aria-invalid={errors.name ? 'true' : 'false'}
				{...register('image', {
					required: 'Please fill in the name field',
				})}
				placeholder="Add image url within '...' "
			/>
			<label htmlFor="title">title</label>
			<input
				type="text"
				aria-invalid={errors.name ? 'true' : 'false'}
				{...register('title', {
					required: 'short discription',
				})}
			/>
			<label htmlFor="detail">detail</label>
			<input
				type="text"
				aria-invalid={errors.name ? 'true' : 'false'}
				{...register('detail', {
					required: 'Add important details',
				})}
				placeholder="Add important details"
			/>
			<label htmlFor="email">email</label>
			<input
				type="text"
				aria-invalid={errors.name ? 'true' : 'false'}
				{...register('email', {
					required: 'please add your email',
				})}
			/>
			<button type="submit">create</button>
		</form>
	);
}
