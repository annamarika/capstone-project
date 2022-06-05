import Form from '../src/Components/Form/Form';
import { useSession } from 'next-auth/react';

export default function Create() {
	const { data: session } = useSession();
	return (
		<>
			<div />
			{session ? <Form /> : <p>Please sign-in</p>}
		</>
	);
}
