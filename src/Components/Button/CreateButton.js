import { useState } from 'react';
import DefaultButton from '../UI/Button/Button.styled';

export default function CreateButton() {
	const initialButtonText = 'create';
	const [buttonText, setButtonText] = useState(initialButtonText);
	const handleClick = () => {
		setButtonText('added');
		setTimeout(() => {
			setButtonText(initialButtonText);
		}, 2000);
	};

	return (
		<DefaultButton type="submit" onClick={handleClick}>
			{buttonText}
		</DefaultButton>
	);
}
