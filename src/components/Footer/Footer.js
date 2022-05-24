import Link from 'next/link';

export default function Footer() {
	return (
		<header>
			<Link passHref href="/products">
				<button type="button">products</button>
			</Link>
			<Link passHref href="/create">
				<button type="button">create</button>
			</Link>
			<Link assHref href="/profile">
				<button type="button">profile</button>
			</Link>
		</header>
	);
}
