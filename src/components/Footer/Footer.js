import Link from 'next/link';

export default function Footer() {
	return (
		<footer>
			<nav>
				<Link passHref href="/products">
					<button type="button">products</button>
				</Link>
				<Link passHref href="/create">
					<button type="button">create</button>
				</Link>
				<Link passHref href="/profile">
					<button type="button">profile</button>
				</Link>
				<Link passHref href="/">
					<button type="button">index</button>
				</Link>
			</nav>
		</footer>
	);
}
