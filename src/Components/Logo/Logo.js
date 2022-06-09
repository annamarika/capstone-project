import { useState } from 'react';
import Bottom from '../UI/Logo/LogoBottom.styled';
import BottomDecorate from '../UI/Logo/LogoBottomDecorate.styled';
import LogoContainer from '../UI/Logo/LogoContainer.styled';
import Legs from '../UI/Logo/LogoLegs';
import LegsContainer from '../UI/Logo/LogoLegsContainer.styled';
import Orange from '../UI/Logo/LogoOrange.styled';
import Pink from '../UI/Logo/LogoPink.styled';
import TopLeft from '../UI/Logo/LogoTopLeft.styled';
import { useSession, signIn, signOut } from 'next-auth/react';
import LogoButtonStyle from '../UI/Button/LogoButton.styled';

export default function Logo() {
	const [toggle, setToggle] = useState(true);
	const { data: session } = useSession();

	if (session) {
		return (
			<LogoContainer>
				<TopLeft toggle={!toggle} />
				<Orange toggle={!toggle} />
				<Pink toggle={!toggle} />

				<Bottom toggle={!toggle}>
					<BottomDecorate toggle={!toggle}>
						<LogoButtonStyle type="button" onClick={() => signOut(setToggle(toggle))}>
							SIGN OUT
						</LogoButtonStyle>
					</BottomDecorate>
				</Bottom>
				<LegsContainer toggle={!toggle}>
					<Legs />
					<Legs variant="legRight" />
				</LegsContainer>
			</LogoContainer>
		);
	}
	return (
		<LogoContainer>
			<TopLeft toggle={toggle} />
			<Orange toggle={toggle} />
			<Pink toggle={toggle} />

			<Bottom toggle={toggle}>
				<BottomDecorate toggle={toggle}>
					<LogoButtonStyle type="button" onClick={() => signIn(setToggle(!toggle))}>
						SIGN IN
					</LogoButtonStyle>
				</BottomDecorate>
			</Bottom>
			<LegsContainer toggle={toggle}>
				<Legs />
				<Legs variant="legRight" />
			</LegsContainer>
		</LogoContainer>
	);
}
