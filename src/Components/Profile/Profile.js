import { useSession } from 'next-auth/react';
import Typography from '../UI/Typography';
import Link from 'next/link';
import { Router } from 'next/router';
import ProfileContainer from '../UI/Profile/ProfileContainer.styled';
import LinkContainer from '../UI/Profile/LinkContainer.styled';

export default function Profile() {
	const { data: session } = useSession();
	if (session) {
		return (
			<ProfileContainer>
				<Typography variant="p" border="none">
					Signed in as
				</Typography>
				<Typography variant="username"> {session.user.name} </Typography>

				<LinkContainer>
					<Link passHref href="/">
						<Typography variant="a" pathName={Router.pathname}>
							<Typography variant="p" color="white">
								sign out?
							</Typography>
						</Typography>
					</Link>
				</LinkContainer>
			</ProfileContainer>
		);
	}
	return (
		<ProfileContainer>
			<Typography variant="p" border="none">
				please sign in
			</Typography>
			<LinkContainer>
				<Link passHref href="/">
					<Typography variant="a" pathName={Router.pathname}>
						<Typography variant="p" color="white">
							sign in?
						</Typography>
					</Typography>
				</Link>
			</LinkContainer>
		</ProfileContainer>
	);
}
