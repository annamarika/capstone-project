import { useState } from 'react';
import MySVG from '../UI/MySVG';
import BookmarkInput from '../UI/Bookmark/BookmarkInput.styled';
import BookmarkContainer from '../UI/Bookmark/BookmarkContainer.styled';

export default function Bookmark({ active, ...otherProps }) {
	const [checked, setChecked] = useState(false);
	const handleChange = () => {
		setChecked(!checked);
	};

	return (
		<label>
			<BookmarkInput
				type="checkbox"
				active={active}
				{...otherProps}
				onChange={handleChange}
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
