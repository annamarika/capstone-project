import { useState } from 'react';
import LogoButtonStyle from '../UI/Button/LogoButton.styled';

export default function LogoButton() {
	const initialButtonText = 'open';
	const [buttonText, setButtonText] = useState(initialButtonText);
	const handleClick = () => {
		setButtonText('close');
		setTimeout(() => {
			setButtonText(initialButtonText);
		}, 2000);
	};

	return (
		<LogoButtonStyle type="submit" onClick={handleClick}>
			{buttonText}
		</LogoButtonStyle>
	);
}
