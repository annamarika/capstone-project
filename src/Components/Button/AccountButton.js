import LogoButtonStyle from '../UI/Button/LogoButton.styled';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function AccountButton() {
	const { data: session } = useSession();

	if (session) {
		return (
			<LogoButtonStyle type="button" onClick={() => signOut()}>
				SIGN OUT
			</LogoButtonStyle>
		);
	}
	return (
		<LogoButtonStyle type="button" onClick={() => signIn()}>
			SIGN IN
		</LogoButtonStyle>
	);
}
