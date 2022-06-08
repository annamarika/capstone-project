import { useState } from 'react';
import { useSWRConfig } from 'swr';
import MySVG from '../UI/MySVG';
import BookmarkInput from '../UI/Bookmark/BookmarkInput.styled';
import BookmarkContainer from '../UI/Bookmark/BookmarkContainer.styled';

export default function Bookmark({ id, active, ...otherProps }) {
	const [checked, setChecked] = useState(active);
	const { mutate } = useSWRConfig();

	const handleChange = async () => {
		const response = await fetch('/api/bookmark/' + id, {
			method: 'PUT',
			body: JSON.stringify({
				bookmark: !checked,
			}),
		});

		console.log(await response.json());
		setChecked(!checked);
		mutate('/api/products');
	};

	return (
		<label>
			<BookmarkInput
				type="checkbox"
				active={active}
				{...otherProps}
				onChange={() => {
					handleChange();
				}}
			/>

			<BookmarkContainer>
				<MySVG
					variant="bookmark"
					color={checked ? 'var(--button-bg-color)' : 'var(--main-bg-color-dark)'}
				/>
			</BookmarkContainer>
		</label>
	);
}
