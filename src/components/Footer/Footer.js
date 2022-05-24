import Link from 'next/link';

export default function Footer() {
	return (
		<header>
			<Link passHref href="/products">
				<button type="button">Produkte</button>
			</Link>
			<Link passHref href="/categories">
				<button type="button">Kategorien</button>
			</Link>
			<Link assHref href="/create-product">
				<button type="button">Produkt hinzufügen</button>
			</Link>
			<Link passHref href="/create-category">
				<button type="button">Kategorie hinzufügen</button>
			</Link>
		</header>
	);
}
