import { useState } from 'react';
import AccountButton from '../Button/AccountButton';
import Bottom from '../UI/Logo/LogoBottom.styled';
import BottomDecorate from '../UI/Logo/LogoBottomDecorate.styled';
import LogoContainer from '../UI/Logo/LogoContainer.styled';
import Legs from '../UI/Logo/LogoLegs';
import LegsContainer from '../UI/Logo/LogoLegsContainer.styled';
import Orange from '../UI/Logo/LogoOrange.styled';
import Pink from '../UI/Logo/LogoPink.styled';
import TopLeft from '../UI/Logo/LogoTopLeft.styled';

export default function Logo() {
	const [toggle, setToggle] = useState(true);

	return (
		<LogoContainer>
			<TopLeft toggle={toggle} />
			<Orange toggle={toggle} />
			<Pink toggle={toggle} />

			<Bottom toggle={toggle}>
				<BottomDecorate toggle={toggle}>
					<AccountButton
						toggle={toggle}
						type="button"
						onClick={() => setToggle(!toggle)}
					/>
				</BottomDecorate>
			</Bottom>
			<LegsContainer toggle={toggle}>
				<Legs />
				<Legs variant="legRight" />
			</LegsContainer>
		</LogoContainer>
	);
}
